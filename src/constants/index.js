import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs2,
  git,
  python,
  energy1,
  ai1,
  webdev1,
  security1,
  brain,
  threejswp,
  reactandthreewp,
  threejs2,
  vuejs,
  firebase,
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
    title: "Open Source Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI / Machine Learning Developer",
    icon: brain,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "nodejs2",
    icon: nodejs2,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "threejs2",
    icon: threejs2,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "vuejs",
    icon: vuejs,
  },
];

const experiences = [
  {
    title: "Web Developer",
    icon: webdev1,
    iconBg: "#383E56",
    date: "Aug 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Vue.js, and Javascript.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developed an interactive product configurator using Three.js to allow users to customize and visualize products in real-time.",
    ],
  },
  {
    title: "AI / Machine Learning Developer",
    icon: ai1,
    iconBg: "#383E56",
    date: " Dec 2022 - Present",
    points: [
      "Worked for a recruitment company specialising behind the scenes with their databases and computing request.",
      "Collaborating with team members, building connections and learning from much more skilled and experienced developers",
      "Performed data cleaning, handling missing values, outliers, and noisy data to ensure high-quality input.",
    ],
  },

  {
    title: "IT Certifacte",
    company_name: "Stanmore College",
    icon: security1,
    iconBg: "#E6DEDD",
    date: "Sep 2020 - Sept 2022",
    points: [
      "Achieved D*D*D* highest grades possible.",
      "Was part of multiple solo and group projects.",
      "My first venture into game development and coding.",
    ],
  },
];

const testimonials = [
  {
  },
];

const projects = [
  {
    name: "Fully Responsive Modern UI/UX Website in React JS",
    description:
      "I recently coded a fully responsive and modern UI/UX website using React JS. By strategically planning and wireframing, I created a user-friendly interface that seamlessly adapts to different devices. Leveraging React's component-based structure, I ensured modularity and reusability, while CSS media queries and layout techniques like Flexbox and Grid facilitated responsiveness. I incorporated smooth animations with React Spring and managed state efficiently using React hooks. Performance optimization was achieved through code splitting and lazy loading, resulting in a sleek website that exemplifies the versatility of React JS.",
    tags: [
      {
        name: "javascript",
        color: "",
      },
      {
        name: "CSS",
        color: "purple-text-gradient",
      },
      {
        name: "HTML",
        color: "purple-text-gradient",
      },
    ],
    image: threejswp,
    source_code_link: "https://github.com/HassanMTS/Modern-UI-GPT3",
  },
  {
    name: "Discord Clone",
    description:
      "Crafting a Discord clone was an exciting challenge where I utilized Next.js 13, React, Socket.io, Prisma, Tailwind, and MySQL. With Next.js 13 for a smooth frontend, React for dynamic UIs, Socket.io for real-time features, and Prisma managing the database, the stack was well-rounded. Tailwind simplified styling, and MySQL handled data storage. This tech amalgamation allowed me to not just replicate Discord but enhance it with modern features, showcasing the prowess of an integrated tech stack in creating robust applications.",
    tags: [
      {
        name: "Typescript",
        color: "",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      
    ],
    image: reactandthreewp,
    source_code_link: "https://github.com/HassanMTS/TeamHassan",
  },
  {
    name: "Eclipsed",
    description:
      "In crafting a Python game akin to the zelda clone I utilized the Pygame library. The process began with window setup and asset integration, encompassing sprites, images, and sounds. Pygame's event handling facilitated responsive player control, while core mechanics like movement, collision detection, and enemy behavior brought the game to life. A tilemap system defined the virtual world, enriched by interactive elements such as puzzles and NPCs. Sound and music were seamlessly integrated using Pygame's audio features. Rigorous testing and debugging ensured a polished final product—a Python-coded adventure echoing the classic Zelda experience, skillfully blending code and creativity..",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: "src/assets/zelda.png",
    source_code_link: "https://github.com/HassanMTS/Dark-Soul-Themed-Game",
  },
];

export { services, technologies, experiences, testimonials, projects };
