// TODO(Level 8): beri tipe props yang benar — { judul: string; children: ReactNode }
// (impor tipe ReactNode dari 'react'). Render <section> berisi judul (mis.
// di <h3>) DAN {children} di dalamnya. Lihat SOAL.md untuk kontrak lengkap.

import type { ReactNode } from "react"

type Props = {
  judul: string
  children: ReactNode
}

export function Panel(props: Props) {
  return <section>
    <h3>{props.judul}</h3>
    {props.children}
  </section>
}
