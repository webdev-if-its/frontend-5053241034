// TODO(Level 10): beri tipe props yang benar — { onKirim: (pesan: string) =>
// void }. Gabungkan semua konsep pertemuan ini: controlled input berlabel
// "Pesan" + tombol submit "Kirim" di dalam <form>. Tombol disabled kalau
// isi pesan (setelah trim) kosong. Saat submit: cegah reload, panggil
// onKirim(pesan yang sudah di-trim), lalu kosongkan input.
// Lihat SOAL.md untuk kontrak lengkap.

import { useState, type FormEvent } from "react"

type Props = {
  onKirim: (pesan: string) => void
}

export function FormPesan({onKirim}: Props) {
  const [pesan, setPesan] = useState<string>('')

  function handleSubmit (e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    onKirim(pesan.trim())
    setPesan('')
  }

  function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    setPesan(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Pesan
        <input value={pesan} onChange={handleChange}/>
      </label>
      <button type="submit" disabled={pesan.trim() == ""}>Kirim</button>
    </form>
  )
}
