// TODO(Level 4-6): custom hook generic useFetch<T>(url: string) yang
// mengembalikan object { data, loading, error }:
// - data: T | null (null sampai fetch selesai),
// - loading: boolean (true sejak awal, false setelah selesai — sukses
//   maupun gagal),
// - error: string | null (pesan error; null kalau tidak ada).
// Pakai useState + useEffect dengan [url] sebagai dependency: kalau url
// berubah, ambil ulang (state di-reset dulu). Kalau res.ok false, isi error
// dengan pesan yang memuat kata "gagal"; kalau fetch ditolak, isi error

import { useEffect, useState } from "react";

// dengan err.message. Lihat SOAL.md untuk tanda tangan lengkapnya.
export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(url);

        if (!res.ok) {
          setError("fetch gagal");
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const result = await res.json();
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}
