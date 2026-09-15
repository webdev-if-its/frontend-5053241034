// TODO(Level 6): beri tipe props yang benar — { status: Status } (impor
// `Status` dari '../types', jangan tulis ulang union-nya di sini). Lalu
// render teks berbeda sesuai status: pending -> "Menunggu", selesai ->
// "Selesai", batal -> "Dibatalkan". Lihat SOAL.md untuk kontrak lengkap.

import type { Status } from "../types"

type Props = {
  status: Status
}

export function StatusPesanan(props: Props) {
  switch (props.status) {
    case 'pending':
      return <p>Menunggu</p>
    case 'selesai':
      return <p>Selesai</p>
    case 'batal':
      return <p>Dibatalkan</p>
  }
}
