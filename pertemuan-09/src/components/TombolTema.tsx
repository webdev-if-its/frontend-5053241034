// TODO(Level 9): komponen TANPA props. Ambil tema lewat useTema() dan render
// sebuah <button> bertuliskan "Tema: {tema}" (mis. "Tema: terang") yang saat
// diklik memanggil gantiTema().

import { useTema } from "../context/TemaContext"

// Lihat SOAL.md untuk kontrak lengkap.
export function TombolTema() {
  const { tema, gantiTema } = useTema();
  return <button onClick={gantiTema}>Tema: {tema}</button>
}
