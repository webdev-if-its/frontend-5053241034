// TODO(Level 8): komponen TANPA props. Render dua input angka berlabel
// "Angka A" dan "Angka B" (type="number") dan teks "Hasil: {A + B}".
// Ingat: e.target.value SELALU string — ubah ke number sebelum dijumlahkan,
// dan input kosong dianggap 0.

import { useState } from "react"

// Lihat SOAL.md untuk kontrak lengkap.
export function KalkulatorMini() {
  const [angkaA, setAngkaA] = useState<number>(0)
  const [angkaB, setAngkaB] = useState<number>(0)

  function Sum (a: number, b: number) {
    return a + b
  }

  return (
    <>
    <label>Angka A
      <input type="number" onChange={(e)=> setAngkaA(Number(e.target.value))}/>
    </label>
    <label>Angka B
      <input type="number" onChange={(e)=> setAngkaB(Number(e.target.value))}/>
    </label>
    <p>Hasil: {Sum(angkaA, angkaB)}</p>
    </>
  )
}
