# frontend-nrp

Repo tugas mata kuliah **Frontend**, dibuat dari template [`webdev-if-its/frontend-template`](https://github.com/webdev-if-its/frontend-template). Ganti judul di atas jadi nama repo kalian sendiri (`frontend-nrp`, contoh: `frontend-5025201012`).

## Aturan Umum

- Tugas tiap pertemuan disimpan di folder `pertemuan-XX/` pada repo ini — masing-masing adalah project Vite + React + TypeScript sendiri (`npm install` terpisah per folder).
- Commit message wajib menyebut level yang dicapai: `pertemuan-XX: level N selesai`.
- Deadline push: sebelum pertemuan berikutnya dimulai.
- Semua level dicek otomatis lewat `npm run levels` (Vitest) — baca `pertemuan-XX/SOAL.md` tiap minggu untuk detail levelnya.

## Mengambil Pertemuan Baru Tiap Minggu

Repo ini **tidak otomatis sinkron** dengan template dosen. Begitu ada pertemuan baru, jalankan (ganti `pertemuan-02` sesuai minggu berjalan):

```bash
git fetch https://github.com/webdev-if-its/frontend-template.git main
git checkout FETCH_HEAD -- pertemuan-02
```

Perintah ini **aman dijalankan kapan pun** — tidak akan menimpa folder pertemuan lain yang sudah kalian kerjakan, karena hanya mengambil folder yang disebutkan. Setelah itu, `cd pertemuan-02 && npm install`, lalu commit folder barunya seperti biasa.

Kalau dosen memperbaiki sesuatu di pertemuan yang sudah dirilis (mis. ada bug di test), biasanya cukup ambil ulang file yang diperbaiki saja, bukan seluruh folder — akan diumumkan file mana yang berubah.

---

Bagian di bawah ini **isi bertahap** sesuai level yang sedang kalian kerjakan (lihat `pertemuan-XX/SOAL.md`) — heading-nya dicek otomatis, jangan diganti namanya.

## Struktur Project
main.tsx adalah file utama untuk sebuah page saat ini (ditentukan di body yang berada di 'index.html') yang berguna seperti canvas untuk nantinya diisi oleh berbagai Component. sedangkan, App.tsx adalah file Component tersebut yang ditaruh di sebuah page seperti main.tsx. untuk satu main.tsx bisa berisi satu atau lebih Components yang di import dari file-file component tersebut.

## Identitas
- Nama: Muhammad Zaki Alfikri
- NRP: 5053241034
- Kelas: M

## Commit vs Push
git commit adalah proses staging sebelum di push. dimana orang yang melakukan git commit maka code nya belum sampai di github. ketika masih di posisi staging, code yang di commit belum bisa di fetch oleh orang lain. sedangkan git push adalah proses ketika kode yang sudah di commit (di posisi staging) di publish ke branch github saat itu dan bisa di fetch orang lain. perubahan kode (unstaged changes) -> commit -> perubahan kode masuk ke staging -> push -> kode yg di staging di publish ke branch. ketika seseorang hanya melakukan commit tapi lupa push maka orang lain tidak bisa fetch/pull kode tersebut (yang di staging) resikonya kode bisa ter-overwrite dari kode yang di-push orang lain.

## JSX vs TSX
(tulis di sini)

## Kenapa Union Type untuk Status
(tulis di sini)

## Refleksi
(tulis di sini)
