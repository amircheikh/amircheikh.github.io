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
  oranda,
  sobeys,
  stompers,
  uwindsor,
  tesla,
  shopify,
  aitexturegen1,
  aitexturegen2,
  aitexturegen3,
  aitexturegen4,
  gptunity1,
  gptunity2,
  gptunity3,
  gptunity4,
  gptunity5,
  aitts,
  threejs,
} from "../assets";

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
    id: "projects",
    title: "Projects",
  },
];

const services = [
  {
    title: "Unity",
    icon: web,
  },
  {
    title: "Full-stack Development",
    icon: mobile,
  },
  {
    title: "AI Integration",
    icon: backend,
  },
  {
    title: "Content Creation",
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
    title: "Teaching Assistant",
    company_name: "University of Windsor",
    icon: uwindsor,
    iconBg: "#383E56",
    date: "September 2023 - December 2023",
    points: [
      "Teaching assistant for COMP-1000 class (Key Concepts in Computer Science)",
      "Assisted in labs to help students learn",
      "Provided office hours for students",
      "Marked assignemnts and exams"
    ],
  },
  {
    title: "Frontend Clerk",
    company_name: "Sobeys",
    icon: sobeys,
    iconBg: "#383E56",
    date: "July 2022 - PRESENT",
    points: [
      "Developed crucial customer service skills",
      "Collaborated with co-workers to create better experieces",
      "Learned fundamental work environment requirements",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Oranda",
    icon: oranda,
    iconBg: "#383E56",
    date: "January 2023 - August 2023",
    points: [
      "Developed backend of their AI NFT generator product",
      "Made the experience seamless with FastAPI",
      "Worked heavily with Stable Diffusion image generation",
      "Built the SQL database to store crucial data for the product",
      "Worked with Google Cloud Compute to store files and host database",
    ],
  },
  {
    title: "Volunteer Soccer Coach",
    company_name: "LaSalle Stompers",
    icon: stompers,
    iconBg: "#383E56",
    date: "June 2021 - August 2022",
    points: [
      "Coach for U10 Boys soccer team",
      "Communicated with parents through emails and in person",
      "Created a fun environment for children",
      "Learned the fundamentals of team leadership",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Texture Generator",
    description:
      "A tool that uses OpenAI's DALL·E 2 to generate textures directly from the Unity Editor. All API calls are made directly in the editor and requires no outside software. The normal map, height map, and AO map for each texture is also generated, allowing for realistic looking textures. Available as a free download on the Unity Asset Store.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "green-text-gradient",
      },
      {
        name: "DALLE-2",
        color: "pink-text-gradient",
      },
    ],
    image: aitexturegen1,
    slides:[
      aitexturegen1,
      aitexturegen2,
      aitexturegen3,
      aitexturegen4,
    ],
    unity_link: "https://assetstore.unity.com/packages/tools/generative-ai/amir-s-ai-texture-generator-258109",
    github_link: "https://github.com/amircheikh/Unity-AI-Texture-Generator",
    youtube_link: "https://youtu.be/j_V2LVeXV4k"
  },
  {
    name: "ChatGPT in Unity",
    description:
      "An open source and customizable game demo which impliments ChatGPT in Unity to create custom NPCs. All API calls are made directly in the game and requires no outside software. The goal of the game is to find the password for the castle in BunzelTown by talking to the NPCs around the map. Anyone can clone the repo and create their own games with custom NPCs based off this demo.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "green-text-gradient",
      },
      {
        name: "ChatGPT",
        color: "pink-text-gradient",
      },
    ],
    image: gptunity1,
    slides:[
      gptunity1,
      gptunity2,
      gptunity3,
      gptunity4,
      gptunity5,
    ],
    github_link: "https://github.com/amircheikh/Unity-ChatGPT-NPCs",
    youtube_link: "https://youtu.be/mihnhEf5PVQ"
  },
  {
    name: "AI Text to Speech Discord Bot",
    description:
      "A text to speech Discord bot made in Python that generates from custom, pretrained voices. This bot uses TorToiSe TTS to generate the speech. You can select from any of the pretrained voice models that I created, or train your own.",
    tags: [
      {
        name: "Discord Bot",
        color: "blue-text-gradient",
      },
      {
        name: "TorToiSe TTS",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: aitts,
    slides:[
      aitts,
    ],
    github_link: "https://github.com/amircheikh/AI-TTS-Discord-bot-TorToiSe",
  },
];

export { services, technologies, experiences, testimonials, projects };
