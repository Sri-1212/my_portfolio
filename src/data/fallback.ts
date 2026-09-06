export interface Project {
  _id: string;
  title: string;
  category: string;
  type: 'client' | 'personal' | 'hackathon';
  stack: string[];
  description: string;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  order: number;
}

export interface Achievement {
  _id: string;
  title: string;
  description: string;
  order: number;
}

export interface Activity {
  _id: string;
  title: string;
  organization: string;
  period: string;
  order: number;
}

export const fallbackProjects: Project[] = [
  {
    _id: '1',
    title: 'MindSpace - Digital Mental Health Support',
    category: 'Web Development',
    type: 'personal',
    stack: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
    description:
      'Feel supported, one step at a time. A calm, confidential space for students to discover resources, connect with support, and build healthier routines in a welcoming digital environment — refreshed for a smoother experience.',
    images: [],
    liveUrl: 'https://sripals.vercel.app/',
    githubUrl: 'https://github.com/Sri-1212/SRIPALS.git',
    order: 1,
  },
  {
    _id: '2',
    title: 'Flappy Bird - Ultimate Arcade Edition',
    category: 'Game Development',
    type: 'personal',
    stack: ['JavaScript', 'HTML', 'CSS', 'Game Development'],
    description:
      'A responsive arcade game with physics-based movement, dynamic animations, procedural audio, and persistent scoring.',
    images: [],
    liveUrl: 'https://flappy-bird-clone-jet.vercel.app/',
    githubUrl: 'https://github.com/Sri-1212/flappy-bird-clone.git',
    order: 2,
  },
  {
    _id: '3',
    title: 'AgroBytes — AI AgriTech Platform',
    category: 'AgriTech / AI Web App',
    type: 'personal',
    stack: ['React.js', 'AI Diagnosis', 'Tailwind CSS', 'AgriTech'],
    description:
      'An AI-powered agricultural tech and gamified learning web platform featuring AI Plant Disease Diagnosis (Crop Doctor), Smart Advisory AI Assistant, Crop Market trends, and interactive gamified learning challenges.',
    images: [],
    liveUrl: 'https://agrobytes-app.vercel.app/',
    githubUrl: 'https://github.com/Sri-1212/agrobytes-app.git',
    order: 3,
  },
  {
    _id: '4',
    title: 'HH//GOA 2026 — Builder Identity System',
    category: 'Web App / Frame Generator',
    type: 'personal',
    stack: ['React.js', 'Canvas API', 'TypeScript', 'Tailwind CSS'],
    description:
      'A custom builder identity and digital badge frame generator built for HH//GOA 2026 hackers and developers to create personalized identities and badges.',
    images: [],
    liveUrl: 'https://hh-goa-builder-identity.vercel.app/',
    githubUrl: 'https://github.com/Sri-1212/hh-goa-builder-identity',
    order: 4,
  },
  {
    _id: '5',
    title: 'Smart Footstep Piezoelectric System',
    category: 'IoT / Hardware',
    type: 'personal',
    stack: ['ESP32', 'React.js'],
    description:
      'IoT-based electricity generation system using piezoelectric sensors with a web-based analytics dashboard.',
    images: [],
    githubUrl: 'https://github.com/Sri-1212/electricity-generator-.git',
    order: 5,
  },
  {
    _id: '6',
    title: 'AgroByte — Smart Soil Monitoring System',
    category: 'IoT / Hardware',
    type: 'personal',
    stack: ['Arduino UNO', 'Sensors'],
    description:
      'Automated irrigation system using soil-moisture sensors with real-time monitoring.',
    images: [],
    githubUrl: 'https://github.com/Sri-1212/AgroBytes.git',
    order: 6,
  },
  {
    _id: '7',
    title: 'Gesture Controlled Bot',
    category: 'IoT / Hardware — IEEE RAS',
    type: 'personal',
    stack: ['ESP32', 'MPU6050'],
    description: 'Gesture-controlled robotic bot built during IEEE RAS Summer of Projects.',
    images: [],
    order: 7,
  },
];

export const fallbackAchievements: Achievement[] = [
  {
    _id: '1',
    title: '3rd Place + ₹10,000 Prize — Sustainathon 2025',
    description: 'Won 3rd place and ₹10,000 cash prize at Sustainathon 2025, VVCE Mysore.',
    order: 1,
  },
  {
    _id: '2',
    title: 'SIH Round 3 Qualifier',
    description:
      'Qualified to Round 3 of Smart India Hackathon with a telemedicine platform.',
    order: 2,
  },
  {
    _id: '3',
    title: '3rd Place + Internship — HackSphere',
    description: 'Won 3rd place and received an internship offer at HackSphere Hackathon.',
    order: 3,
  },
  {
    _id: '4',
    title: 'Recognized for Leadership & Public Speaking',
    description:
      'Recognized for public speaking, leadership, teamwork & extracurricular involvement.',
    order: 4,
  },
];

export const fallbackActivities: Activity[] = [
  {
    _id: '1',
    title: 'Team Member, Incubation & Entrepreneurship Cell',
    organization: 'BMSIT&M',
    period: 'May 2026 – Present',
    order: 1,
  },
  {
    _id: '2',
    title: 'Board of Director, Rotaract Club',
    organization: 'BMSIT&M',
    period: '2025 – 2026',
    order: 2,
  },
  {
    _id: '3',
    title: 'Marketing Team Member, OSCode',
    organization: 'BMSIT&M',
    period: '2025 – 2026',
    order: 3,
  },
  {
    _id: '4',
    title: 'Web Development Team Member, Altruino',
    organization: 'BMSIT&M',
    period: '2025 – 2026',
    order: 4,
  },
];
