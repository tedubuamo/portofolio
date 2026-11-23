# Product Requirements Document (PRD)
**Nama Produk:** Website Portofolio Interaktif — Ardiansyah Indra Febrianto  
**Versi:** 1.0  
**Pemilik Produk:** Ardiansyah Indra Febrianto (Surabaya, Indonesia)  
**Target Platform:** Web (Responsive: Mobile Portrait, Mobile Landscape, Tablet, Desktop)

---

## 1. Ringkasan Eksekutif & Tujuan
Website portofolio ini dirancang sebagai pusat identitas profesional bagi **Ardiansyah Indra Febrianto**, lulusan Sarjana Terapan (D4) Sains Data Politeknik Elektronika Negeri Surabaya (PENS), yang berfokus pada **Data Science, Machine Learning, Deep Learning, dan Large Language Models (LLM)**.

### Tujuan Utama
1. **First Impression Kuat (*Above-the-Fold*):** Menampilkan perkenalan singkat, peran utama, CTA, dan **foto profil profesional di bagian awal halaman sebelum pengguna melakukan scroll**, baik di layar portrait maupun landscape.
2. **Keterbacaan & Interaktivitas Tinggi:** Menyajikan pengalaman kerja, organisasi, projek, lomba, beasiswa, dan sertifikasi secara terstruktur, ringkas, dan interaktif (accordion, filter kategori, modal detail, tab) agar tidak melelahkan saat dibaca.
3. **Konversi Peluang:** Mempermudah rekruter, *hiring manager*, dan kolaborator riset/projek untuk mengevaluasi kompetensi teknis serta menghubungi pemilik portofolio.

---

## 2. Target Pengguna (User Personas)
| Persona | Tujuan Utama | Bagian yang Paling Diperhatikan |
| :--- | :--- | :--- |
| **Tech Recruiter / HR** | Memverifikasi latar belakang pendidikan, pengalaman, dan kesiapan kerja dalam < 60 detik. | Hero Section, Tentang & IPK, Pengalaman, Tombol Kontak / LinkedIn. |
| **Engineering Manager / Senior DS** | Menilai kedalaman teknis, problem-solving, dan tech stack pada projek nyata. | Tech Stack, Projek Pilihan + Modal (*Problem–Solution–Impact*), GitHub. |
| **Penyelenggara Event / Kolaborator** | Melihat rekam jejak prestasi, organisasi, dan pengalaman *public speaking*. | Lomba, Beasiswa & Sertifikasi, Pengalaman Organisasi. |

---

## 3. Ruang Lingkup Konten & Fitur Fungsional

### 3.1 Sticky Glassmorphism Navbar
- Menampilkan logo inisial (`AI` / `Ardi.`), menu navigasi (*Tentang, Pengalaman, Projek, Lomba & Sertifikasi, Kontak*), tombol **Light/Dark Mode**, dan tombol CTA **Hubungi**.
- **Scroll-Spy:** Otomatis menyorot tautan navigasi sesuai section yang sedang aktif di layar.
- **Mobile Menu:** Drawer/dropdown responsif pada layar kecil (`< 768px`) yang otomatis menutup setelah tautan diklik.

### 3.2 Hero Section (*Above-the-Fold* dengan Foto Profil)
- **Kolom Kiri (Identitas & Aksi):**
  - Status badge dinamis (*Available for Opportunities • Surabaya, Indonesia*).
  - Nama lengkap: **Ardiansyah Indra Febrianto**.
  - Animasi *typing role*: `Data Scientist`, `Machine Learning Engineer`, `LLM Developer`.
  - Ringkasan profil singkat (PENS, ML, Deep Learning, LLM).
  - CTA utama (**Lihat Projek**) dan CTA sekunder (**Hubungi Saya**).
  - Tautan cepat GitHub (`github.com/tedubuamo`) dan LinkedIn.
- **Kolom Kanan (Portrait Frame):**
  - Bingkai foto profil modern rasio `4:5` (atau adaptif di layar *mobile landscape*).
  - **Floating Badges:** IPK PENS `3.78 / 4.00` dan `Finalist Samsung SFT '24`.
  - **Fitur Prototipe (Opsional di Produksi):** Tombol *Ganti Foto Preview* dan *Reset* untuk menguji foto lokal secara instan.
- **Scroll Indicator:** Penanda halus untuk mengajak pengguna menjelajahi bagian bawah.

### 3.3 Tentang Saya & Tech Stack
- Narasi perkenalan diri yang autentik dan ringkas.
- Kartu highlight pendidikan: **Politeknik Elektronika Negeri Surabaya (PENS)**, D4 Sains Data (2022–2026), IPK `3.78 / 4.00`.
- Pengelompokan keahlian (*Skill Pills*) interaktif dalam 3 kategori:
  1. *AI, Machine Learning & LLM*
  2. *Programming & Data Engineering*
  3. *Tools, Design & Collaboration*

