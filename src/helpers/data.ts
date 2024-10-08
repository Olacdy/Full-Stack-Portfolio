export const sections = [
  { name: 'Home', id: 'home', ariaLabel: 'Go to a home section', number: 0 },
  {
    name: 'About',
    id: 'about',
    ariaLabel: 'Go to an about section',
    number: 1,
  },
  {
    name: 'Work',
    id: 'work',
    ariaLabel: 'Go to a work section',
    number: 4,
  },
  {
    name: 'Contact',
    id: 'contact',
    ariaLabel: 'Go to a contact section',
    number: 6,
  },
];

export const contacts = [
  {
    name: 'GitHub',
    link: 'https://github.com/Olacdy',
    ariaLabel: 'Review a GitHub page',
    icon: 'github',
  },
  {
    name: 'Resume',
    link: 'https://olacdy.github.io/Full-Stack-Developer-CV/',
    ariaLabel: 'Review a resume',
    icon: 'resume',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/Olacdy',
    ariaLabel: 'Twitter profile',
    icon: 'twitter',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/oleg-didechkin/',
    ariaLabel: 'LinkedIn profile',
    icon: 'linkedin',
  },
  {
    name: 'Telegram',
    link: 'https://t.me/olacdy',
    ariaLabel: 'Telegram contact',
    icon: 'telegram',
  },
  {
    name: 'Fiverr',
    link: 'https://www.fiverr.com/olacdy',
    ariaLabel: 'Fiverr profile',
    icon: 'fiverr',
  },
  {
    name: 'UpWork',
    link: 'https://www.upwork.com/freelancers/~01bc2c6d8b19205903',
    ariaLable: 'UpWork profile',
    icon: 'upwork',
  },
  {
    name: 'Email',
    link: 'mailto:oleg.didechkin@gmail.com',
    ariaLabel: 'Send an email',
    icon: 'email',
  },
];

export const projects = [
  {
    title: 'Frontend Mentor Challenges',
    description:
      "A collection of Frontend Mentor tasks I've solved and deployed on GitHub Pages. Utilizing the Next router, I've harmoniously integrated all pages into one cohesive website, dedicating a unique page to each solution. Dive into this exhibit of my technical skills and creative design.",
    tags: '',
    link: 'https://olacdy.github.io/frontend-mentor-challenges/',
    image: '/Full-Stack-Portfolio/Project-1.webp',
  },
  {
    title: 'CheckMate',
    description:
      'Revolutionize data validation with our user-friendly UI. Generate validation endpoints equipped with authorization keys for instant, real-time validation of all your schemas, ensuring error-free data processing.',
    tags: '',
    link: 'https://checkmate-inky.vercel.app/',
    image: '/Full-Stack-Portfolio/Project-2.webp',
  },
  {
    title: 'Bellify',
    description:
      'Telegram bot project – a user-centered hub for tracking preferred YouTube and Twitch channels. Receive instant notifications for new content while benefiting from commerce practices like user agreements, tutorials, and plan upgrades, with payments via Stripe for a seamless experience.',
    tags: '',
    link: 'https://bellify.org/',
    image: '/Full-Stack-Portfolio/Full-Stack-Portfolio/Project-3.webp',
  },
  {
    title: 'Docses',
    description:
      'Energize users by enabling them to effortlessly upload PDF documents, extract concise content summaries, and engage in collaborative discussions through our innovative web application, fostering enhanced information sharing and productivity.',
    tags: '',
    link: 'https://github.com/Olacdy/docses',
    image: '/Full-Stack-Portfolio/Project-4.webp',
  },
];

export const skills = {
  frontend: [
    {
      name: 'HTML',
      icon: 'html',
    },
    {
      name: 'CSS',
      icon: 'css',
    },
    {
      name: 'JS',
      icon: 'js',
    },
    {
      name: 'React',
      icon: 'react',
    },
    {
      name: 'Next',
      icon: 'next',
    },
    {
      name: 'TailwindCSS',
      icon: 'tailwindcss',
    },
  ],
  backend: [
    {
      name: 'Python',
      icon: 'python',
    },
    {
      name: 'Node',
      icon: 'node',
    },
    {
      name: 'Docker',
      icon: 'docker',
    },
  ],
  soft: [
    {
      name: 'Problem solving',
      description: 'creative and effective ways to find innovative solutions',
      icon: 'cogs',
    },
    {
      name: 'Critical Thinking',
      description:
        'The ability to analyze situations, evaluate different options',
      icon: 'chart',
    },
    {
      name: 'Adaptability',
      description:
        'fluent flexibility across full-stack technologies and tasks',
      icon: 'shapes',
    },
  ],
};

export const about = [
  {
    title: 'Data Science',
    content:
      'My expedition as a software developer commenced with the elegant language of Python. This initial foray into the realm of Data Science set the foundation for my evolving voyage.',
    image: {
      src: '/Full-Stack-Portfolio/DS.webp',
      alt: 'Data Science Illustration',
    },
  },
  {
    title: 'Web-development',
    content:
      'Transitioning, I immersed myself in web development, powered by Python. Guided by Django and Flask frameworks, I sculpted web applications, combining functionality and aesthetics seamlessly.',
  },
  {
    title: 'Full-Stack',
    content:
      "Today, I stand at a crossroads, merging experience with vision. Embracing full-stack potential, I've embarked on the Node.js journey. I now craft comprehensive applications, seamlessly blending frontend and backend expertise, using efficient tools and techniques.",
  },
];
