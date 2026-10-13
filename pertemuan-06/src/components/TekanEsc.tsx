// TODO(Level 7): beri tipe props yang benar — { onEsc: () => void }. Pasang
// listener "keydown" di document di dalam useEffect: saat tombol Escape
// ditekan, panggil onEsc. Render <p>Tekan Esc untuk menutup</p>. Cleanup
// wajib melepas listener, dan efek harus memakai onEsc TERBARU (kalau prop
// onEsc berganti, yang dipanggil adalah fungsi yang baru, bukan yang lama).
// Lihat SOAL.md untuk kontrak lengkap.

import { useEffect } from "react"

type Props = {
  onEsc: () => void
}

export function TekanEsc({ onEsc }: Props) {

  function handleEscape(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      onEsc()
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [onEsc])

  return <p>Tekan Esc untuk menutup</p>
}
