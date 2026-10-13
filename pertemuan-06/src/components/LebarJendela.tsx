// TODO(Level 6): komponen TANPA props. Tampilkan "Lebar jendela: {n}px"
// (nilai awal window.innerWidth) dan perbarui saat jendela di-resize,
// dengan memasang window.addEventListener("resize", ...) di dalam
// useEffect. Wajib ada cleanup yang memanggil removeEventListener dengan
// fungsi handler yang SAMA persis dengan yang dipasang.

import { useState, useEffect } from "react"

// Lihat SOAL.md untuk kontrak lengkap.
export function LebarJendela() {
  const [lebar, setLebar] = useState(window.innerWidth)

  function handleResize() {
    setLebar(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [lebar])

  return <p>Lebar jendela: {lebar}px</p>
}
