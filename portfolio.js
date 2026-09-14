const toggle = document.getElementById('theme-toggle');
const languageToggle = document.getElementById('language-toggle');
const preference = matchMedia('(prefers-color-scheme: dark)');
const translations = {
  id: {
    pageTitle: 'Data Scientist | Portofolio',
    metaDescription: 'Portofolio Data Scientist. Analisis data, pemodelan, dan komunikasi insight dengan evaluasi yang transparan.',
    skip: 'Lewati navigasi',
    mainNav: 'Navigasi utama',
    navJourney: 'Perjalanan',
    navProjects: 'Proyek',
    navSkills: 'Keahlian',
    navContact: 'Kontak',
    languageToggle: 'Switch to English',
    heroEyebrow: 'MENGHUBUNGKAN DATA DENGAN KEPUTUSAN',
    heroLead: 'Data mentah menyimpan cerita.<br>Saya membantu menemukan maknanya.',
    heroDescription: 'Peran saya adalah mengolah data, mengeksplorasi pola, dan membangun model untuk membantu menjawab pertanyaan nyata. Dari angka yang tersebar menjadi informasi yang bisa ditindaklanjuti.',
    heroButton: 'Bagaimana caranya?',
    photoTitle: 'Foto profesional',
    photoHint: 'Ganti dengan foto Anda',
    photoCaption: 'Tempat untuk foto profil profesional.',
    discipline1: '01 / Memahami masalah',
    discipline2: '02 / Menguji dengan data',
    discipline3: '03 / Menjelaskan hasil',
    processEyebrow: '01 / PROSES',
    processTitle: 'Dari data mentah<br>ke keputusan bermakna.',
    processDescription: 'Setiap tahap mengubah data menjadi sesuatu yang lebih berguna, dengan konteks dan keterbatasan yang tetap terlihat.',
    step1Title: 'Rapikan data',
    step1Text: 'Kumpulkan sumber yang relevan, periksa kualitas, dan tangani data hilang serta duplikasi.',
    step2Title: 'Temukan pola',
    step2Text: 'Eksplorasi distribusi dan hubungan antarvariabel untuk menemukan informasi di balik angka.',
    step3Title: 'Uji hipotesis',
    step3Text: 'Bangun analisis atau model, bandingkan baseline, lalu evaluasi pada data yang terpisah.',
    step4Title: 'Dukung keputusan',
    step4Text: 'Terjemahkan hasil menjadi visualisasi, rekomendasi, dan penjelasan tentang ketidakpastian.',
    journeyEyebrow: '02 / PERJALANAN',
    journeyTitle: 'Belajar. Menerapkan. Bertumbuh.',
    journeyDescription: 'Pengalaman magang dan perjalanan akademik yang membentuk cara saya menyelesaikan masalah.',
    internshipEyebrow: 'PENGALAMAN MAGANG',
    internshipTitle: 'Posisi & perusahaan',
    internshipPlaceholder: 'Detail magang belum ditambahkan',
    internshipText: 'Periode, tanggung jawab, kontribusi, dan hasil pekerjaan akan ditampilkan di sini setelah informasinya tersedia.',
    educationEyebrow: 'PENDIDIKAN',
    educationTitle: 'Program studi & institusi',
    educationPlaceholder: 'Detail studi belum ditambahkan',
    educationText: 'Periode studi, bidang yang dipelajari, serta riset atau tugas akhir akan melengkapi perjalanan akademik saya.',
    projectsEyebrow: '03 / PROYEK',
    projectsTitle: 'Ide yang dikerjakan.',
    projectsDescription: 'Masalah, pendekatan, dan teknologi di balik setiap proyek.',
    projectsCarousel: 'Proyek portofolio',
    projectsTrack: 'Daftar proyek, gunakan panah kiri atau kanan',
    slide1Label: '1 dari 3',
    slide2Label: '2 dari 3',
    slide3Label: '3 dari 3',
    projectImageCaption: 'Gambar placeholder · Belum merupakan dokumentasi proyek',
    project1ImageAlt: 'Aset desain template, belum merupakan screenshot proyek 1',
    project2ImageAlt: 'Aset desain template, belum merupakan screenshot proyek 2',
    project3ImageAlt: 'Aset desain template, belum merupakan screenshot proyek 3',
    project1Eyebrow: 'PROYEK 01 / PLACEHOLDER',
    project2Eyebrow: 'PROYEK 02 / PLACEHOLDER',
    project3Eyebrow: 'PROYEK 03 / PLACEHOLDER',
    project1Title: 'Analisis & visualisasi data',
    project2Title: 'Pengembangan model',
    project3Title: 'Pengembangan aplikasi',
    projectText: 'Detail proyek belum ditambahkan. Bagian ini akan menjelaskan masalah yang diselesaikan, peran saya, pendekatan, dan hasil yang dapat dibuktikan.',
    notFilled: 'Belum diisi',
    repoPlaceholder: 'Repository & demo belum tersedia',
    chooseProject: 'Pilih proyek',
    showProject1: 'Tampilkan proyek 1',
    showProject2: 'Tampilkan proyek 2',
    showProject3: 'Tampilkan proyek 3',
    previousProject: 'Proyek sebelumnya',
    nextProject: 'Proyek berikutnya',
    pauseRotation: 'Jeda slide otomatis',
    startRotation: 'Mulai slide otomatis',
    skillsEyebrow: '04 / KEAHLIAN',
    skillsTitle: 'Bekal untuk membangun.',
    skillsDescription: 'Tools, kemampuan teknis, dan cara berkolaborasi dalam pengembangan aplikasi serta model.',
    toolsTitle: 'Tools & teknologi',
    toolsText: 'Bahasa pemrograman, library, database, dan platform yang digunakan.',
    toolsPlaceholder: 'Daftar tools menunggu detail Anda.',
    hardSkillsTitle: 'Hard skills',
    hardSkillsText: 'Kemampuan teknis dalam pengolahan data, pemodelan, dan pengembangan aplikasi.',
    hardSkillsPlaceholder: 'Daftar hard skills belum ditambahkan.',
    softSkillsTitle: 'Soft skills',
    softSkillsText: 'Kemampuan berkomunikasi, menyelesaikan masalah, dan bekerja bersama tim.',
    softSkillsPlaceholder: 'Daftar soft skills belum ditambahkan.',
    connectEyebrow: '05 / TERHUBUNG',
    connectTitle: 'Mari bertukar ide.',
    connectText: 'Temukan perjalanan profesional, kode, dan karya saya.',
    linkMissing: 'Link belum ditambahkan',
    otherContactLabel: 'Kontak lainnya',
    footerText: '© 2026 All rights reserved.',
    backToTop: 'Kembali ke atas ↑',
    darkMode: 'Aktifkan mode gelap',
    lightMode: 'Aktifkan mode terang'
  },
  en: {
    pageTitle: 'Data Scientist | Portfolio',
    metaDescription: 'Data Scientist portfolio. Data analysis, modeling, and insight communication with transparent evaluation.',
    skip: 'Skip navigation',
    mainNav: 'Main navigation',
    navJourney: 'Journey',
    navProjects: 'Projects',
    navSkills: 'Skills',
    navContact: 'Contact',
    languageToggle: 'Ganti ke Bahasa Indonesia',
    heroEyebrow: 'CONNECTING DATA WITH DECISIONS',
    heroLead: 'Raw data holds a story.<br>I help uncover its meaning.',
    heroDescription: 'My role is to process data, explore patterns, and build models that help answer real questions. Scattered numbers become information people can act on.',
    heroButton: 'How it works',
    photoTitle: 'Professional photo',
    photoHint: 'Replace with your photo',
    photoCaption: 'Reserved space for a professional profile photo.',
    discipline1: '01 / Understand the problem',
    discipline2: '02 / Test with data',
    discipline3: '03 / Explain the result',
    processEyebrow: '01 / PROCESS',
    processTitle: 'From raw data<br>to meaningful decisions.',
    processDescription: 'Each stage turns data into something more useful while keeping context and limitations visible.',
    step1Title: 'Clean the data',
    step1Text: 'Collect relevant sources, check quality, and handle missing values and duplicates.',
    step2Title: 'Find patterns',
    step2Text: 'Explore distributions and relationships between variables to find information behind the numbers.',
    step3Title: 'Test hypotheses',
    step3Text: 'Build an analysis or model, compare it with a baseline, then evaluate it on separated data.',
    step4Title: 'Support decisions',
    step4Text: 'Translate results into visualizations, recommendations, and explanations of uncertainty.',
    journeyEyebrow: '02 / JOURNEY',
    journeyTitle: 'Learn. Apply. Grow.',
    journeyDescription: 'Internship experience and academic growth that shape how I solve problems.',
    internshipEyebrow: 'INTERNSHIP EXPERIENCE',
    internshipTitle: 'Role & company',
    internshipPlaceholder: 'Internship details have not been added',
    internshipText: 'Period, responsibilities, contributions, and work outcomes will appear here once the information is available.',
    educationEyebrow: 'EDUCATION',
    educationTitle: 'Study program & institution',
    educationPlaceholder: 'Education details have not been added',
    educationText: 'Study period, fields of learning, research, or final project details will complete my academic journey.',
    projectsEyebrow: '03 / PROJECTS',
    projectsTitle: 'Ideas brought to life.',
    projectsDescription: 'The problem, approach, and technology behind each project.',
    projectsCarousel: 'Portfolio projects',
    projectsTrack: 'Project list, use left or right arrow keys',
    slide1Label: '1 of 3',
    slide2Label: '2 of 3',
    slide3Label: '3 of 3',
    projectImageCaption: 'Placeholder image · Not yet project documentation',
    project1ImageAlt: 'Template design asset, not yet a screenshot for project 1',
    project2ImageAlt: 'Template design asset, not yet a screenshot for project 2',
    project3ImageAlt: 'Template design asset, not yet a screenshot for project 3',
    project1Eyebrow: 'PROJECT 01 / PLACEHOLDER',
    project2Eyebrow: 'PROJECT 02 / PLACEHOLDER',
    project3Eyebrow: 'PROJECT 03 / PLACEHOLDER',
    project1Title: 'Data analysis & visualization',
    project2Title: 'Model development',
    project3Title: 'Application development',
    projectText: 'Project details have not been added. This section will explain the problem solved, my role, the approach, and measurable results.',
    notFilled: 'Not filled yet',
    repoPlaceholder: 'Repository & demo not available yet',
    chooseProject: 'Choose project',
    showProject1: 'Show project 1',
    showProject2: 'Show project 2',
    showProject3: 'Show project 3',
    previousProject: 'Previous project',
    nextProject: 'Next project',
    pauseRotation: 'Pause automatic slides',
    startRotation: 'Start automatic slides',
    skillsEyebrow: '04 / SKILLS',
    skillsTitle: 'Ready to build.',
    skillsDescription: 'Tools, technical abilities, and collaboration habits for building applications and models.',
    toolsTitle: 'Tools & technology',
    toolsText: 'Programming languages, libraries, databases, and platforms used.',
    toolsPlaceholder: 'Tool list is waiting for your details.',
    hardSkillsTitle: 'Hard skills',
    hardSkillsText: 'Technical abilities in data processing, modeling, and application development.',
    hardSkillsPlaceholder: 'Hard skills have not been added.',
    softSkillsTitle: 'Soft skills',
    softSkillsText: 'Communication, problem solving, and teamwork abilities.',
    softSkillsPlaceholder: 'Soft skills have not been added.',
    connectEyebrow: '05 / CONNECT',
    connectTitle: 'Let’s exchange ideas.',
    connectText: 'Find my professional journey, code, and work.',
    linkMissing: 'Link not added yet',
    otherContactLabel: 'Other contact',
    footerText: '© 2026 All rights reserved.',
    backToTop: 'Back to top ↑',
    darkMode: 'Enable dark mode',
    lightMode: 'Enable light mode'
  }
};

