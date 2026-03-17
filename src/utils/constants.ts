// Constants and configuration
export const SKILLS = [
  {
    category: 'Frontend',
    items: [
      { name: 'Html', level: 95 },
      { name: 'CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 90 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'GSAP', level: 85 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 85 },
      { name: 'Python', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 80 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git & GitHub', level: 92 },
      { name: 'Vercel', level: 95 },
      { name: 'Render', level: 80 },
      { name: 'VS Code', level: 95 },
      { name: 'Canva', level: 75 },
      { name: 'Firebase', level: 80 },
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'CHAT-AI',
    description: 'A full-stack AI chat application built with the MERN stack and powered by Google Gemini AI. It delivers fast, context-aware conversations with a clean, modern UI and a scalable backend architecture.',
    image: '/chatai.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Gemini API'],
    link: 'https://chatai-purab.vercel.app/',
    github: 'https://github.com/Purabnigam123/chatai',
  },
  {
    id: 2,
    title: 'Turosafe',
    description: 'Turosafe is a security-first web application designed for safe and seamless digital experiences. Built with a clean, modern interface and strong focus on usability and trust. Engineered for performance, reliability, and real-world scalability.',
    image: '/turosafe-v2.png',
    tags: ['React', 'mongodb', 'Tailwind CSS','Fast API'],
    link: 'https://turosafe-purab.vercel.app/',
    github: 'https://github.com/Purabnigam123/smart-tourist-safety',
  },
  
];

export const SOCIAL_LINKS = [
  {
    icon: 'github',
    label: 'GitHub',
    url: 'https://github.com/Purabnigam123',
  },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/purab-nigam-48a31326b/',
  },
  {
    icon: 'twitter',
    label: 'Twitter',
    url: 'https://x.com/Purab421620',
  },
  {
    icon: 'mail',
    label: 'Email',
    url: 'purabnigam2005@gmail.com',
  },
];

export const NAVIGATION = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];
