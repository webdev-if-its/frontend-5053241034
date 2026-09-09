// TODO(Level 2): beri tipe props yang benar — { nama: string }. Lalu render
// DUA elemen sejajar TANPA elemen pembungkus tambahan di DOM (gunakan
// Fragment, bukan <div>). Lihat SOAL.md untuk kontrak lengkap.

type Props = {
  nama: string;
}

export function Identitas(props: Props) {
  return (
    <>
      <h2>Identitas: {props.nama}</h2>
      <p>Senang bertemu denganmu!</p>
    </>
  )
}
