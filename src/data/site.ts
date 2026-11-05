/**
 * Portfolio content lives here so it is easy to maintain.
 * Replace placeholders only with verified personal information.
 * The work samples below are explicitly concepts, not client projects.
 */

export const site = {
  name: "Ujang",
  brand: "UjangDev",
  role: "Front-end Developer",

  title: "UjangDev | Front-end Developer · React & Tailwind CSS",

  description:
    "Ujang builds thoughtful, responsive web interfaces with React and Tailwind CSS, from landing pages to dashboards and Figma-to-React implementation.",

  url: "https://portfolio-ujang.vercel.app",

  // File harus berada di: public/ujng-profile.jpg
  photo: "/ujng-profile.jpg",

  email: "akangujang30@gmail.com",

  // Isi hanya jika informasinya sudah benar dan terverifikasi.
  timezone: "",
  languages: "",
  location: "",

  links: {
    upwork: "https://www.upwork.com/freelancers/~0171636fbf8ce002e4",
    linkedin: "https://www.linkedin.com/in/ujang-409671438/",
    github: "https://github.com/ujngflsh",
    cv: "",
  },

  hero: {
    headline: "Interfaces built to do real work.",

    supporting:
      "I build clear, responsive interfaces for digital products, from focused landing pages to practical dashboards. I work with React and Tailwind CSS to turn ideas and designs into polished web experiences.",

    primaryLabel: "Hire me on Upwork",
    secondaryLabel: "Send a project brief",
  },

  bio:
    "I’m Ujang, a front-end developer focused on making web interfaces clear, responsive, and comfortable to use. I work across landing pages, dashboard interfaces, and Figma-to-React implementation.",

  workingStyle: [
    "Clarify the goal, audience, and scope before writing code.",
    "Build in small, reviewable steps and keep the interface responsive.",
    "Communicate clearly and flag trade-offs early.",
  ],

  stack: [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "HTML",
    "CSS",
    "Astro",
  ],

  services: [
    {
      title: "Landing Pages",
      description:
        "Purpose-built marketing pages that explain your offer clearly, guide visitors through the content, and make the next step easy to find.",
      deliverables: [
        "Responsive page sections and layouts",
        "Clear content hierarchy and calls to action",
        "Polished interactions and mobile styling",
      ],
      bestFor:
        "Product launches, personal brands, service businesses, and campaign pages.",
    },
    {
      title: "Figma to React",
      description:
        "Turn an approved Figma design into a responsive React interface, with close attention to layout, typography, spacing, and reusable components.",
      deliverables: [
        "Reusable React components",
        "Responsive desktop and mobile layouts",
        "Consistent styling with Tailwind CSS",
      ],
      bestFor:
        "Designers, startups, and teams that need a reliable front-end implementation.",
    },
    {
      title: "Dashboard Interface",
      description:
        "Build practical dashboard screens that organize information into clear layouts, useful data views, and predictable navigation.",
      deliverables: [
        "Dashboard layouts and navigation",
        "Tables, metric cards, and data views",
        "Reusable UI patterns and responsive states",
      ],
      bestFor:
        "Internal tools, admin panels, analytics products, and inventory systems.",
    },
  ],

  process: [
    {
      title: "01 / Brief",
      description:
        "Align on goals, audience, scope, references, and what a successful handoff looks like.",
    },
    {
      title: "02 / Plan",
      description:
        "Break the work into clear sections, milestones, and review points.",
    },
    {
      title: "03 / Build",
      description:
        "Implement the interface responsively and share progress for feedback.",
    },
    {
      title: "04 / Polish",
      description:
        "Check key screen sizes, accessibility basics, and delivery details.",
    },
  ],

  projects: [
    {
      name: "Analytics Dashboard UI",
      type: "Personal project",

      summary:
        "StockFlow is an inventory dashboard for reviewing stock levels, product activity, and operational metrics in one workspace.",

      problem:
        "Inventory teams need to scan important stock information quickly without losing context across separate screens.",

      solution:
        "Built a dashboard experience with summary metrics, inventory views, product management, and reporting screens. The project is a self-initiated portfolio build, not client work.",

      result:
        "A working, publicly accessible demo is available. No client or business performance metrics are claimed.",

      stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],

      liveUrl: "https://stock-flow-navy.vercel.app/",
      repoUrl: "https://github.com/ujngflsh/StockFlow",
      image: "/images/stock-flow.png",

      featured: true,
    },

    {
      name: "Product Launch Landing Page",
      type: "Concept project",

      summary:
        "AUREN ONE is a premium smartwatch launch-page concept with a focused product story, feature highlights, and a clear early-access call to action.",

      problem:
        "A product launch page needs to introduce the product quickly while giving visitors a clear path to learn more or register interest.",

      solution:
        "Designed and built a responsive product landing page with editorial-style messaging, product sections, and a consistent call-to-action pattern.",

      result:
        "A working concept demo is available. No real product sales or conversion results are claimed.",

      stack: ["Astro", "Tailwind CSS"],

      liveUrl: "https://auren-product-launch.vercel.app/",
      repoUrl: "https://github.com/ujngflsh/auren-product-launch",
      image: "/images/auren-product-launch.png",

      featured: false,
    },

    {
      name: "Coffee Brand Website",
      type: "Concept project",

      summary:
        "A fictional coffee-bar website introducing its menu, story, and visit information through a warm, editorial visual direction.",

      problem:
        "A small hospitality brand needs a welcoming online presence that makes its offer and key visit information easy to explore.",

      solution:
        "Built a responsive café website with menu, brand story, location details, and reservation-style calls to action. Brand, address, menu, prices, and business details are illustrative only.",

      result:
        "A working concept demo is available. Lowlight Coffee is fictional and is not a real client or operating business.",

      stack: ["Astro", "Tailwind CSS"],

      liveUrl: "https://lowlight-coffee.vercel.app/",
      repoUrl: "https://github.com/ujngflsh/lowlight-coffee",
      image: "/images/lowlight-coffee.png",

      featured: false,
    },
  ],

  testimonials: [] as Array<{
    name: string;
    role: string;
    quote: string;
  }>,

  contactNote:
    "Have a project in mind? Share the goal, timeline, and any useful references. I’ll review the brief and get back to you.",
};