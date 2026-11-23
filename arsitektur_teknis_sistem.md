# Arsitektur Teknis (ARCHITECTURE.md)
**Proyek:** Website Portofolio Ardiansyah Indra Febrianto  
**Pendekatan:** Progressive Architecture (Single-File Prototype $\rightarrow$ Modular Production Web App)

---

## 1. Gambaran Umum Arsitektur
Portofolio ini dibangun dengan prinsip **Content-First, Zero-Bloat, dan Responsive-by-Default**. Saat ini prototipe berjalan sebagai *single-file HTML/Tailwind/Vanilla JS* (`index.html`), dan dirancang agar mudah diekspor atau ditingkatkan ke arsitektur produksi berbasis **Static Site Generation (SSG)** menggunakan **Astro** atau **Next.js (App Router)** / **Vite + React**.

```text
┌────────────────────────────────────────────────────────────────────┐
│                        CLIENT (BROWSER)                            │
│  ┌──────────────┐  ┌───────────────────┐  ┌─────────────────────┐  │
│  │  UI Layer    │  │ Interaction Layer │  │ Viewport & Theme    │  │
│  │ (HTML/JSX +  │◄─┤ Filter, Tabs,     │◄─┤ Light/Dark Mode,    │  │
│  │  Tailwind)   │  │ Accordion, Modal, │  │ Portrait & Landscape│  │
│  └──────┬───────┘  │ Toast, Scroll-Spy │  │ Media Queries (dvh) │  │
│         │          └─────────┬─────────┘  └─────────────────────┘  │
│         ▼                    ▼                                     │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │         Structured Static Data Layer (JSON / TS)             │  │
│  │   profile.ts | experiences.ts | projects.ts | awards.ts      │  │
│  └──────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────┬──────────────────────────────────┘
                                  │ (Optional HTTP POST)
                                  ▼
                   ┌─────────────────────────────┐
                   │ Contact Service (Formspree /│
                   │ Web3Forms / Serverless API) │
                   └─────────────────────────────┘
```

---

## 2. Rekomendasi Struktur Direktori (Versi Produksi)
Jika dikembangkan dari prototipe `index.html` menjadi proyek modular (misalnya Vite + React/TypeScript atau Next.js):

```text
portfolio-ardi/
├── docs/
│   ├── PRD.md
│   ├── ARCHITECTURE.md
│   └── DESIGN.md
├── AGENTS.md
├── public/
│   ├── images/
│   │   ├── profile-ardi.webp        # Foto profil utama (optimasi WebP)
│   │   └── og-cover.png             # Open Graph thumbnail untuk share link
│   └── cv/
│       └── CV-Ardiansyah-Indra-Febrianto.pdf
├── src/
│   ├── data/
│   │   ├── profile.ts               # Bio, edukasi, kontak, social links
│   │   ├── skills.ts                # Kategori tech stack
│   │   ├── experiences.ts           # Timeline kerja & organisasi
│   │   ├── projects.ts              # Data projek + Problem/Solution/Impact
│   │   └── achievements.ts          # Lomba, beasiswa, sertifikasi, speaking
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           # Glassmorphism sticky + scroll-spy
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx      # Above-the-fold + adaptif landscape
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── AchievementsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/
│   │       ├── ProjectModal.tsx     # Accessible modal dialog
│   │       ├── ThemeToggle.tsx
│   │       └── Toast.tsx
│   ├── hooks/
│   │   ├── useTheme.ts              # Sinkronisasi class 'dark' & localStorage
│   │   ├── useScrollSpy.ts          # IntersectionObserver active nav
│   │   └── useLandscapeViewport.ts  # Deteksi layar pendek landscape (opsional)
│   └── styles/
│       └── globals.css              # Tailwind directives + custom landscape rules
└── package.json
```

---

## 3. Skema Data (Data-Driven Architecture)
Memisahkan konten dari tampilan memastikan penambahan projek atau lomba baru tidak perlu mengubah struktur UI.

