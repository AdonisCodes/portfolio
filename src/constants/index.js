import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  replit,
  fiverr,
  shopify,
  cookiejar,
  superHero,
  tripguide,
  threejs,
} from "../assets";

import salman from "../assets/testimonials/salman.jpg";
import guillaum from "../assets/testimonials/guillaum.png";
import warren from "../assets/testimonials/warren.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Automations Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Freelancer",
    icon: replit,
    iconBg: "#383E56",
    date: "June 2023 - Present day",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Webscraping & Automations Developer",
    company_name: "Freelancer",
    icon: fiverr,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present day",
    points: [
      "Developing and maintaining Automation scripts using Puppeteer, Edge Functions, Selenium & requests libraries and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive edge-case handeling and ensuring undetectable compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "1. Got the job done quickly. 2. Responsive, and thoughtful 3. A pleasure to interact with.",
    name: "Salman Farmanfarmaian",
    designation: "125$",
    company: "private client",
    image: salman,
    stars: 5,
    proof: "dummy_url",
    caseStudy: "dummy_url",
  },
  {
    testimonial:
      "Adonis is very receptive to feedback. Just need to work on giving guarantees and having difficulties afterwards. ",
    name: "Guillaum Racine",
    designation: "450$",
    company: "Ecom Store Scraper",
    image: guillaum,
    stars: 5,
    proof: "dummy_url",
    caseStudy: "dummy_url",
  },
  {
    testimonial:
      "This is going to by my go -to bounty hunter, incredible work. Did exactly as delivered and went above and beyond...",
    name: "Warren Mokthrak",
    designation: "270$",
    company: "Simple Email Uploader",
    image: warren,
  },
];

const projects = [
  {
    name: "Project-Vidi",
    description:
      "Vidi is a collection of AI content repurposing and influencer tools, as well as a collection of utility tools and open-source repositories.",
    tags: [
       {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "chakra-ui",
        color: "pink-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "zustand",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "GO",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "scala",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "kubernetes",
        color: "blue-text-gradient",
      },
      {
        name: "And about 50 unique technologies more...",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://vidi.simonferns.com/vidi.png',
    source_code_link: "https://github.com/AdonisCodes/Project-Vidi",
    live_demo: "https://vidi.simonferns.com/",
  },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "chakra-ui",
        color: "pink-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "zustand",
        color: "blue-text-gradient",
      },
    ],
    image: cookiejar,
    source_code_link: "https://github.com/",
    live_demo: "https://cookiejar.co/",
  },
  {
    name: "SuperHero.",
    description:
      "A web-application that enables users to lookup their favourite heros. The app features stunning animations. Quick load times thanks to the SPA architecture & Svelte framework. The app will show stats on all super heros, with a simple search. This was a little dummy project for me.",
    tags: [
      {
        name: "Svelte",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],
    image: superHero,
    source_code_link: "https://github.com/",
    live_demo: "https://super-hero-api-app-lol.onrender.com/",
  },
  {
    name: "And Many more...",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Moviepy",
        color: "green-text-gradient",
      },
      {
        name: "Selenium",
        color: "blue-text-gradient",
      },
      {
        name: "requests",
        color: "pink-text-gradient",
      },
      {
        name: "Puppeteer",
        color: "green-text-gradient",
      },
      {
        name: "APIS",
        color: "blue-text-gradient",
      },
    ],
    image: "https://placehold.co/600x400?text=Check My Github&font=roboto",
    source_code_link: "https://github.com/AdonisCodes",
    live_demo: "https://github.com/AdonisCodes",
  },
];

export { services, technologies, experiences, testimonials, projects };
