// TODO(Level 8-10): komponen TANPA props — aplikasi todo yang tersambung ke
// API lewat fungsi di '../api/todos' (JANGAN memanggil fetch() langsung di
// sini):
// - saat pertama tampil: ambil daftar (getTodos) dan tampilkan sebagai <li>,
//   tiap <li> berisi checkbox berlabel title + tombol "Hapus",
// - form dengan input berlabel "Todo baru" + tombol "Tambah": panggil
//   addTodo(title), lalu tambahkan todo HASIL RESPONS ke akhir daftar dan
//   kosongkan input,
// - klik checkbox: panggil updateTodo(id, !completed), lalu ganti todo itu di
//   state dengan HASIL RESPONS,
// - klik "Hapus": panggil hapusTodo(id), lalu buang todo itu dari state.

import { useEffect, useState } from "react"
import type { Todo } from "../types"
import { getTodos, addTodo, updateTodo, hapusTodo } from "../api/todos"

// Lihat SOAL.md untuk kontrak lengkap.
export function AplikasiTodoApi() {

  const [data, setData] = useState<Todo[]>([])
  const [input, setInput] = useState("")

  async function onTambah(i: string) {
    const hasil = await addTodo(i);

    setData(
      data.concat(hasil)
    );
    setInput("");
  }

  async function onHapus(id: number) {
    await hapusTodo(id);

    setData(data.filter((todo) => todo.id !== id));
  }

  async function onUpdate(id: number, completed: boolean) {
    const hasil = await updateTodo(id, completed);

    setData(
      data.map((todo) =>
        todo.id === id ? hasil : todo
      )
    );
  }

  useEffect(() => {
    const loadData = async () => {
      const data = await getTodos()
      setData(data)
    }
    loadData()
  },[])

  return (
    <div>

      <ul>{data.map((data) => (
        <li key={data.id}>

          <label>{data.title}
            <input type="checkbox" checked={data.completed} onChange={(e) => {
              onUpdate(data.id, !data.completed)
            }} />
          </label>

          <button onClick={(e) => {
            onHapus(data.id)
          }}>Hapus</button>

        </li>
      ))}
      </ul>

      <form onSubmit={(e) => {
        e.preventDefault()
        onTambah(input)
      }}>
        <label>
          Todo baru
          <input type="text" value={input} onChange={(e) => {
            setInput(e.target.value)
          }} />
        </label>
        <button type="submit">Tambah</button>
      </form>
    </div>
  )
}
