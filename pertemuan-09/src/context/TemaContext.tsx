// TODO(Level 7-8): buat Context untuk tema aplikasi (tipe Tema ada di
// '../types'):
// - TemaProvider({ children }): menyimpan tema di useState<Tema> (awal:
//   'terang') dan menyediakan { tema, gantiTema } lewat Context Provider.
//   gantiTema() membalik 'terang' <-> 'gelap'.
// - useTema(): custom hook pembungkus useContext yang mengembalikan
//   { tema, gantiTema }, dan MELEMPAR Error yang pesannya menyebut
//   "TemaProvider" kalau dipakai di luar TemaProvider.

import React, { useContext, useState } from "react"
import type { Tema } from "../types"
import { createContext } from "react"
import { error } from "console"

type TemaContextType = {
  tema: Tema
  gantiTema: () => void
}

const TemaContext = createContext<TemaContextType|null>(null)

// Beri tipe yang tepat — lihat SOAL.md untuk tanda tangan lengkapnya.
export function TemaProvider({ children }: {children: React.ReactNode}) {
  const [tema, setTema] = useState<Tema>('terang')

  const value = {
    tema,
    gantiTema: () => setTema(tema === 'terang' ? 'gelap' : 'terang')
  }

  return <TemaContext.Provider value={value}>{children}</TemaContext.Provider>
}

export function useTema() {
  const ctx = useContext(TemaContext)
  if (!ctx) {
    throw new Error("useTema harus dipakai di dalam <TemaProvider>")
  } 
  return ctx
}
