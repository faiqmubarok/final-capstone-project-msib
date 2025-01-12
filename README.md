# Patani Frontend

**Patani** adalah sebuah platform yang menghubungkan investor dengan petani, membantu mempercepat proses investasi di sektor pertanian, perkebunan, perikanan, dan peternakan. Proyek ini adalah bagian frontend dari aplikasi, dikembangkan menggunakan React dengan Vite sebagai build tool.

## 🚀 Fitur Utama

- **Dashboard Investor dan Petani**: Menampilkan data investasi dan status proyek dengan visualisasi menggunakan ApexCharts.
- **Autentikasi Pengguna**: Mengelola login dan registrasi pengguna dengan role-based access.
- **Form Dinamis**: Mendukung formulir input data dengan pilihan menggunakan `react-select`.
- **Routing Cepat**: Implementasi routing dengan `react-router-dom`.
- **UI Modern**: Dirancang dengan Tailwind CSS untuk memberikan antarmuka yang bersih dan responsif.
- **Manajemen API**: Pengambilan data dilakukan menggunakan `axios`.

---

## 🛠️ Teknologi yang Digunakan

- **Framework**: [React](https://reactjs.org/) (v18.3.1)
- **Build Tool**: [Vite](https://vitejs.dev/) (v5.4.1)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v3.4.13)
- **Linting**: [ESLint](https://eslint.org/) untuk standar kode.
- **Visualisasi Data**: [ApexCharts](https://apexcharts.com/) dan [react-apexcharts](https://github.com/apexcharts/react-apexcharts).
- **Form Handling**: [react-select](https://react-select.com/).
- **Routing**: [react-router-dom](https://reactrouter.com/).

---

## 📦 Instalasi

1. Clone repository:
   ```bash
   git clone https://github.com/faiqmubarok/final-capstone-project-msib
   cd final-capstone-project-msib
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Jalankan aplikasi dalam mode pengembangan:
   ```bash
   npm run dev
   ```

4. Buka di browser:
   ```
   http://localhost:5173
   ```

---

## 📋 Scripts

- **`npm run dev`**: Menjalankan aplikasi dalam mode pengembangan.
- **`npm run build`**: Membuat build untuk produksi.
- **`npm run lint`**: Mengecek standar kode menggunakan ESLint.
- **`npm run preview`**: Melihat aplikasi yang sudah di-build.

---

## 📁 Struktur Direktori

```plaintext
src/
├── assets/           # Gambar dan file statis lainnya
├── components/       # Komponen UI yang bisa digunakan kembali
├── hooks/            # Custom hooks
├── layouts/          # Layout utama aplikasi
├── pages/            # Halaman utama (Dashboard, Login, dll.)
├── styles/           # File CSS tambahan atau kustomisasi Tailwind
├── App.jsx           # Komponen root
└── main.jsx          # Entry point aplikasi
```

---

## 🔧 Konfigurasi Tailwind CSS

Tailwind CSS telah diatur di file `tailwind.config.js` dengan mode JIT (Just-In-Time) untuk performa lebih cepat dan kustomisasi tema.

---

## 🤝 Kontribusi

Kontribusi sangat dihargai! Jika Anda ingin berkontribusi, silakan ikuti langkah berikut:
1. Fork repository ini.
2. Buat branch baru:
   ```bash
   git checkout -b fitur-anda
   ```
3. Commit perubahan:
   ```bash
   git commit -m "Menambahkan fitur baru"
   ```
4. Push ke branch:
   ```bash
   git push origin fitur-anda
   ```
5. Buat Pull Request.

---

## 📧 Kontak

Jika Anda memiliki pertanyaan atau saran, jangan ragu untuk menghubungi kami di [email@example.com](mailto:email@example.com).

---

Selamat Berkarya! 🌱
