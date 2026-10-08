// TODO(Level 4): beri tipe props yang benar — { pesan: string; durasi:
// number }. Tampilkan pesan, lalu SEMBUNYIKAN (hilang dari DOM) setelah
// `durasi` milidetik memakai setTimeout di dalam useEffect. Kalau prop pesan
// berganti, pesan baru tampil lagi dan hitung mundurnya mulai dari awal
// (timer lama harus dibersihkan). Saat komponen dilepas, timer harus ikut
// dibersihkan.
// Lihat SOAL.md untuk kontrak lengkap.

import { useEffect, useState } from "react";

type Props = {
  pesan: string;
  durasi: number;
}

export function PesanSementara({ pesan, durasi }: Props) {
  const [message, setMessage] = useState(pesan)

  useEffect(() => {
    setMessage(pesan)

    const timeout = setTimeout(() => {
      setMessage("")
    }, durasi);

    return () => {
      clearTimeout(timeout)
    }
  }, [pesan])

  return <p>{message}</p>
}