```typescript
export type ProjectCategory = 'llm' | 'dl' | 'data';

export interface ProjectItem {
  id: string;
  category: ProjectCategory;
  badge: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
  accentGradient: string;
  icon: string;
  repoUrl?: string;
  demoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  tag: string;
  period: string;
  highlights: string[];
  defaultExpanded?: boolean;
}

export type AchievementCategory = 'lomba' | 'beasiswa' | 'speaking';

export interface AchievementItem {
  id: string;
  category: AchievementCategory;
  badge: string;
  yearOrMetric: string;
  title: string;
  description: string;
  icon: string;
}
```

---

## 4. Manajemen State & Siklus Hidup Client-Side
1. **Theme State:**
   - Menggunakan strategi class (`darkMode: 'class'` pada Tailwind).
   - Disimpan pada `localStorage` dengan key `ardi-theme` (`'light' | 'dark'`). Default: `'light'`.
2. **Scroll Reveal & Active Navigation:**
   - Menggunakan native `IntersectionObserver` (bukan `window.addEventListener('scroll')`) untuk menjaga performa 60fps tanpa *layout thrashing*.
   - `rootMargin: '-40% 0px -50% 0px'` untuk akurasi *scroll-spy* di viewport desktop maupun landscape pendek.
3. **Modal State & Scroll Lock:**
   - Membuka modal menambahkan `overflow: hidden` pada `<body>`, mengaktifkan listener tombol `Escape`, dan mengembalikan fokus saat ditutup.
4. **Local Photo Preview (Khusus Mode Prototipe):**
   - Menggunakan `URL.createObjectURL(file)` dan wajib memanggil `URL.revokeObjectURL()` saat foto diganti/di-reset untuk mencegah *memory leak*.

---

## 5. Arsitektur Responsif Khusus Layar Landscape
Untuk mencegah layout rusak saat perangkat mobile/tablet diputar ke posisi **landscape** (di mana lebar layar besar seperti `700px–930px`, namun tinggi layar sangat pendek `360px–450px`), arsitektur CSS menggunakan kombinasi **Viewport Units Modern (`svh`/`dvh`)** dan **Height + Orientation Media Queries**:

```css
/* Aturan Khusus Mobile Landscape (Lebar sedang, Tinggi pendek) */
@media (orientation: landscape) and (max-height: 520px) {
  /* Navbar lebih ringkas agar tidak memakan ruang vertikal */
  .site-header {
    height: 3.25rem; /* 52px */
  }

  /* Hero section menyesuaikan tinggi dinamis tanpa memotong konten */
  .hero-section {
    min-height: 100dvh;
    padding-top: 4rem;
    padding-bottom: 1.5rem;
  }

  /* Paksa grid 2 kolom di Hero meski lebar < 1024px */
  .hero-grid {
    display: grid;
    grid-template-columns: 1.35fr 0.65fr;
    gap: 1.5rem;
    align-items: center;
  }

  /* Ukuran frame foto diperkecil proporsional terhadap tinggi viewport */
  .hero-portrait-wrapper {
    max-width: min(220px, 52dvh);
  }

  /* Sembunyikan indikator scroll & perkecil badge agar tidak tumpang tindih */
  .hero-scroll-indicator {
    display: none;
  }
}
```

### Pertimbangan `dvh` vs `vh`
- Gunakan `min-h-[100svh]` atau `min-h-[100dvh]` sebagai pengganti `min-h-screen` (`100vh`) pada mobile browser (Safari iOS / Chrome Android) agar *address bar* tidak menutupi tombol CTA atau indikator scroll.

---

## 6. Keamanan, Performa, & Deployment
- **Keamanan:** Semua tautan eksternal wajib menggunakan `rel="noopener noreferrer"`. Input form kontak harus disanitasi di sisi layanan backend/form provider.
- **Integrasi Form Produksi:** Rekomendasi menggunakan **Formspree**, **Web3Forms**, atau **Next.js API Route + Resend** agar tidak perlu mengelola server email sendiri.
- **Deployment:** Cocok di-host gratis dengan performa global CDN di **Vercel**, **Cloudflare Pages**, atau **GitHub Pages**.