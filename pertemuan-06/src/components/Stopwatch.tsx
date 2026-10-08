// TODO(Level 5): komponen TANPA props. Render teks "{detik} detik" (mulai
// 0) dan satu tombol yang bertuliskan "Start" saat berhenti dan "Stop"
// saat berjalan. Selagi berjalan, detik bertambah tiap 1 detik. Saat
// di-Stop, timer HARUS benar-benar berhenti (tidak ada timer tersisa);
// Start lagi melanjutkan dari angka terakhir. Gunakan state `jalan` sebagai
// dependency efek.

import { useEffect, useState } from "react"

// Lihat SOAL.md untuk kontrak lengkap.
export function Stopwatch() {
  const [detik, setDetik] = useState(0)
  const [play, setPlay] = useState(false)

  useEffect(() => {
    if (play) {
      const interval = setInterval(() => {
        setDetik((d) => d + 1)
      }, 1000);
      
      return () => {
        clearInterval(interval)
    }
    }
  }, [play])

  return (
    <div>
      <p>{detik} detik</p>
      <button onClick={() => {
        setPlay(!play)
      }}>{play? "Stop" : "Start"}</button>
    </div>
  )
}
