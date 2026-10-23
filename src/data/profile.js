import { asset } from '../lib/asset';

export const profile = {
  name: "Josepito Quizada",
  role: "Frontend Developer",
  availability: "Open to OJT opportunities",
  tagline: "Building beautiful, responsive, and accessible web experiences.",
  bio: "I'm a passionate frontend developer with a keen eye for design and user experience. Currently pursuing my degree and completing my OJT, I love transforming complex problems into simple, beautiful, and intuitive interfaces. When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.",
  objective: "Motivated and hardworking Computer Science student seeking an On-the-Job Training (OJT) opportunity to improve my programming, web development, and database management skills while gaining practical experience in the IT industry.",
  hobbies: [
    "Photography and capturing moments",
    "Playing competitive mobile games",
    "Exploring new coffee shops around the city",
    "Playing ball games outside",
    "Playing chess with friends",
  ],
  email: "quizadajosepito@gmail.com",
  phone: "+639380948482",
  location: "San Miguel, Surigao del Sur",
  // Replace these with your own profile links; bare domains are hidden.
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/"
  },
  resumeUrl: asset("resume.pdf"),
  avatar: asset("myprofile.png"),
  aboutImage: asset("2ndprofile.jpg")
};
