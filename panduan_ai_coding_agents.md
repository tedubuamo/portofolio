# AGENTS.md — Panduan Pengembangan untuk AI Coding Agents

File ini adalah instruksi resmi bagi AI Coding Agents (Cursor, Claude Code, Gemini, GitHub Copilot, dll.) yang bekerja pada repositori **Website Portofolio Ardiansyah Indra Febrianto**.

---

## 1. Konteks Proyek & Sumber Kebenaran
Sebelum mengubah atau menambah kode, selalu rujuk dokumen berikut secara berurutan:
1. `PRD.md` — Daftar fitur, konten faktual, dan kriteria penerimaan.
2. `ARCHITECTURE.md` — Struktur folder, skema data, manajemen state, dan strategi teknis.
3. `DESIGN.md` — Design tokens, tipografi, warna, dan matriks responsif portrait/landscape.

### Identitas Pemilik (Data Faktual — JANGAN DIKARANG/DIUBAH)
- **Nama:** Ardiansyah Indra Febrianto (Ardi)
- **Lokasi:** Surabaya, Indonesia
- **Pendidikan:** D4 (Sarjana Terapan) Sains Data, Politeknik Elektronika Negeri Surabaya (PENS), 2022–2026, IPK `3.78 / 4.00`
- **Fokus:** Data Science, Machine Learning, Deep Learning (LSTM), Large Language Models (LLM), Probabilistic Forecasting
- **GitHub:** `https://github.com/tedubuamo`
- **Pengalaman Utama:** Horizon Methodology V&V Programme (Stage 3 Technical Assessments, Python V&V), Ketua Divisi PDD & Medinfo Pemira GenBI Jatim, Anggota Medinfo GenBI PENS.
- **Prestasi Utama:** Finalist Samsung Solve for Tomorrow 2024, Awardee Beasiswa Bank Indonesia 2025, Sertifikasi Manajemen Risiko (BI & BNSP-RI), Pembicara Sharing Beasiswa (79 siswa SMA/SMK/MA se-Jatim).

---

## 2. Aturan Wajib (Non-Negotiable Rules)

### 2.1 Above-the-Fold Hero & Foto Profil
- Foto profil **WAJIB** tampil di bagian Hero (awal halaman sebelum di-scroll) pada semua perangkat.
- Gunakan `object-cover object-top` pada gambar foto profil agar kepala/wajah tidak terpotong.

### 2.2 Responsivitas Layar Landscape (WAJIB DIPATUHI)
Setiap perubahan layout **wajib** mendukung layar **landscape**, terutama *mobile landscape* dengan tinggi viewport pendek (`orientation: landscape` dan `max-height: 520px`):
- **Dilarang** menggunakan tinggi tetap yang kaku (`h-screen` tanpa fallback) pada Hero yang menyebabkan konten terpotong di layar pendek. Gunakan `min-h-[100dvh]` / `min-h-[100svh]`.
- Pada `@media (orientation: landscape) and (max-height: 520px)`:
  - Hero wajib tampil dalam **2 kolom berdampingan** (teks kiri, foto kanan) dengan padding vertikal ringkas.
  - Tinggi foto profil dibatasi proporsional (mis. `max-h-[55dvh]`) agar tetap utuh dalam satu layar.
  - Navbar dipadatkan (`h-13` / `52px`) agar tidak memakan ruang baca.
  - Modal detail projek wajib menggunakan `max-h-[85dvh] overflow-y-auto` agar tombol tutup dan seluruh konten tetap dapat diakses.
  - Pastikan **tidak ada horizontal scroll** (`overflow-x-hidden` pada root/body, namun perbaiki akar penyebab overflow, jangan sekadar menyembunyikannya).

### 2.3 Light & Dark Mode
- Semua komponen baru wajib memiliki pasangan kelas warna untuk Light Mode dan Dark Mode (`dark:...`).
- Pastikan kontras teks memenuhi standar keterbacaan (WCAG AA) di kedua tema.

### 2.4 Interaktivitas & Kebersihan Kode
- **Dilarang** menggunakan `window.alert()`, `window.confirm()`, atau `window.prompt()`. Gunakan komponen **Toast** atau **Modal** kustom.
- Gunakan `IntersectionObserver` untuk *scroll reveal* dan *active navbar highlighting* (hindari scroll event listener yang berat).
- Jika memproses file gambar lokal (`URL.createObjectURL`), selalu panggil `URL.revokeObjectURL()` saat tidak lagi digunakan.
- Semua tautan eksternal (`target="_blank"`) wajib menyertakan `rel="noopener noreferrer"`.

---

## 3. Konvensi Penulisan Kode
- **Bahasa UI:** Bahasa Indonesia yang profesional, hangat, dan ringkas (istilah teknis seperti *Machine Learning*, *LLM*, *Time-Series*, *Pipeline* tetap dalam bahasa Inggris).
- **Styling:** Prioritaskan utility classes **Tailwind CSS**. Gunakan custom CSS di `globals.css` hanya untuk aturan khusus seperti `@media (orientation: landscape) and (max-height: 520px)` atau `@media (prefers-reduced-motion: reduce)`.
- **Data-Driven:** Tambahkan projek, pengalaman, atau prestasi baru di layer data (`projectsData` / `src/data/*.ts`), bukan dengan duplikasi markup HTML secara manual.
- **Aksesibilitas:** Setiap elemen interaktif harus menggunakan tag semantik (`<button>`, `<a>`, `<nav>`, `<main>`, `<section>`) dengan `aria-label` dan `aria-expanded` yang sesuai.

---

## 4. Checklist Verifikasi Sebelum Selesai (Definition of Done)
Sebelum menyatakan tugas selesai, agen wajib memverifikasi:
1. [ ] **Desktop Landscape (`1440x900`):** Hero *above-the-fold* seimbang, foto proporsional, tidak ada elemen tumpang tindih.
2. [ ] **Tablet Landscape (`1024x768`):** Grid 2–3 kolom rapi, navbar tidak turun baris (*wrap*).
3. [ ] **Mobile Landscape (`844x390` & `667x375`):** Hero tampil 2 kolom kompak, foto dan CTA terlihat tanpa terpotong, modal dapat di-scroll dengan nyaman.
4. [ ] **Mobile Portrait (`375x812`):** Hamburger menu berfungsi, tidak ada overflow horizontal.
5. [ ] **Interaksi:** Filter projek, modal (`Esc` & backdrop click), tab prestasi, accordion timeline, toggle tema, copy email, dan form kontak berfungsi tanpa error di console.