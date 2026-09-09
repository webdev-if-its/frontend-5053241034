// TODO(Level 3): beri tipe props yang benar — { qty: number; harga: number }.
// Lalu render satu elemen yang memuat teks "Total: " diikuti HASIL PERKALIAN
// qty * harga (pakai ekspresi { } di JSX, jangan hardcode angkanya). Lihat
// SOAL.md untuk kontrak lengkap.

type Props = {
  qty: number
  harga: number
}

export function Total(props: Props) {
  return (
    <p>Total: {props.qty * props.harga}</p>
  )
}
