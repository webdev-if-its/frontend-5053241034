// TODO(Level 10): beri tipe props yang benar — { detikAwal: number }.
// Gabungkan semua materi pertemuan ini jadi timer belajar:
// - teks "Sisa: {n} detik" (mulai dari detikAwal), tombol "Mulai"/"Jeda"
//   (bergantian) dan tombol "Reset",
// - saat berjalan, sisa berkurang tiap detik; "Jeda" menghentikan timer
//   (tidak ada timer tersisa); "Reset" mengembalikan sisa ke detikAwal
//   dan berhenti,
// - saat sisa = 0: tampil teks "Selesai!", timer berhenti otomatis, dan
//   tombol "Mulai" dinonaktifkan (disabled),
// - judul tab (document.title) selalu "Sisa: {n} detik" selama komponen
//   terpasang, dan KEMBALI ke judul semula saat komponen dilepas
//   (cleanup).
// Lihat SOAL.md untuk kontrak lengkap.

import { useEffect, useState } from "react"

type Props = {
  detikAwal: number
}

export function TimerBelajar({ detikAwal }: Props) {
  const [detik, setDetik] = useState(detikAwal)
  const [play, setPlay] = useState(false)
  const [selesai, setSelesai] = useState(false)

  function onReset() {
    setDetik(detikAwal)
    setPlay(false)
    setSelesai(false)
  }

  function onPlay() {
    setPlay(!play)
  }

  useEffect(() => {
    const defaultTitle = document.title

    return () => {
      document.title = defaultTitle
    }
  }, [])

  useEffect(() => {
    document.title = "Sisa: " + detik + " detik"

    if (detik <= 0) {
      setSelesai(true)
      setPlay(false)
      return
    }

    if (play) {
      const interval = setInterval(() => {
        setDetik((d) => d-1)
      }, 1000);

      return () => {
        clearInterval(interval)
      }
    }

  }, [detik, play])

  return (
    <div>
      <p>Sisa: {detik} detik</p>
      <button onClick={onPlay} disabled={selesai}>{!play? "Mulai" : "Jeda"}</button>
      <button onClick={onReset}>Reset</button>
      {selesai && <p>Selesai!</p>}
    </div>
  )
}
