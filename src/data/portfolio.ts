export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
  color: 'primary' | 'secondary' | 'tertiary';
}

export interface InfoCard {
  label: string;
  value: string;
  labelColor?: string;
}

export interface SkillItem {
  name: string;
  level?: string;
}

export interface SkillGroup {
  category: string;
  icon?: string;
  skills: SkillItem[];
}

export interface Education {
  degree: string;
  dateRange: string;
  program: string;
  description: string;
  details: { label: string; value: string }[];
}

export interface PreviousEducation {
  icon: string;
  title: string;
  dateRange: string;
  school: string;
  description: string;
}

export interface Certification {
  icon: string;
  title: string;
  issuer?: string;
  date?: string;
  description: string;
}

export interface EducationData {
  main: Education;
  committee: PreviousEducation[];
  certifications: Certification[];
}

export interface ExperienceEntry {
  dateRange: string;
  role: string;
  company: string;
  description: string;
  techStack: string[];
  dotColor: string;
  glowColor: string;
  dateColor: string;
  companyColor: string;
}

export interface Project {
  hidden?: boolean;
  image?: string;
  icon: string;
  thumbnailLabel: string;
  category: string;
  categoryColor: string;
  field: string;
  fieldColor: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  sourceUrl: string;
  hoverColor: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  phone: string;
  socials: { label: string; url: string }[];
}

export interface PortfolioData {
  personal: {
    avatar?: string;
    name: string;
    displayName: string;
    nickname: string;
    role: string;
    heroTitle: string;
    heroTitleAccent: string;
    greeting: string;
    heroBio: string;
    stats: Stat[];
  };
  nav: NavLink[];
  about: {
    sectionLabel: string;
    headline: string;
    paragraph1: string;
    paragraph2: string;
    bioQuote: string;
    status: string;
    interests: string;
    infoCards: InfoCard[];
  };
  skills: SkillGroup[];
  education: Education;
  previousEducation: PreviousEducation;
  certification: Certification;
  certifications?: Certification[];
  experience: ExperienceEntry[];
  projects: Project[];
  contact: ContactInfo;
  footer: {
    location: string;
    copyright: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    avatar: '', // Akan otomatis menggunakan src/assets/profile.jpg jika kosong
    name: 'fajriansidiq',
    displayName: 'Muhammad Fajrian Sidiq',
    nickname: 'Fajrian',
    role: 'Lulusan Sistem Informasi • Web Developer & UI/UX Designer',
    heroTitle: 'Web Developer &',
    heroTitleAccent: 'UI/UX Designer',
    greeting: 'MUHAMMAD FAJRIAN SIDIQ',
    heroBio:
      'Lulusan Sistem Informasi dari Institut Teknologi Kalimantan dengan minat dan fokus mendalam pada Pengembangan Web, Desain UI/UX, dan Visualisasi Data. Berpengalaman dalam merancang serta membangun aplikasi web yang fungsional dan prototipe antarmuka yang ramah pengguna.',
    stats: [
      { value: 'ITK', label: 'Alumni Sistem Informasi', color: 'primary' },
      { value: '3+', label: 'Sertifikasi Keahlian', color: 'secondary' },
      { value: '100%', label: 'Dedikasi Solusi Digital', color: 'tertiary' },
    ],
  },

  nav: [
    { label: 'Beranda', href: '#home' },
    { label: 'Tentang & Keahlian', href: '#about' },
    { label: 'Pendidikan', href: '#education' },
    { label: 'Pengalaman', href: '#experience' },
    { label: 'Proyek', href: '#projects' },
    { label: 'Kontak', href: '#contact' },
  ],

  about: {
    sectionLabel: 'Biodata & Keahlian Teknis',
    headline: 'Profil Profesional & Tech Stack',
    paragraph1:
      'Lulusan Sistem Informasi dari Institut Teknologi Kalimantan (ITK) dengan minat mendalam pada Pengembangan Web, Desain UI/UX, dan Visualisasi Data. Berfokus pada perancangan dan pengembangan solusi digital yang fungsional, ramah pengguna, serta selaras dengan kebutuhan nyata pengguna.',
    paragraph2:
      'Berpengalaman dalam pengembangan web, perancangan antarmuka & prototipe (Figma), analisis sistem, pemodelan proses bisnis, serta pengolahan data. Memiliki kemampuan komunikasi, koordinasi, dan kerja sama tim yang solid melalui kepanitiaan kampus dan pengalaman magang profesional.',
    bioQuote:
      '"Menciptakan solusi digital yang fungsional, ramah pengguna, dan berorientasi pada dampak nyata."',
    status: 'Tersedia untuk Kerja / Proyek',
    interests: 'Pengembangan Web, Desain UI/UX, Visualisasi Data, Analisis Sistem',
    infoCards: [
      { label: 'Lokasi', value: 'Kalimantan Timur, Indonesia' },
    ],
  },

