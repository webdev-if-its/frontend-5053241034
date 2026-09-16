// TODO(Level 7): beri tipe props yang benar — { variant: 'primary' |
// 'secondary' | 'danger'; children: ReactNode; onClick?: () => void }.
// Render sebuah <button> yang:
// - memuat children di dalamnya,
// - memanggil onClick saat diklik (kalau diberikan),
// - className-nya BERBEDA untuk tiap nilai variant (pakai Tailwind, mis.
//   warna latar berbeda per variant) — ini komponen REUSABLE: satu
//   komponen, tiga tampilan, diatur lewat props.
// Lihat SOAL.md untuk kontrak lengkap.

import React from "react"

type Props = {
  variant : 'primary' | 'secondary' | 'danger'
  children: React.ReactNode
  onClick?: () => void
}

export function Button(props: Props) {
  let color = ""
  if (props.variant === 'primary') {
    color = "bg-green-600"
  } else if (props.variant === 'secondary') {
    color = "bg-blue-600"
  } else if (props.variant === 'danger') {
    color = "bg-red-600"
  }

  return <button className={color} onClick={props.onClick}>{props.children}</button>
}
