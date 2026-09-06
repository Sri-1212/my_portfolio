require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');
const Achievement = require('./models/Achievement');
const Activity = require('./models/Activity');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

const projects = [
  {
    title: 'MindSpace - Digital Mental Health Support',
    category: 'Web Development',
    type: 'personal',
    stack: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
    description:
      'Feel supported, one step at a time. A calm, confidential space for students to discover resources, connect with support, and build healthier routines in a welcoming digital environment — refreshed for a smoother experience.',
    images: [],
    liveUrl: 'https://sripals.vercel.app/',
    order: 1,
  },
  {
    title: 'Flappy Bird - Ultimate Arcade Edition',
    category: 'Game Development',
    type: 'personal',
    stack: ['JavaScript', 'HTML', 'CSS', 'Game Development'],
    description:
      'A responsive arcade game with physics-based movement, dynamic animations, procedural audio, and persistent scoring.',
    images: [],
    liveUrl: 'https://flappy-bird-clone-jet.vercel.app/',
    order: 2,
  },
  {
    title: 'Smart Footstep Piezoelectric System',
    category: 'IoT / Hardware',
    type: 'personal',
    stack: ['ESP32', 'React.js'],
    description: 'IoT-based electricity generation system using piezoelectric sensors with a web-based analytics dashboard.',
    images: [],
    githubUrl: 'https://github.com/Sri-1212',
    order: 3,
  },
  {
    title: 'AgroByte — Smart Soil Monitoring System',
    category: 'IoT / Hardware',
    type: 'personal',
    stack: ['Arduino UNO', 'Sensors'],
    description: 'Automated irrigation system using soil-moisture sensors with real-time monitoring.',
    images: [],
    githubUrl: 'https://github.com/Sri-1212',
    order: 4,
  },
  {
    title: 'Telemedicine Application Frontend',
    category: 'Client / Hackathon — SIH, Round 3',
    type: 'hackathon',
    stack: ['React.js', 'Tailwind CSS'],
    description: 'Responsive healthcare interface built for Smart India Hackathon; qualified to Round 3.',
    images: [],
    githubUrl: 'https://github.com/Sri-1212',
    order: 5,
  },
  {
    title: 'College Hackathon Website',
    category: 'Web',
    type: 'personal',
    stack: ['HTML', 'CSS', 'JavaScript'],
    description: 'Fully responsive event site with registrations, schedules, and announcements.',
    images: [],
    githubUrl: 'https://github.com/Sri-1212',
    order: 6,
  },
  {
    title: 'Gesture Controlled Bot',
    category: 'IoT / Hardware — IEEE RAS',
    type: 'personal',
    stack: ['ESP32', 'MPU6050'],
    description: 'Gesture-controlled robotic bot built during IEEE RAS Summer of Projects.',
    images: [],
    githubUrl: 'https://github.com/Sri-1212',
    order: 7,
  },
];

const achievements = [
  {
    title: '3rd Place + ₹10,000 Prize — Sustainathon 2025',
    description: 'Won 3rd place and ₹10,000 cash prize at Sustainathon 2025, VVCE Mysore.',
    order: 1,
  },
  {
    title: 'SIH Round 3 Qualifier',
    description: 'Qualified to Round 3 of Smart India Hackathon with a telemedicine platform.',
    order: 2,
  },
  {
    title: '3rd Place + Internship — HackSphere',
    description: 'Won 3rd place and received an internship offer at HackSphere Hackathon.',
    order: 3,
  },
  {
    title: 'Recognized for Leadership & Public Speaking',
    description: 'Recognized for public speaking, leadership, teamwork & extracurricular involvement.',
    order: 4,
  },
];

const activities = [
  {
    title: 'Team Member, Incubation & Entrepreneurship Cell',
    organization: 'BMSIT&M',
    period: 'May 2026 – Present',
    order: 1,
  },
  {
    title: 'Board of Director, Rotaract Club',
    organization: 'BMSIT&M',
    period: '2025 – 2026',
    order: 2,
  },
  {
    title: 'Marketing Team Member, OSCode',
    organization: 'BMSIT&M',
    period: '2025 – 2026',
    order: 3,
  },
  {
    title: 'Web Development Team Member, Altruino',
    organization: 'BMSIT&M',
    period: '2025 – 2026',
    order: 4,
  },
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Project.deleteMany({});
    await Achievement.deleteMany({});
    await Activity.deleteMany({});
    console.log('Cleared existing data');

    // Insert new data
    await Project.insertMany(projects);
    await Achievement.insertMany(achievements);
    await Activity.insertMany(activities);
    console.log('Seeded database successfully!');
    console.log(`  ${projects.length} projects`);
    console.log(`  ${achievements.length} achievements`);
    console.log(`  ${activities.length} activities`);

    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
}

seed();
