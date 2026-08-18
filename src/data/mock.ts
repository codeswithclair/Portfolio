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
      "A media-literacy tool that visually traces how a news story originates, spreads, changes, and is corrected across different sources.",
    tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Cytoscape.js"],
    accent: "#f9a8d4",
    link: "https://github.com/Alejovar/Unravel",
    subtitle: "News Traceability Graph",
    metadata: "Team Project · UNESCO Youth Hackathon 2026 · Media & Information Literacy",
    screenshots: [
      {
        src: "/projects/unravel/unravel-graph.png",
        alt: "Unravel News Traceability Graph interface",
        isPrimary: true,
      },
      {
        src: "/projects/unravel/unravel-home.png",
        alt: "Unravel story input homepage",
      },
    ],
    githubUrl: "https://github.com/Alejovar/Unravel",
    videoUrl: "https://www.youtube.com/watch?v=OydeJMlV9V0",
    longDescription:
      "Unravel helps users understand the story behind a headline. A user can enter a URL, headline, or short description, and the system finds related coverage and organizes it into a News Traceability Graph showing chronology and relationships between sources.",
    principle: {
      title: "Not a truth detector.",
      text:
        "Unravel does not automatically decide what users should believe. It exposes sources, chronology, changes, and relationships so users can investigate the story with more context.",
    },
    workflow: ["Paste a story", "Find sources", "Compare coverage", "Order by time", "Identify relationships", "Explore graph"],
    relationships: ["confirmation", "update", "contradiction", "correction", "reaction", "republication"],
    technologies: [
      { label: "Frontend", value: "Next.js 14 · React · TypeScript · Tailwind CSS" },
      { label: "Graph", value: "Cytoscape.js" },
      { label: "Backend", value: "Python · FastAPI" },
      { label: "Data / processing", value: "PostgreSQL · Redis · RQ" },
      { label: "Source discovery / extraction", value: "GDELT · RSS · httpx · Trafilatura · BeautifulSoup" },
      { label: "Analysis", value: "TF-IDF · BM25 · spaCy" },
    ],
    contribution:
      "I contributed to the frontend development and interface design of Unravel, helping shape the user experience around story input and the News Traceability Graph. I also worked on the project documentation and presentation materials, and helped produce the final project video, including narrating the presentation.",
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
    event: "Lenguajes y Automatas I",
    eventColor: "#e0f2fe",
    description:
      "A mini programming language and analyzer that turns formal grammar concepts into a working lexical and syntax-checking tool.",
    tags: ["Python", "Lexer", "Parser", "CFG"],
    accent: "#bae6fd",
    link: null,
    subtitle: "Lexical & Syntax Analyzer",
    metadata: "Team Project · Lenguajes y Automatas I · 2026",
    screenshots: [
      { src: "/projects/clea/clea-main.png", alt: "CLEA lexical and syntax analyzer interface with syntax-support table", isPrimary: true },
      { src: "/projects/clea/clea-valid-analysis.png", alt: "CLEA valid declaration analysis showing give x int = 5" },
      { src: "/projects/clea/clea-tokens.png", alt: "CLEA generated tokens for a valid declaration" },
      { src: "/projects/clea/clea-symbol-table.png", alt: "CLEA symbol table showing x as an int" },
      { src: "/projects/clea/clea-productions.png", alt: "CLEA applied grammar productions" },
      { src: "/projects/clea/clea-error.png", alt: "CLEA syntax error for an invalid declaration" },
      { src: "/projects/clea/clea-parse-tree.png", alt: "CLEA declaration parse tree" },
      { src: "/projects/clea/clea-syntax-table.png", alt: "CLEA syntax-support table mapping input tokens to productions" },
    ],
    longDescription:
      "CLEA is a simple but functional pseudolanguage created from scratch for Lenguajes y Automatas I. Its name combines the names of its creators, Clarisse and Galilea. The project applies formal language theory to a working analyzer that decides whether a CLEA instruction follows the language grammar and reports the syntax problem when it does not.",
    workflow: ["Write a CLEA instruction", "Generate tokens", "Apply grammar rules", "Build the syntax tree", "Report the result"],
    technologies: [
      { label: "Language", value: "CLEA pseudolanguage" },
      { label: "Grammar", value: "Context-free grammar · G = (V, Sigma, R, S)" },
      { label: "Analysis", value: "Lexical analysis · recursive-descent parser" },
      { label: "Language constructs", value: "Declarations · assignments · expressions · conditionals · print · while · do-while · for" },
      { label: "Analyzer output", value: "Tokens · syntax result · symbol table · errors · applied productions · syntax-support table" },
    ],
    sections: [
      { title: "Formal grammar", body: "CLEA defines its valid structure with a context-free grammar G = (V, Sigma, R, S). The grammar uses non-terminals such as program, statement, declaration, assignment, conditional, print, expression, and condition, with program as the start symbol." },
      { title: "Reserved words and constructs", body: "The documented terminals include give, check, otherwise, say, repeat, do, until, count, int, float, text, add, sub, mul, and div. The language supports variable declarations, assignments, arithmetic expressions, comparisons, conditionals, printing, while loops, do-while loops, and for loops." },
      { title: "Lexical and syntax analysis", body: "The analyzer first divides source text into tokens such as GIVE, IDENTIFIER, INT, IGUAL, NUMERO, and PUNTO_COMA. A recursive-descent parser then validates the token sequence against the formal grammar and records the productions applied during the parse." },
      { title: "Valid and invalid programs", body: "A declaration such as give x int = 5; is accepted and produces tokens, a symbol table entry, and applied productions. Invalid examples include a missing assignment operator, missing type, missing semicolon, malformed parentheses, an incomplete add expression, or an unsupported type such as numero." },
      { title: "Syntax trees and export", body: "The project documents parse trees for declarations, assignments, arithmetic expressions, print instructions, conditionals, and loops. The interface also exports the analyzed input, generated tokens, syntax result, symbol table, errors, and applied productions to a text file." },
    ],
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
