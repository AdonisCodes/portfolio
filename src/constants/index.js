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
  {
    id: "hire",
    title: "Hire Me",
  }
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
    title: "Freelance Developer",
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
      "Adonis is very thorough and refactors his code and has a strong sense of pride in his work. A pleasure to work with.",
    name: "Jared Seth Morgenstern",
    designation: "20k+$",
    company: "funcoach & lwc",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/JMorgensternLowRes.jpg/440px-JMorgensternLowRes.jpg",
    stars: 5,
    proof: "https://funcoach.us",
    caseStudy: "https://replit.com/@AdonisCodes",
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
      "Great work and communication. Intend to hire again!",
    name: "Matt",
    designation: "450$",
    company: "AI Powered Affiliate Marketing Bot.",
    image: "data:image/jpeg;base64,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",
  },
];

const projects = [
  {
    name: "Automa",
    description:
      "Automa is an automation sulation made for humans. Allowing everyone to automate Any social media at the click of a few buttons.",
    tags: [
       {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "swift",
        color: "green-text-gradient",
      },
      { 
        name: "supabase", color: "green-text-gradient",
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
    image: 'https://github.com/Automa-Automations/.github/assets/122154257/b1933428-b151-4117-8549-8f357af3bf72',
    source_code_link: "https://github.com/Automa-Automations/",
    live_demo: "https://youtube.com/@AdonisCodes",
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
