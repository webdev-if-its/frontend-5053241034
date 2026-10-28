// TODO(Level 3): custom hook useToggle(awal: boolean = false) yang
// mengembalikan object { nilai, toggle, setTrue, setFalse }:
// - nilai: boolean (mulai dari `awal`),
// - toggle(): membalik nilai, setTrue(): jadi true, setFalse(): jadi false.

import { useState } from "react";

// Beri tipe parameter dan return yang tepat — lihat SOAL.md.
export function useToggle(awal: boolean = false) {
  const [nilai, setNilai] = useState<boolean>(awal);

  return {
    nilai,
    toggle: () => {
      setNilai(!nilai);
    },
    setTrue: () => {
      setNilai(true);
    },
    setFalse: () => {
      setNilai(false);
    },
  };
}
