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
  photo: '/foto-ujang-baru.png',
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
    title: 'Analytics Dashboard UI',
    category: 'web',
    description:
      'An inventory management dashboard for tracking products, stock levels and business reports.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '/projects/stock-flow.png',
    link: 'https://stock-flow-navy.vercel.app/',
    repo: 'https://github.com/ujngflsh/StockFlow',
  },
  {
    title: 'Product Launch Landing Page',
    category: 'web',
    description:
      'A premium product landing page concept designed to present a smartwatch and its features.',
    tags: ['React', 'Tailwind CSS'],
    image: '/projects/auren-product-launch.png',
    link: 'https://auren-product-launch.vercel.app/',
    repo: 'https://github.com/ujngflsh/auren-product-launch',
  },
  {
    title: 'Coffee Brand Website',
    category: 'web',
    description:
      'A modern coffee brand website concept featuring a welcoming storefront and seasonal menu.',
    tags: ['Astro', 'Tailwind CSS'],
    image: '/projects/lowlight-coffee.png',
    link: 'https://lowlight-coffee.vercel.app/',
    repo: 'https://github.com/ujngflsh/lowlight-coffee',
  },
];

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