function activeCopy() {
  return translations[document.documentElement.lang] || translations.id;
}

function applyLanguage(language) {
  const copy = translations[language] || translations.id;
  document.documentElement.lang = language;
  document.title = copy.pageTitle;
  document.querySelector('meta[name="description"]').content = copy.metaDescription;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = copy[element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(element => {
    element.innerHTML = copy[element.dataset.i18nHtml];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(element => {
    element.setAttribute('aria-label', copy[element.dataset.i18nAria]);
  });
  document.querySelectorAll('[data-i18n-title]').forEach(element => {
    element.title = copy[element.dataset.i18nTitle];
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(element => {
    element.alt = copy[element.dataset.i18nAlt];
  });
  languageToggle.textContent = language === 'id' ? 'EN' : 'ID';
  languageToggle.setAttribute('aria-label', copy.languageToggle);
  languageToggle.title = copy.languageToggle;
  try { localStorage.setItem('portfolio-language', language); } catch {}
}

function syncTheme() {
  const dark = document.documentElement.dataset.theme === 'dark';
  const copy = activeCopy();
  document.documentElement.classList.toggle('dark', dark);
  toggle.setAttribute('aria-label', dark ? copy.lightMode : copy.darkMode);
  toggle.title = toggle.getAttribute('aria-label');
  document.querySelector('meta[name="theme-color"]').content = dark ? '#141817' : '#ffffff';
}
toggle.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('portfolio-theme', theme); } catch {}
  syncTheme();
});
preference.addEventListener('change', event => {
  try { if (localStorage.getItem('portfolio-theme')) return; } catch {}
  document.documentElement.dataset.theme = event.matches ? 'dark' : 'light';
  syncTheme();
});
languageToggle.addEventListener('click', () => {
  applyLanguage(document.documentElement.lang === 'id' ? 'en' : 'id');
  rotationLabel();
  syncTheme();
});
let savedLanguage = 'id';
try { savedLanguage = localStorage.getItem('portfolio-language') || 'id'; } catch {}
applyLanguage(savedLanguage);
syncTheme();

const track = document.getElementById('project-track');
const slides = [...track.children];
const dots = [...document.querySelectorAll('[data-slide]')];
const rotation = document.getElementById('rotation');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let paused = reducedMotion.matches;
let index = 0;
let timer;
let hovering = false;
let touching = false;
let visible = false;
function schedule() {
  clearTimeout(timer);
  if (!paused && !hovering && !touching && !document.hidden && visible) {
    timer = setTimeout(() => go(index + 1), 10000);
  }
}
function update() {
  if (!track.clientWidth) return;
  index = Math.round(track.scrollLeft / track.clientWidth);
  index = Math.max(0, Math.min(slides.length - 1, index));
  dots.forEach((dot, i) => {
    if (i === index) dot.setAttribute('aria-current', 'true');
    else dot.removeAttribute('aria-current');
  });
  document.getElementById('slide-count').textContent = String(index + 1).padStart(2, '0') + ' / 03';
}
function go(next) {
  if (!track.clientWidth || !Number.isFinite(next)) return;
  index = (next + slides.length) % slides.length;
  track.scrollTo({ left: index * track.clientWidth, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  schedule();
}
function rotationLabel() {
  rotation.textContent = paused ? '▷' : 'Ⅱ';
  const copy = activeCopy();
  rotation.setAttribute('aria-label', paused ? copy.startRotation : copy.pauseRotation);
  rotation.title = rotation.getAttribute('aria-label');
}
rotation.addEventListener('click', () => {
  paused = !paused;
  rotationLabel();
  schedule();
});
document.getElementById('previous').addEventListener('click', () => go(index - 1));
document.getElementById('next').addEventListener('click', () => go(index + 1));
dots.forEach(dot => dot.addEventListener('click', () => go(Number(dot.dataset.slide))));
track.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    go(index + (event.key === 'ArrowRight' ? 1 : -1));
  }
});
track.addEventListener('scroll', () => { update(); schedule(); }, { passive: true });
track.addEventListener('pointerdown', () => { touching = true; schedule(); });
window.addEventListener('pointerup', () => { touching = false; schedule(); });
window.addEventListener('pointercancel', () => { touching = false; schedule(); });
track.addEventListener('mouseenter', () => { hovering = true; schedule(); });
track.addEventListener('mouseleave', () => { hovering = false; schedule(); });
track.addEventListener('focusin', () => { paused = true; rotationLabel(); schedule(); });
document.addEventListener('visibilitychange', schedule);
reducedMotion.addEventListener('change', event => { paused = event.matches; rotationLabel(); schedule(); });
new IntersectionObserver(entries => {
  visible = entries[0].isIntersecting;
  schedule();
}, { threshold: 0.35 }).observe(track);
new ResizeObserver(() => {
  if (!track.clientWidth) return;
  track.scrollTo({ left: index * track.clientWidth, behavior: 'instant' });
}).observe(track);
rotationLabel();
