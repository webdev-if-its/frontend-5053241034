// TODO(Level 10, bonus): beri tipe props yang benar — { judul: string;
// catatan?: string; children: ReactNode } (catatan OPSIONAL). Render:
// - judul (selalu tampil)
// - catatan (HANYA tampil kalau diberikan — jangan sampai teks "undefined"
//   ikut muncul kalau catatan tidak diisi)
// - children (selalu tampil)
// Lihat SOAL.md untuk kontrak lengkap.

import type { ReactNode } from "react"

type Props = {
  judul: string
  catatan?: string
  children: ReactNode
}

export function KartuInfo(props: Props) {
  return (
    <div>
      <h2>{props.judul}</h2>
      {props.catatan}
      {props.children}
    </div>
  )
}
