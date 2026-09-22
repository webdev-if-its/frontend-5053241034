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
TSX memiliki type-checking untuk meminimalisir error atau kesalahan penulisan kode, sedangkan JSX tidak memiliki type-checking. Project ini memakai .tsx karena seperti sudah disebutkan sebelumnya .tsx lebih meminimalisir error dan kesalahan penulisan kdoe. selain itu, TSX dikatakan lebih dibutuhkan di banyak industri saat ini serta TSX sudah include fungsi-fungsi yang ada di JSX.

## Kenapa Union Type untuk Status
dengan menggunakan Union Type nutuk Status dapat membatasi berbagai input agar hanya valid jika input tersebut sesuai dengan apa yang tertulis di Union Type Status yang kita tulis. misal seperti di soal, ```status: 'pending' | 'selesai' | 'batal'```, jika input yang diberikan adalah string selain dari ke-3 string status tersebut maka akan muncul error. sedangkan, jika menggunakan string bebas seperti ```status: string``` saja, maka input apapun selama input tersebut bertipe string akan tetap diproses dan dianggap valid. sehingga penggunaan string bebas menjadikan kode rawan error dari typo atau input yg tidak sesuai.

## Refleksi
menurutku konsep Component di React adalah hal yang paling terasa 'baru' disini, karena membuat penulisan kode menjadi lebih modular dan bongkar pasang terutama jika dibandingkan dengan HTML biasa. disini setiap Component berfungsi sebagai ```function``` yang akan di render jika komponen tersebut di return di ```App.tsx```. dan satu lagi adalah Props yang awalnya agak membingungkan bagaimana cara kerjanya, tetapi setelah dipelajari lagi ternyata berfungsi sebagai parameter dari sebuah Component.

## Refleksi Pertemuan 3
Menurutku penggunaan Tailwind sebagai cara untuk styling halaman website dengan menulis langsung style di dalam komponen sebagai atribut class merupakan cara yang sangat praktis karena tidak perlu membuat file baru lagi, seperti cara lama dengan membuat file style.css lalu diintegrasikan dgn file html. Tailwind juga memiliki cheatsheet yang dapat membantu developer untuk semakin cepat dalam pembuatan website tanpa membuat semua tampilannya dari awal, melainkan menggunakan pre-designed component yang sudah ada.