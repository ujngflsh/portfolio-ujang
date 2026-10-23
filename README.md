# Upwork Portfolio (React + Vite)

Portofolio freelance dibuat dengan React 18 + Vite, dibuat berdasarkan desain
repo referensi `RanggaKristian/Web-Portofolio` (Hero, About, Services, Work, Testimonials, Contact).

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # hasil di folder dist/
npm run preview  # cek hasil build
```

## Yang WAJIB kamu ganti

Semua konten ada di **`src/data.js`** (cari tanda `EDIT`):

1. `links.upwork` — link profil Upwork kamu (dipakai di tombol "Hire Me on Upwork").
2. `profile` — nama, role, email, lokasi, tagline.
3. `projects` — project asli (gambar, deskripsi, link demo/GitHub).
4. `stats` / `about.skills` — isi dengan angka yang benar (atau kosongkan `stats`).
5. `testimonials` — isi hanya dengan review asli. Kosong = section disembunyikan otomatis.
6. Foto: taruh di `public/profile.png` (tanpa foto akan tampil inisial).
7. Judul/deskripsi SEO di `index.html`.

## Form kontak

- `contact.formEndpoint` kosong → tombol Send membuka aplikasi email (`mailto:`).
- Mau kirim langsung tanpa buka email? Daftar di [Formspree](https://formspree.io), lalu isi
  `formEndpoint` dengan `https://formspree.io/f/xxxxxx`.

## Deploy gratis

- **Vercel / Netlify**: import repo GitHub → build command `npm run build`, output `dist`.
- **GitHub Pages**: tambahkan `base: '/nama-repo/'` di `vite.config.js`, lalu deploy folder `dist`.

## Struktur

```
src/
  data.js            ← semua konten (edit di sini)
  hooks.js           ← reveal-on-scroll, count-up, active nav
  styles.css         ← tema gelap + responsive
  components/        ← Navbar, Hero, About, Services, Work, Testimonials, Contact, Footer
```