  skills: [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML', level: 'Advanced' },
        { name: 'CSS', level: 'Advanced' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'React', level: 'Core Skill' },
        { name: 'Vue', level: 'Intermediate' },
        { name: 'Inertia.js', level: 'Advanced' },
        { name: 'Vite', level: 'Advanced' },
        { name: 'Tailwind CSS', level: 'Advanced' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Laravel', level: 'Core Skill' },
        { name: 'PHP', level: 'Advanced' },
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'RESTful API', level: 'Advanced' },
        { name: 'MVC Architecture', level: 'Advanced' },
      ],
    },
    {
      category: 'Database',
      skills: [
        { name: 'MySQL', level: 'Core Skill' },
        { name: 'PostgreSQL', level: 'Intermediate' },
        { name: 'Firebase Firestore', level: 'Intermediate' },
        { name: 'Supabase', level: 'Intermediate' },
      ],
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Figma', level: 'Core Skill' },
        { name: 'Git', level: 'Advanced' },
        { name: 'GitHub', level: 'Advanced' },
        { name: 'GitHub Actions', level: 'Intermediate' },
        { name: 'VS Code', level: 'Advanced' },
      ],
    },
  ],

  education: {
    degree: 'Sarjana Sistem Informasi (S.Kom)',
    dateRange: 'Lulus',
    program: 'Sistem Informasi — Institut Teknologi Kalimantan (ITK)',
    description:
      'Lulusan program studi Sistem Informasi dengan fokus pada Pemrograman Web, Desain Antarmuka (UI/UX), Visualisasi Data, dan Analisis Proses Bisnis. Terbiasa merancang solusi digital yang berorientasi pengguna.',
    details: [
      { label: 'INSTITUSI', value: 'Institut Teknologi Kalimantan' },
      { label: 'KONSENTRASI', value: 'Pengembangan Web & Desain UI/UX' },
    ],
  },

  previousEducation: {
    icon: 'school',
    title: 'Kepanitiaan & Organisasi Kampus',
    dateRange: '2023 — 2024',
    school: 'INSPACE (Information Systems Path to Creativity) ITK',
    description:
      'Menjabat sebagai Secretary (2024) dan Staff (2023) pada Divisi Sponsorship. Bertanggung jawab atas administrasi, dokumentasi, koordinasi kemitraan, komunikasi, dan persiapan acara.',
  },

  certification: {
    icon: 'verified',
    title: 'Sertifikasi & Pelatihan Profesional',
    description:
      'Pelatihan AI (Generation Girl), Workshop Laravel Web Development (WORKER ITK), dan UI/UX Design with Figma (EKSPRESI ITK).',
  },

  certifications: [
    {
      icon: 'verified',
      title: 'Peningkatan Kompetensi dan Literasi Digital Mahasiswa Melalui AI',
      issuer: 'Generation Girl',
      date: 'Apr 2026',
      description: 'Program pelatihan peningkatan literasi digital dan implementasi AI (Credential ID YGMB/CERT/2026/4/0400).',
    },
    {
      icon: 'verified',
      title: 'Workshop Keprofesian (WORKER) – Starting Your Web Development Journey with Laravel',
      issuer: 'HMSI Institut Teknologi Kalimantan',
      date: 'Mar 2025',
      description: 'Pelatihan pengembangan web berbasis framework Laravel dan implementasi RESTful API modern.',
    },
    {
      icon: 'verified',
      title: 'Edukasi dan Pelatihan Kreatif Sistem Informasi (EKSPRESI) – From Idea to Reality: Transforming Ideas into Visual with Figma',
      issuer: 'HMSI Institut Teknologi Kalimantan',
      date: 'Oct 2024',
      description: 'Perancangan User Interface & User Experience (UI/UX) prototyping dan design system menggunakan Figma.',
    },
  ],

  experience: [
    {
      dateRange: 'Jan 2025 — Feb 2025',
      role: 'Magang – Divisi Perencanaan Program dan Keuangan',
      company: 'Dinas Tenaga Kerja dan Transmigrasi Kabupaten Penajam Paser Utara',
      description:
        'Menangani tugas administratif dan pengolahan data dokumen resmi, Laporan Penutupan Kas, Laporan Rencana Kerja, Laporan LKIP, dokumen OPD, serta berkontribusi dalam perbaikan dan pemeliharaan website SIAP GERAK. Mengerjakan Proyek Khusus: "Redesign Website Profile pada Dinas Tenaga Kerja dan Transmigrasi Kabupaten Penajam Paser Utara Menggunakan Metode Design Thinking" mulai dari perancangan prototipe hingga evaluasi dan presentasi.',
      techStack: ['Desain UI/UX', 'Design Thinking', 'Pengembangan Web', 'Figma'],
      dotColor: 'bg-primary',
      glowColor: '',
      dateColor: 'text-primary',
      companyColor: 'text-on-surface-variant',
    },
    {
      dateRange: 'Jan 2024 — Agu 2024',
      role: 'Sekretaris – Divisi Sponsorship',
      company: 'INSPACE ITK 2024',
      description:
        'Menjabat sebagai Sekretaris Divisi Sponsorship kepanitiaan INSPACE 2024. Bertanggung jawab atas pengelolaan administrasi surat-menyurat, penyusunan proposal kemitraan sponsor, dokumentasi kegiatan, serta koordinasi komunikasi aktif dengan pihak sponsor eksternal.',
      techStack: ['Administrasi', 'Koordinasi Sponsorship', 'Dokumentasi'],
      dotColor: 'bg-primary',
      glowColor: '',
      dateColor: 'text-primary',
      companyColor: 'text-on-surface-variant',
    },
    {
      dateRange: 'Mar 2023 — Okt 2023',
      role: 'Staf Kepanitiaan – Divisi Sponsorship',
      company: 'INSPACE ITK 2023',
      description:
        'Mendukung operasional divisi sponsorship dalam menjalin relasi kemitraan, penyusunan dan pengiriman proposal kerja sama, komunikasi mitra, tugas administratif, serta persiapan teknis acara.',
      techStack: ['Komunikasi', 'Kerja Sama Tim', 'Manajemen Sponsorship'],
      dotColor: 'bg-primary',
      glowColor: '',
      dateColor: 'text-primary',
      companyColor: 'text-on-surface-variant',
    },
  ],

  projects: [
    {
      image: '/project1.jpg',
      icon: 'LayoutDashboard',
      thumbnailLabel: 'UI/UX Redesign • Disnakertrans PPU',
      category: 'UI/UX Design & Web',
      categoryColor: 'text-primary',
      field: 'Government Website',
      fieldColor: 'text-primary',
      title: 'Redesign Website Profile Disnakertrans PPU',
      description:
        'Proyek redesign website profil Dinas Tenaga Kerja dan Transmigrasi Kabupaten Penajam Paser Utara menggunakan metode Design Thinking, mencakup riset kebutuhan pengguna, pembuatan wireframe & prototipe Figma, serta peningkatan website SIAP GERAK.',
      tags: ['Figma', 'UI/UX Design', 'Design Thinking', 'Prototyping'],
      liveUrl: '#',
      sourceUrl: '#',
      hoverColor: '',
    },
    {
      image: '/project2.jpg',
      icon: 'ShoppingBag',
      thumbnailLabel: 'Full-Stack • Laravel & MySQL',
      category: 'Full-Stack',
      categoryColor: 'text-primary',
      field: 'Web Application',
      fieldColor: 'text-primary',
      title: ' Dashboard Visualisasi Portofolio CPL-CPMK',
      description:
        'Implementasi Dashboard Visualisasi Portofolio Hubungan CPL-CPMK Untuk Mendukung Akreditasi Pada Kriteria Relevansi Pendidikan pada prodi Sistem Informasi ITK',
      tags: ['Laravel', 'MySQL', 'PHP', 'Tailwind CSS', 'REST API'],
      liveUrl: '#',
      sourceUrl: '#',
      hoverColor: '',
    },
    {
      hidden: true, // di-hide sementara
      image: '/project3.jpg',
      icon: 'Palette',
      thumbnailLabel: 'Interactive UI • React & Inertia',
      category: 'Frontend & UI',
      categoryColor: 'text-primary',
      field: 'Interactive Web',
      fieldColor: 'text-primary',
      title: 'Modern Interactive Web Experience',
      description:
        'Pengembangan antarmuka web modern dengan komponen React dan Vite, transisi interaktif, desain adaptif, serta visualisasi data sistematis yang berpusat pada kenyamanan pengguna.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      liveUrl: '#',
      sourceUrl: '#',
      hoverColor: '',
    },
  ],

  contact: {
    email: 'fajriansidiq@gmail.com',
    location: 'Kalimantan Timur, Indonesia • Available Remote / On-Site',
    phone: '+62 851-1707-5454',
    socials: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammad-fajrian-sidiq-1147641a0/' },
      { label: 'GitHub', url: 'https://github.com/fajriansidiq22' },
      { label: 'WhatsApp', url: 'https://wa.me/6285117075454' },
    ],
  },

  footer: {
    location: 'Kalimantan Timur, Indonesia',
    copyright: '© 2026 Muhammad Fajrian Sidiq. Seluruh hak cipta dilindungi.',
  },
};