### 3.4 Pengalaman Kerja & Organisasi (Interactive Timeline)
- Garis waktu vertikal dengan kartu *expandable/collapsible* (accordion) agar tampilan tetap rapi.
- Item default pertama terbuka untuk langsung memperlihatkan kedalaman kontribusi:
  1. **Technical Verification & Validation (Python)** — Horizon Methodology V&V Programme (Stage 3 Technical Assessments, automated verification pipelines, probabilistic forecasting).
  2. **Ketua Divisi PDD & Media Informasi** — Pemira GenBI Jawa Timur.
  3. **Anggota Divisi Medinfo** — GenBI PENS.

### 3.5 Projek Pilihan (Filterable Showcase + Detail Modal)
- Filter kategori interaktif: **Semua**, **LLM & NLP**, **Deep Learning**, **Data & UI**.
- Setiap kartu menampilkan banner visual, kategori, judul, ringkasan, 3 tag teknologi utama, dan tombol **Lihat Detail**.
- **Modal Detail Projek:** Menampilkan struktur studi kasus **Problem**, **Solution**, **Impact & Hasil**, serta daftar lengkap Tech Stack. Dapat ditutup via tombol `X`, klik *backdrop*, atau tombol `Esc`.
- Daftar Projek Awal:
  1. *Sistem Rekomendasi Lowongan Kerja Berbasis LLM* (Tugas Akhir).
  2. *3-Phase Electrical Grid Forecasting & Monitoring* (LSTM + Figma Mobile Prototype — Samsung SFT '24).
  3. *Horizon V&V Technical Analytics & Forecasting Pipeline* (Python & Probabilistic Forecasting).

### 3.6 Lomba, Beasiswa & Sertifikasi (Tabbed Grid)
- Tab filter interaktif: **Semua**, **Lomba**, **Beasiswa & Sertifikasi**, **Public Speaking**.
- Daftar Pencapaian Awal:
  - Finalist — Samsung Solve for Tomorrow 2024.
  - Awardee — Beasiswa Bank Indonesia 2025.
  - Sertifikasi Manajemen Risiko — Bank Indonesia & BNSP-RI.
  - Pembicara — Edukasi & Sharing Beasiswa (79 siswa SMA/SMK/MA se-Jawa Timur).

### 3.7 Kontak & Footer
- Tombol *Quick Copy Email* ke clipboard dengan notifikasi **Toast** (tanpa `alert()` bawaan browser).
- Tautan GitHub dan LinkedIn.
- Formulir kontak interaktif (*Nama, Email, Pesan*) dengan validasi input dan umpan balik toast.

---

## 4. Persyaratan Non-Fungsional & Responsivitas Landscape

### 4.1 Responsivitas Multi-Orientasi (KRITIS)
Website **wajib** nyaman dibaca dan berfungsi penuh pada seluruh orientasi layar, termasuk **layar landscape**:
1. **Mobile Landscape (contoh: `667x375`, `844x390`, `915x412` — `orientation: landscape` & `max-height: 500px`):**
   - Hero section **tidak boleh terpotong** atau memaksa scroll berlebihan hanya untuk melihat nama dan foto.
   - Tata letak Hero berubah menjadi **2 kolom berdampingan** (teks di kiri, foto profil lebih ringkas di kanan) sehingga foto dan identitas utama tetap terlihat *above-the-fold*.
   - Navbar menjadi lebih kompak (tinggi berkurang dari `64px` ke `52px`) agar ruang baca vertikal lebih lega.
   - *Floating badges* pada foto diperkecil atau disembunyikan jika berpotensi menutupi teks/wajah di viewport pendek.
   - Modal detail projek memiliki tinggi maksimum adaptif (`max-h-[85dvh]`) dengan scroll internal yang halus.
2. **Tablet Landscape (contoh: `1024x768`, `1180x820`):**
   - Menggunakan grid 2–3 kolom secara optimal tanpa kartu yang terlalu melar (*over-stretched*).
3. **Desktop & Ultrawide Landscape (`>= 1280px`):**
   - Konten dibatasi `max-w-6xl` (`1152px`) agar panjang baris teks tetap ideal untuk dibaca (`60–75` karakter per baris).

### 4.2 Performa, Aksesibilitas, & SEO
- **Performa:** First Contentful Paint (FCP) < 1.5 detik; gambar menggunakan lazy loading (kecuali foto Hero menggunakan `fetchpriority="high"`).
- **Aksesibilitas:** Kontras warna memenuhi standar WCAG 2.1 AA pada Light & Dark Mode; seluruh elemen interaktif mendukung navigasi keyboard (`Tab`, `Enter`, `Escape`) dan atribut `aria-*`.
- **Preferensi Tema:** Menyimpan pilihan tema Light/Dark di `localStorage`.

---

## 5. Kriteria Penerimaan (Acceptance Criteria)
- [ ] Foto profil dan nama Ardiansyah terlihat utuh di awal halaman tanpa scroll pada Desktop, Mobile Portrait, maupun Mobile Landscape.
- [ ] Tidak ada *horizontal overflow* (`overflow-x`) pada ukuran layar `320px` hingga `2560px` di orientasi portrait maupun landscape.
- [ ] Filter projek, tab prestasi, accordion pengalaman, modal detail, dan toggle tema berjalan tanpa error konsol.
- [ ] Seluruh notifikasi menggunakan komponen Toast non-blocking.