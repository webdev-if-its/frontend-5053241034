// TODO(Level 8): beri tipe props yang benar — { tugas: Tugas[]; onHapus:
// (id: string) => void } (impor tipe Tugas dari '../types'). Gabungkan
// beberapa konsep pertemuan ini:
// - kalau tugas.length === 0, render teks yang memuat "Tidak ada tugas",
// - kalau tidak, render daftar tugas (boleh pakai <ul>/<li> atau <div>),
//   dan di tiap item sertakan sebuah <Button variant="danger"> berteks
//   "Hapus" yang saat diklik memanggil onHapus(id) dengan id tugas
//   tersebut — MANFAATKAN KEMBALI komponen Button dari Level 7, jangan
//   tulis <button> baru dari nol.
// Lihat SOAL.md untuk kontrak lengkap.

import type React from "react"
import type { Tugas } from "../types"
import { Button } from "./Button"

type Props = {
  tugas: Tugas[]
  onHapus: (id: string) => void
}

export function DaftarTugasLengkap(props: Props) {
  let message: React.ReactNode
  if (props.tugas.length <= 0) {
    message = <p>Tidak ada tugas</p>
  } else {
    message = (
      <ul>
        {props.tugas.map((t) => (
          <li key={t.id}>
            {t.teks }
            <Button variant="danger" onClick={() => props.onHapus(t.id)}>Hapus</Button>
          </li>
        ))}
      </ul>
    )
  }
  return message
}

