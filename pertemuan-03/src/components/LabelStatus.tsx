// TODO(Level 4): beri tipe props yang benar — { selesai: boolean }. Pakai
// TERNARY OPERATOR ( ? : ) di dalam JSX untuk menampilkan teks "Selesai"
// saat selesai bernilai true, atau "Belum Selesai" saat false. Lihat
// SOAL.md untuk kontrak lengkap.

type Props = {
  selesai: boolean
}

export function LabelStatus(props: Props) {
  return <p>{props.selesai ? "Selesai" : "Belum Selesai"}</p>
}
