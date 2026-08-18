import type { Project, Experience, AboutCard, ContactLink, Profile } from '@/types'

export const profile: Profile = {
  name: "Clair",
  title: "Systems Engineering Student",
  school: "Instituto Tecnológico de Saltillo",
  bio: "I'm a Systems Engineering student who loves turning ideas into real things — through hackathons, classes, international programs, and projects I build just because. I learn fast, collaborate well, and I genuinely enjoy the craft. ♡",
  cvPath: "/cv.pdf",
  vibes: ["building", "learning", "shipping"],
  personalityTags: [
    "fast learner",
    "hackathon ready",
    "team player",
    "always building",
    "curious",
  ],
  skills: [
    "Python", "React", "Flask", "AWS", "Docker", "MySQL",
    "TensorFlow Lite", "ESP32", "HTML/CSS", "JavaScript",
    "TypeScript", "Git", "Linux", "REST APIs", "Cloud Security",
    "Networking", "Lexical Analysis", "Parser Design",
  ],
}

export const projects: Project[] = [
  {
    id: "unravel",
    name: "Unravel",
    emoji: "🗞️",
    event: "UNESCO Youth Hackathon 2026",
    eventColor: "#fce7f3",
    description:
      "Traces how a news story develops across sources, mapping chronology, confirmations, contradictions, corrections, and reactions into a living timeline.",
    tags: ["Python", "NLP", "React", "News Analysis"],
    accent: "#f9a8d4",
    link: null,
  },
  {
    id: "chronocheck",
    name: "ChronoCheck",
    emoji: "📸",
    event: "Hackathon · ITS Saltillo",
    eventColor: "#fef9c3",
    description:
      "Facial-recognition kiosk for automatic attendance tracking with an admin dashboard monitoring work hours, tardiness, overtime, and absences.",
    tags: ["Face Recognition", "Python", "Dashboard", "MySQL"],
    accent: "#fde68a",
    link: null,
  },
  {
    id: "clea",
    name: "CLEA",
    emoji: "🧠",
    event: "Compilers Class",
    eventColor: "#e0f2fe",
    description:
      "A small programming language built in Python covering lexical analysis, grammar, parser, syntax trees, expression evaluation, and a full test suite.",
    tags: ["Python", "Lexer", "Parser", "AST"],
    accent: "#bae6fd",
    link: null,
  },
  {
    id: "mesaos",
    name: "MesaOS",
    emoji: "☁️",
    event: "Cloud Systems Class",
    eventColor: "#dcfce7",
    description:
      "Internal management system for Noreste Grill, a cloud-based platform built with AWS, Docker, Flask, and MySQL covering authentication, staff operations, and cloud security.",
    tags: ["AWS", "Docker", "Flask", "MySQL", "Security"],
    accent: "#bbf7d0",
    link: null,
  },
]

export const experiences: Experience[] = [
  {
    id: "robotics-china",
    title: "Robotics & AI Program",
    subtitle: "China · Two-week international program",
    emoji: "🤖",
    description:
      "Worked with ESP32 microcontrollers and TensorFlow Lite to build an embedded AI project. Competed against international teams in the final showcase.",
    tags: ["ESP32", "TensorFlow Lite", "Embedded AI"],
    color: "#fce7f3",
  },
  {
    id: "redes-contest",
    title: "2nd Place — Redes Contest",
    subtitle: "School Networking Competition",
    emoji: "🏆",
    description:
      "Earned second place in a technical networking contest, applying knowledge in network configuration, protocols, and troubleshooting under competition pressure.",
    tags: ["Networking", "Protocols", "Competition"],
    color: "#fef9c3",
  },
  {
    id: "personal-website",
    title: "Personal Website",
    subtitle: "Independent Project",
    emoji: "🌸",
    description:
      "Designed and built my own website from scratch, learning frontend development, design systems, and deployment independently.",
    tags: ["HTML", "CSS", "JS", "Design"],
    color: "#e0f2fe",
  },
]

export const aboutCards: AboutCard[] = [
  {
    emoji: "🗣️",
    label: "Bilingual",
    text: "Fluent in Spanish and English. I can connect, present, and collaborate comfortably in both languages.",
  },
  {
    emoji: "✈️",
    label: "World Traveler",
    text: "I've traveled to different countries and had experiences that shaped how I see people, cultures, and problem-solving.",
  },
  {
    emoji: "🤝",
    label: "People Person",
    text: "I genuinely enjoy working with others. I listen, adapt, and make collaboration feel easy and fun.",
  },
  {
    emoji: "🔥",
    label: "Passionate",
    text: "I throw myself into the things I care about. Whether it's a project, a competition, or something new I just discovered.",
  },
  {
    emoji: "🎓",
    label: "My School",
    text: "Instituto Tecnológico de Saltillo. Where I study Systems Engineering and push myself to keep growing every semester.",
  },
  {
    emoji: "💻",
    label: "I Love Projects",
    text: "Nothing beats turning an idea into something real. Hackathons, class projects, personal builds — I am always making something.",
  },
]

export const contactLinks: ContactLink[] = [
  { label: "♡ email me", href: "mailto:clarisseburciaga@gmail.com", isPrimary: true },
  { label: "github ✦", href: "https://github.com/codeswithclair" },
  { label: "linkedin", href: "www.linkedin.com/in/clarisseburciagaa" },
  { label: "devpost", href: "https://devpost.com/codeswithclair" },
]

export const navLinks: string[] = ["about", "projects", "experience", "cv", "contact"]
