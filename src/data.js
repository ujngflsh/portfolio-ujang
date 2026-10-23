export const profile = {
  name: 'Ujang',
  initials: 'UjangDev',
  role: 'Front-End Developer',

  // Teks Hero
  headline: "Hi, I'm Ujang",
  subheadline: 'I build things for',
  subtitle: 'Creating fast, beautiful and modern websites.',

  location: 'Indonesia',
  timezone: 'GMT+7 (WIB)',
  email: 'akangujang30@gmail.com',
  whatsapp: '+62 8317-338-143',
  whatsappLink: 'https://wa.me/628317338143',
  photo: '/ujang-profile.png',
  cvUrl: '',
  available: true,
  availableText: 'Available for new projects',
};

export const links = {
  upwork: 'https://www.upwork.com/freelancers/~0171636fbf8ce002e4?mp_source=share',
  github: 'https://github.com/ujngflsh',
  linkedin: 'https://www.linkedin.com/in/ujang-409671438/',
  instagram: 'https://www.instagram.com/ujngflsh',
  twitter: '',
};

// Kosongkan kalau tidak mau menampilkan statistik di hero.
export const stats = [];

export const about = {
  title: 'Turning ideas into',
  titleEm: 'clean interfaces',
  paragraphs: [
    "I'm a front-end developer who builds fast, responsive and modern websites with React and Tailwind CSS. I care about clean code, smooth interactions and interfaces that are easy to use.",
    'I work closely with clients, communicate clearly and keep you updated at every step. Based in Indonesia, flexible with overlapping hours for US/EU clients.',
  ],
  image: '',
  badgeNumber: '',
  badgeLabel: '',
  skills: [],
  tools: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Tailwind CSS',
    'Redux',
    'Bootstrap',
    'Git',
    'GitHub',
    'VS Code',
  ],
};

export const services = [
  {
    icon: 'monitor',
    title: 'React Web Apps',
    description:
      'Fast, responsive and accessible web applications built with React and modern tooling.',
    bullets: ['React / Vite', 'Tailwind CSS', 'Redux state management'],
    featured: false,
  },
  {
    icon: 'layers',
    title: 'Landing Pages & UI',
    description:
      'Responsive landing pages and polished interfaces with smooth animations.',
    bullets: ['Responsive layouts', 'Animations & polish', 'E-commerce front-ends'],
    featured: true,
  },
  {
    icon: 'database',
    title: 'Dashboards & Components',
    description:
      'Admin dashboards and reusable component libraries that keep your UI consistent.',
    bullets: ['Admin dashboard UI', 'Reusable components', 'Design-to-code'],
    featured: false,
  },
  {
    icon: 'wrench',
    title: 'Fixes & Improvements',
    description:
      'Bug fixing, responsiveness and cleanup for existing front-end codebases.',
    bullets: ['Bug fixing', 'Mobile responsiveness', 'Code cleanup'],
    featured: false,
  },
];

export const projects = [
  {
    title: 'tani-store',
    category: 'web',
    description: 'Frontend for tani-store landing page.',
    tags: ['React', 'Tailwind CSS'],
    image: '/projects/tani-store.png',
    link: '',
    repo: 'https://github.com/ujngflsh/tani-store',
  },
  {
    title: 'Dashboard UI',
    category: 'web',
    description: 'Admin dashboard template.',
    tags: ['React', 'Tailwind CSS'],
    image: '/projects/dashboard-ui.png',
    link: '',
    repo: 'https://github.com/ujngflsh/Dashboard-UI',
  },
  {
    title: 'E-commerce UI',
    category: 'web',
    description: 'Frontend for e-commerce.',
    tags: ['React', 'Redux'],
    image: '/projects/ecommerce-ui.jpg',
    link: '',
    repo: 'https://github.com/ujngflsh/E-commerce-UI',
  },
  {
    title: 'Portfolio Template',
    category: 'web',
    description: 'Portfolio template made with React.',
    tags: ['React', 'Tailwind CSS'],
    image: '/projects/portfolio-template.png',
    link: '',
    repo: 'https://github.com/ujngflsh/portfolio-tamplate-premium',
  },
  {
    title: 'Blog Platform',
    category: 'web',
    description: 'Static blog built with MDX.',
    tags: ['React', 'MDX'],
    image: '/projects/blog-platform.png',
    link: '',
    repo: 'https://github.com/ujngflsh/ujng-blog-platform',
  },
  {
    title: 'Component Library',
    category: 'web',
    description: 'Reusable UI component library.',
    tags: ['React', 'Tailwind CSS'],
    image: '/projects/component-library.png',
    link: '',
    repo: 'https://github.com/ujngflsh/Component-Library',
  },
];

// Tab filter otomatis disembunyikan kalau hanya ada 1 kategori.
export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web App' },
  { id: 'design', label: 'Design' },
  { id: 'mobile', label: 'Mobile' },
];

// Kosong = section Testimonials otomatis disembunyikan.
export const testimonials = [];

export const contact = {
  heading: "Let's work",
  headingEm: 'together',
  description:
    'Feel free to reach out for collaborations or just a friendly hello! You can also invite me directly on Upwork. I usually reply within 24 hours.',
  formEndpoint: 'https://formspree.io/f/mrppgvrj', // <-- Isi di sini
};