// TODO(Level 9): beri tipe props yang benar — { detikAwal: number;
// onSelesai: () => void }. Tampilkan "Sisa: {n}" yang mulai dari detikAwal
// dan berkurang 1 tiap detik. Saat mencapai 0: panggil onSelesai TEPAT
// SEKALI, berhenti di 0 (tidak negatif), dan tidak ada timer tersisa.
// Saat komponen dilepas di tengah jalan, timer harus dibersihkan dan
// onSelesai tidak boleh terpanggil.
// Lihat SOAL.md untuk kontrak lengkap.

import { useEffect, useState } from "react"

type Props = {
  detikAwal: number
  onSelesai: () => void
}

export function Countdown({ detikAwal, onSelesai }: Props) {
  const [detik, setDetik] = useState(detikAwal)

  useEffect(() => {
    if (detik <= 0) {
      onSelesai()
      return
    }

    const interval = setInterval(() => {
      setDetik((d) => d-1)
    }, 1000);

    return () => {
      clearInterval(interval)
    }
  }, [detik, onSelesai])

  return <p>Sisa: {detik}</p>
}
