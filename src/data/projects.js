import { asset } from '../lib/asset';

export const projects = [
  {
    slug: "spotify-app",
    title: "Simple Login and Registration System",
    category: "Mobile",
    description: "A simple login and registration system built using Flutter and Firebase.",
    longDescription: "A simple login and registration system built with Flutter and Firebase. Features a dynamic CRUD interface and dark mode support.",
    tech: ["Flutter", "Firebase", "Laravel"],
    image: asset("register.jpg"),
    gallery: [
      asset("register.jpg")
    ],
    liveUrl: "https://flutlab.io/editor/da99b3f9-76fa-486f-8f0a-fc930ac7f892",
    repoUrl: "https://github.com",
    featured: true
  },
  // Hidden project entries
/*
  {
    slug: "university-portal",
    title: "University Student Portal",
    category: "School",
    description: "An academic portal for students to check grades, schedules, and announcements.",
    longDescription: "Developed as a capstone project, this portal integrates various university services into a single, user-friendly platform. Features include course registration, grade tracking, and a campus event calendar.",
    tech: ["Vue.js", "Bootstrap", "Node.js", "MongoDB"],
    image: asset("login.jpg"),
    gallery: [
      asset("login.jpg")
    ],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: true
  },
  {
    slug: "weather-widget",
    title: "Minimal Weather",
    category: "Web",
    description: "A beautiful, minimalist weather application providing real-time forecasts.",
    longDescription: "Uses the OpenWeather API to display current conditions and a 7-day forecast. Features dynamic backgrounds that change based on the weather conditions and time of day.",
    tech: ["Vanilla JS", "CSS3", "OpenWeather API"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000"
    ],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: false
  }*/
];
