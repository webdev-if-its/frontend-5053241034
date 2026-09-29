// TODO(Level 4): beri tipe props yang benar — { onLogin: (email: string) =>
// void }. Render <form> berisi input berlabel "Email" dan tombol submit
// "Masuk". Saat form dikirim: cegah reload halaman (e.preventDefault()),
// lalu panggil onLogin dengan isi email.
// Lihat SOAL.md untuk kontrak lengkap.

import type React from "react"

type Props = {
  onLogin: (email: string) => void
}

export function FormLogin(props: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = e.currentTarget.elements.namedItem("email") as HTMLInputElement;
    props.onLogin(data.value)
  }
  return <form onSubmit={handleSubmit}>
    <label>Email
      <input type="email" name="email" />
    </label>
    <button type="submit">Masuk</button>
  </form>
}

