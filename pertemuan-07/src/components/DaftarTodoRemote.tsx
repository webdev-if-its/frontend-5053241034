// TODO(Level 6-7): komponen TANPA props. Ambil daftar todo lewat getTodos()
// dari '../api/todos' di dalam useEffect (dependency array kosong), lalu:
// - selama data belum datang, render teks "Memuat...",
// - kalau sukses, render <ul> berisi <li> per todo (tampilkan title, key =
//   id) dan "Memuat..." hilang,
// - kalau gagal (error apa pun), render "Terjadi error: {pesan error}" dan
//   "Memuat..." hilang.
// Simpan data/loading/error di useState. JANGAN memanggil fetch() langsung di
// sini (lihat Level 10).

import { useEffect, useState } from "react"
import { getTodos } from "../api/todos"
import type { Todo } from "../types"

// Lihat SOAL.md untuk kontrak lengkap.
export function DaftarTodoRemote() {
  const [data, setData] = useState<Todo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error>()
  
  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      try {
        const data = await getTodos()
        setData(data)
      }
      catch (err) {
        if (err instanceof Error) {
          setError(err)
        }
      }
      finally {
        setLoading(false)
      }
    }
    loadData()
  },[])

  
  return (
    <div>
      {loading && <p>Memuat...</p>}
      {error && <p>Terjadi error: {error.message}</p>}
      <ul>
        {data.map((data) => (
          <li key={data.id}>
            <label>{data.title}
              <input type="checkbox" />
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
