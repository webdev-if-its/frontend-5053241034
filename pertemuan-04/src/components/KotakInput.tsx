// TODO(Level 2): beri tipe props yang benar — { onUbah: (nilai: string) =>
// void }. Render sebuah <input> yang memanggil onUbah dengan nilai terbarunya
// TIAP KALI isinya berubah (tiap ketikan) — gunakan onChange dengan tipe event
// yang tepat.
// Lihat SOAL.md untuk kontrak lengkap.

import type React from "react"

type Props = {
  onUbah: (nilai: string) => void
}

export function KotakInput(props: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onUbah(e.target.value)
  }
  return <input onChange={handleChange}></input>
}

