// TODO(Level 9): beri tipe props yang benar — { tugas: Tugas[] } (impor
// tipe Tugas dari '../types'). Render:
// - SELALU teks yang memuat pola "<jumlah selesai> dari <total> selesai"
//   (mis. tugas 2 dari 5 selesai -> teks memuat "2" dan "5"),
// - Pakai LOGICAL OPERATOR (&&): TAMBAHAN teks yang memuat kata "Selesai"
//   (mis. "Semua tugas selesai!") HANYA kalau tugas.length lebih dari 0
//   DAN semuanya selesai. Hati-hati: array KOSONG bukan "semua selesai" —
//   jangan sampai pesan perayaan muncul saat tugas.length === 0 (jebakan
//   umum: Array.prototype.every() pada array kosong selalu true).
// Lihat SOAL.md untuk kontrak lengkap.

import type { Tugas } from "../types"

type Props = {
  tugas: Tugas[]
}

export function RingkasanTugas(props: Props) {
  let jmlSelesai = 0
  let total = props.tugas.length
  for (let index = 0; index < total; index++) {
    if (props.tugas[index].selesai == true) {
      jmlSelesai++
    }
  }
  return <p>
    <p>tugas {jmlSelesai} dari {total} selesai</p>
    {total > 0 && jmlSelesai == total && <p>Semua tugas selesai!</p>}
  </p>
}
