# Design System & UI/UX Specification (DESIGN.md)
**Proyek:** Website Portofolio Ardiansyah Indra Febrianto  
**Gaya Visual:** Modern Minimalist Tech, Editorial Readability, Subtle Glassmorphism

---

## 1. Filosofi Desain
1. **Nyaman Dibaca (*High Readability*):** Rasio kontras tinggi, *whitespace* lega, hierarki tipografi tegas, serta dukungan Light & Dark Mode.
2. **Interaktif Tanpa Berlebihan (*Purposeful Motion*):** Animasi mikro hanya digunakan untuk memberikan umpan balik visual (hover, filter, reveal, modal) dan menghormati `prefers-reduced-motion`.
3. **Portrait-First Identity:** Foto profil di awal halaman menjadi titik fokus humanis yang menyeimbangkan konten teknis Data Science & AI.

---

## 2. Design Tokens

### 2.1 Palet Warna
| Token | Light Mode | Dark Mode | Kegunaan |
| :--- | :--- | :--- | :--- |
| **Background Surface** | `#FAFAFA` (`surface-light`) | `#0B1120` (`surface-dark`) | Latar utama halaman |
| **Card Surface** | `#FFFFFF` | `#0F172A` (`slate-900`) | Kartu projek, timeline, modal |
| **Section Alt Surface** | `#F1F5F9` (`slate-100/60`) | `#0F172A/40` | Pemisah visual antar section |
| **Primary Text** | `#0F172A` (`slate-900`) | `#F8FAFC` (`slate-100`) | Heading & teks penting |
| **Secondary Text** | `#475569` (`slate-600`) | `#94A3B8` (`slate-400`) | Paragraf, deskripsi, meta |
| **Brand Accent** | `#2563EB` (`brand-600`) | `#3B82F6` (`brand-500`) | Tombol CTA, link aktif, highlight |
| **Semantic Success** | `#10B981` (`emerald-500`) | `#34D399` (`emerald-400`) | Status *Available*, toast sukses |
| **Semantic Award** | `#D97706` (`amber-600`) | `#FBBF24` (`amber-400`) | Badge lomba / Samsung SFT |
| **Border Subtle** | `#E2E8F0` (`slate-200`) | `#1E293B` (`slate-800`) | Garis pemisah & outline kartu |

### 2.2 Tipografi
- **Display / Headings:** `Plus Jakarta Sans` (Weight: `600, 700, 800`), *tracking* rapat (`-0.02em`).
- **Body / UI:** `Inter` (Weight: `400, 500, 600, 700`), *line-height* lega (`1.6–1.75`).
- **Skala Responsif:**
  - `H1 (Hero Name)`: `1.875rem` (mobile) $\rightarrow$ `3rem` (tablet) $\rightarrow$ `3.25rem` (desktop) | *Mobile Landscape:* `1.75rem–2rem`.
  - `H2 (Section Title)`: `1.5rem` $\rightarrow$ `1.875rem`.
  - `Body`: `0.9375rem–1rem` (`15px–16px`).
  - `Caption / Badge`: `0.6875rem–0.75rem` (`11px–12px`).

### 2.3 Radius, Bayangan, & Glassmorphism
- **Border Radius:** Tombol & input `0.75rem` (`rounded-xl`), Kartu `1.25rem–1.5rem` (`rounded-2xl` / `rounded-3xl`), Frame Foto `1.75rem`.
- **Glassmorphism (Navbar & Floating Badges):** `bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/70 dark:border-slate-800/70`.

---

## 3. Matriks Responsif: Portrait & Landscape (KRITIS)

| Breakpoint / Orientasi | Target Perangkat | Layout Hero Section | Frame Foto Profil | Grid Projek & Prestasi | Navbar & Modal |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Mobile Portrait** (`< 640px`, portrait) | Smartphone vertikal (`375x812`) | 1 kolom vertikal (Foto di atas, Teks di bawah, *center-aligned*) | Lebar `240px–256px`, rasio `4:5` | 1 kolom | Tinggi `64px`, Hamburger menu; Modal `max-h-[90dvh]` |
| **Mobile Landscape** (`orientation: landscape` & `max-height: 520px`) | Smartphone horizontal (`844x390`, `667x375`) | **2 kolom berdampingan** (Teks kiri `60%`, Foto kanan `40%`, *left-aligned*, gap kompak) | Rasio `4:5` atau `1:1`, tinggi maks `55dvh` (`~180px–210px`), floating badge diperkecil/disembunyikan agar tidak menabrak teks | 2 kolom horizontal agar hemat ruang vertikal | Tinggi kompak `52px`; Modal `max-h-[85dvh]` dengan layout Problem & Solution 2 kolom |
| **Tablet Portrait** (`640px–1023px`, portrait) | iPad vertikal (`768x1024`) | 1 kolom terpusat atau 2 kolom lega | Lebar `300px–320px`, rasio `4:5` | 2 kolom | Tinggi `64px`, Desktop links tampil mulai `768px` |
| **Tablet Landscape** (`1024px–1279px`, landscape) | iPad horizontal (`1024x768`, `1180x820`) | 12-kolom grid (`7` teks : `5` foto) | Lebar `300px–320px`, rasio `4:5`, floating badges aktif penuh | 3 kolom (Projek), 2 kolom (Prestasi) | Full sticky navbar; Modal `max-w-2xl` |
| **Desktop / Ultrawide** (`>= 1280px`) | Laptop / Monitor (`1440x900+`) | 12-kolom grid dalam `max-w-6xl` | Lebar `340px`, rasio `4:5`, hover zoom halus `scale-[1.03]` | 3 kolom (Projek), 2 kolom (Prestasi) | Full sticky navbar; padding section `py-24` |

---

## 4. Spesifikasi Komponen Kunci

### 4.1 Hero Portrait Frame
- Rasio default `aspect-[4/5]` dengan `object-cover object-top` agar posisi wajah selalu proporsional dan tidak terpotong di bagian atas.
- Dilengkapi latar gradien lembut (`blur-md`) di belakang bingkai untuk menciptakan kedalaman visual.
- Pada **Mobile Landscape (`max-height: 520px`)**, gunakan `aspect-square` atau batasi tinggi dengan `max-h-[58dvh]` agar seluruh bingkai foto beserta nama dan tombol CTA masuk dalam satu layar tanpa scroll.

### 4.2 Interactive Timeline (Pengalaman)
- Garis vertikal tipis (`2px`) di sisi kiri dengan titik indikator berwarna sesuai kategori (Brand Blue untuk teknis, Indigo untuk kepemimpinan, Emerald untuk komunitas).
- Seluruh header kartu dapat diklik (`button` penuh) dengan ikon chevron yang berotasi `180deg` saat terbuka.

### 4.3 Project Cards & Modal
- Kartu memiliki tinggi seragam (`flex flex-col justify-between`) sehingga tombol **Lihat Detail** selalu sejajar di bagian bawah.
- Modal menggunakan *backdrop* gelap semi-transparan (`bg-slate-950/60 backdrop-blur-sm`) dengan 3 blok semantik: **Problem** (aksen rose), **Solution** (aksen emerald), dan **Impact** (aksen brand blue).

---

## 5. Aksesibilitas & Preferensi Gerak
- Wajib menghormati preferensi pengguna dengan media query:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```
- Semua tombol ikon wajib memiliki `aria-label` berbahasa Indonesia yang jelas.
- Elemen fokus menggunakan `focus-visible:ring-2 focus-visible:ring-brand-500`.