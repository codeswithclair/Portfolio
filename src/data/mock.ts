import type { Project, Experience, AboutCard, ContactLink, Profile } from '@/types'

export const profile: Profile = {
  name: "Persia Clarisse Burciaga Acevedo",
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
    "Python",
    "React",
    "TypeScript",
    "JavaScript",
    "HTML/CSS",
    "Tailwind CSS",
    "Express",
    "Flask",
    "face-api.js",
    "MySQL",
    "Database Design",
    "REST APIs",
    "Git",
    "Docker",
    "Linux",
    "Arduino",
    "Serial Communication",
    "SCADA Systems",
    "ESP32",
    "Java",
    "UI/UX",
    "Figma",
    "Networking",
    "Packet Tracer",
    "Putty"],
}

export const projects: Project[] = [
  {
    id: "stepper-motor-scada",
    name: "Stepper Motor SCADA",
    emoji: "SC",
    event: "Sistemas Programables",
    eventColor: "#f3e8ff",
    description:
      "Real-time SCADA/HMI for monitoring and controlling a stepper motor through Arduino, with live telemetry, multiple drive modes, alarms, and persistent datalogging.",
    tags: ["C#", "Arduino", "Serial", "MySQL", "SCADA"],
    accent: "#d8b4fe",
    link: null,
    subtitle: "Real-Time HMI & Control System",
    metadata: "Team Project · Sistemas Programables · Instituto Tecnologico de Saltillo",
    screenshots: [
      {
        src: "/projects/SCADA/scada-main.png",
        alt: "Stepper Motor SCADA HMI with telemetry gauges, controls, alarm, and datalogger",
        isPrimary: true,
      },
      {
        src: "/projects/SCADA/scada-hardware.png",
        alt: "Arduino Uno and stepper motor connected on a breadboard",
      },
      {
        src: "/projects/SCADA/scada-system.png",
        alt: "Stepper motor SCADA hardware setup connected to the HMI computer",
      },
    ],
    longDescription:
      "This university team project implements a small SCADA system for supervising and controlling a stepper motor. A C# Windows Forms HMI communicates with an Arduino Uno over serial at 9600 baud, displays operating variables in real time, sends motor commands, and records the operating history in MySQL with a local CSV backup.",
    workflow: ["Connect Arduino", "Send motor command", "Read serial telemetry", "Monitor alarms", "Persist datalogger history"],
    technologies: [
      { label: "HMI", value: "C# · Windows Forms · System.Drawing" },
      { label: "Controller", value: "Arduino Uno · stepper motor" },
      { label: "Communication", value: "SerialPort · USB serial · 9600 baud · CSV telemetry" },
      { label: "Motor modes", value: "Single step · double torque · half step · direction toggle · STOP" },
      { label: "Persistence", value: "MySQL datalogger · local CSV backup · DataGridView audit table" },
    ],
    contribution:
      "I led the technical implementation of the project and developed the majority of the system, including the C# HMI, real-time telemetry visualization, serial communication with the Arduino, motor-control integration, and datalogging functionality.",
    sections: [
      {
        title: "HMI and telemetry",
        body: "The desktop HMI renders voltage, RPM, angular position, and alarm state through custom System.Drawing gauges and indicators. It also shows the current mode, direction, connection status, operating shift, and datalogger rows in a DataGridView.",
      },
      {
        title: "Arduino firmware",
        body: "I also worked on the Arduino firmware: command decoding, step sequences, simulated voltage sampling, position and RPM calculations, and CSV telemetry returned over Serial. The firmware supports single-step, double-torque, and half-step sequences, direction changes, and STOP.",
      },
      {
        title: "Datalogging and resilience",
        body: "Every ten seconds, the HMI records the operator, date, time, shift, mode, direction, alarm, position, speed, and voltage. The primary record is inserted into MySQL, with a local CSV file used as a backup when the local database is unavailable.",
      },
    ],
  },
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
    emoji: "🕒",
    event: "Hackatec · ITS Saltillo",
    eventColor: "#dfeee4",
    description:
      "Facial-recognition attendance system built for ROCEEL Servicios Especializados, combining a kiosk workflow with an admin dashboard for check-ins, punctuality, overtime, and attendance reporting.",
    tags: ["React", "face-api.js", "Node.js", "Express", "MySQL"],
    accent: "#7aa68a",
    link: "https://github.com/klesnuck/Hackatec",
    githubUrl: "https://github.com/klesnuck/Hackatec",
    subtitle: "Employee attendance and work-hour tracking",
    metadata: "Hackatec · Instituto Tecnológico de Saltillo",
    screenshots: [
      {
        src: "/projects/chronocheck/chronocheck-login.png",
        alt: "ChronoCheck admin login screen for ROCEEL access",
        isPrimary: true,
        title: "ROCEEL login",
        description: "The admin entry point for ROCEEL, providing secure access to the attendance system and management workflows.",
        caption: "ROCEEL admin access and secure entry to the attendance system",
      },
      {
        src: "/projects/chronocheck/chronocheck-face-detection.png",
        alt: "ChronoCheck kiosk detecting and labeling a face during employee check-in",
        title: "Kiosk face detection",
        description: "The fixed attendance kiosk uses live camera input and face-api.js to detect the user, draw landmarks, and compare the face descriptor against registered employees.",
        caption: "Kiosk face detection and live employee recognition",
      },
      {
        src: "/projects/chronocheck/chronocheck-dashboard.png",
        alt: "ChronoCheck attendance dashboard showing employees in plant, delays, absences, and departmental attendance summary",
        title: "Attendance dashboard",
        description: "The dashboard gives administrators a snapshot of current plant attendance, late arrivals, absences, and per-department activity at a glance.",
        caption: "Operational dashboard with present employees, tardiness, absences, and department totals",
      },
      {
        src: "/projects/chronocheck/chronocheck-attendance-management.png",
        alt: "ChronoCheck attendance management screen with department filters, employee search, and attendance records",
        title: "Attendance management",
        description: "Employees can be filtered by department, searched by name, and reviewed across attendance records and temporal summaries for operational oversight.",
        caption: "Attendance management and history review for departments and employees",
      },
      {
        src: "/projects/chronocheck/chronocheck-face-registration.png",
        alt: "ChronoCheck employee face registration interface with pending and registered statuses",
        title: "Face registration",
        description: "Managers can select an employee, capture a face, and store the descriptor so future kiosk scans can match the correct person reliably.",
        caption: "Biometric enrollment and employee facial descriptor registration",
      },
    ],
    longDescription:
      "ChronoCheck was designed for ROCEEL Servicios Especializados to replace manual attendance tracking with a digital kiosk and dashboard. Employees check in through a fixed workstation, and the admin team reviews attendance data, punctuality, overtime, absences, and incomplete records from a dedicated dashboard. The implemented recognition flow uses face-api.js to detect faces, extract facial landmarks, build descriptor vectors, and compare them against registered employee descriptors stored in MySQL.",
    principle: {
      title: "Facial recognition using face descriptors",
      text:
        "The implemented system does not rely on 3D facial scanning or depth sensing. It uses face-api.js to detect the face, extract landmarks, generate a descriptor, and compare that descriptor against the employee descriptors saved in the database to match the correct employee.",
    },
    workflow: [
      "Employee approaches kiosk",
      "Face is detected",
      "Descriptor is compared",
      "Attendance event is logged",
      "Admin reviews dashboard",
    ],
    technologies: [
      { label: "Frontend", value: "React · Vite · CSS" },
      { label: "Facial recognition", value: "face-api.js · facial landmarks · face descriptors" },
      { label: "Backend", value: "Node.js · Express" },
      { label: "Database", value: "MySQL · REST-style API" },
      { label: "Operational flow", value: "Employee check-in · lunch exit/return · work exit · attendance reports" },
    ],
    contribution:
      "My main contributions were in frontend development and UI/UX design, where I helped build and structure the kiosk and administrative interfaces that make up the core user experience of ChronoCheck. I worked on translating the project requirements into usable screens and workflows for attendance registration, administrative monitoring, and employee management. I also contributed to backend integration for parts of the application, helping connect the frontend with the system’s underlying data and functionality. In addition to the technical work, I participated in preparing the final presentation and pitching the project, communicating both the problem ChronoCheck addressed and the functionality of the proposed solution.",
    sections: [
      {
        title: "The problem",
        body:
          "ROCEEL was tracking attendance with manual processes, which made it difficult to monitor punctuality, lunch transitions, overtime, absences, and incomplete records in real time.",
      },
      {
        title: "What we built",
        body:
          "The project combines a self-service attendance kiosk with an administrative platform for attendance review, work-hour calculations, department summaries, and employee history.",
      },
      {
        title: "Attendance dashboard",
        body:
          "The admin dashboard aggregates current employee presence, delays, absences, and department-level attendance totals, giving managers a quick operational overview for the selected day.",
      },
      {
        title: "Face enrollment",
        body:
          "Administrators can load employee records and register a face descriptor for each employee so the kiosk can compare live detections against known stored vectors.",
      },
      {
        title: "Technical architecture",
        body:
          "The frontend uses React for the kiosk and dashboard UI, while Node.js and Express expose REST-style endpoints for employee and attendance data. MySQL stores employee records, attendance logs, and the serialized facial descriptors used for recognition.",
      },
    ],
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
    name: "NG Manager",
    emoji: "☁️",
    event: "Software Engineering · ITS",
    eventColor: "#fef3c7",
    description:
      "A role-based internal operations platform for Noreste Grill, integrating table management, reservations, waitlists, promotions, staff performance, and user access in one system.",
    tags: ["Python", "MySQL", "JavaScript", "REST", "HTML/CSS"],
    accent: "#fcd34d",
    link: null,
    subtitle: "Internal Operations Management System",
    metadata: "Software Engineering · Team Project · Instituto Tecnologico de Saltillo",
    screenshots: [
      { src: "/projects/ng-manager/ng-manager-login.png", alt: "NG Manager login screen for the Noreste Grill internal operations system.", caption: "Secure entry point for the role-based restaurant operations system.", isPrimary: true },
      { src: "/projects/ng-manager/ng-manager-architecture.png", alt: "NG Manager software architecture diagram connecting users, frontend, backend, and MySQL.", caption: "Software architecture supporting role-based interfaces, Python backend services, and MySQL." },
    ],
    githubUrl: "https://github.com/codeswithclair/sistema-de-gestion-interna-NG_EQUIPO3",
    longDescription: "NG Manager is a role-based internal management platform designed around the operational workflows of Noreste Grill. It brings reservations, tables, waitlists, promotions, staff performance, and access control into one system for the manager, floor manager, hostess, and waiter roles.",
    workflow: ["User", "Role-based interface", "JavaScript / Fetch", "Backend API", "Python controllers", "MySQL", "JSON response", "Dynamic interface update"],
    technologies: [
      { label: "Frontend", value: "HTML · CSS · JavaScript" },
      { label: "Backend", value: "Python · Flask · Gunicorn" },
      { label: "Database", value: "MySQL" },
      { label: "Communication", value: "Fetch · JSON · REST-style API endpoints" },
    ],
    roles: [
      { name: "Manager", capabilities: ["system overview", "users", "reservations", "promotions", "staff performance", "administrative control"] },
      { name: "Floor Manager", capabilities: ["table operations", "reservations", "promotions", "waiter management", "personnel supervision"] },
      { name: "Hostess", capabilities: ["reservations", "waitlist", "table status", "current promotions"] },
      { name: "Waiter", capabilities: ["table status", "active promotions", "personal performance"] },
    ],
    features: [
      { title: "Table Management", body: "Shows table states and operational information such as occupancy, assigned customer, assigned waiter, and service time." },
      { title: "Reservations", body: "Supports registration, consultation, updates, and cancellation or management of reservations." },
      { title: "Live Waitlist", body: "Tracks waiting groups, registration time, elapsed waiting time, and assignment to an available table." },
      { title: "Promotions", body: "Manages active and inactive promotions, validity periods, conditions, and promotion usage." },
      { title: "Staff Performance", body: "Aggregates tables served, service times, promotions applied, ratings, observations, and waiter ranking." },
      { title: "User & Role Management", body: "Manages system users and access according to assigned roles and supported permissions." },
    ],
    contribution: "I led the system design and implemented essentially the entire application codebase. I designed the overall user experience and system structure, built the frontend interfaces, implemented the backend logic and database interactions, connected the modules through API requests, and integrated the different role-based workflows into a functional system.",
    moduleSections: [
      { title: "Table Management", body: "The table module gives the floor team a visual restaurant-floor view of occupancy, assigned customers, assigned waiters, and service or cleaning time. Selecting a table opens its operational controls and lets staff continue the service workflow.", image: { src: "/projects/ng-manager/ng-manager-tables.png", alt: "NG Manager restaurant table map showing table status, assigned customer, waiter, and service time." } },
      { title: "Reservations", body: "The reservations module supports registering, consulting, updating, and managing restaurant reservations. The interface keeps reservation information visible alongside the operational table workflow.", image: { src: "/projects/ng-manager/ng-manager-reservations.png", alt: "NG Manager reservation management screen showing reservation details and upcoming bookings." } },
      { title: "Live Waitlist", body: "A hostess can add a customer group to the waitlist, store the registration time, track elapsed waiting time, and assign the group to an available table when the operation is ready.", image: { src: "/projects/ng-manager/ng-manager-waitlist.png", alt: "NG Manager live waitlist screen showing waiting groups and elapsed waiting times." } },
      { title: "Promotions", body: "The promotions module manages active and inactive offers, validity dates, conditions, and usage. Staff can consult current promotions while management controls their lifecycle and application records.", image: { src: "/projects/ng-manager/ng-manager-promotions.png", alt: "NG Manager promotions management screen showing active and inactive restaurant promotions." } },
      { title: "Staff Performance", body: "Performance screens aggregate operational data into KPIs and rankings for waiters, including tables served, service times, promotions applied, ratings, delays, and observations. The frontend renders the results returned by the backend dynamically.", image: { src: "/projects/ng-manager/ng-manager-performance.png", alt: "NG Manager staff performance dashboard showing waiter metrics, evaluations, and ranking." } },
      { title: "User & Role Management", body: "User management centralizes system accounts and role-based access for the Manager, Floor Manager, Hostess, and Waiter views, keeping each workflow aligned with the responsibilities documented for that role.", image: { src: "/projects/ng-manager/ng-manager-users.png", alt: "NG Manager user management screen showing role-based access administration." } },
    ],
    sections: [
      { title: "From scattered processes to one operational system", body: "Noreste Grill used manual records, spreadsheets, physical notes, and informal communication for several internal processes. NG Manager was designed to centralize reservations, table status, waitlists, promotions, personnel, and operational communication in one digital system." },
      { title: "Designed around real operations", body: "The requirements were informed by direct observation and interviews related to Noreste Grill's workflows, including reservations, tables, waitlists, promotions, personnel, and day-to-day operational communication." },
      { title: "What the system does", body: "The application provides role-specific views for the Manager, Floor Manager, Hostess, and Waiter, with dedicated modules for authentication, dashboards, table status, reservations, live waitlist, promotions, staff management, performance, and user access." },
      { title: "Live waitlist example", body: "A hostess can add a customer group to the waitlist. The backend stores the entry and registration time, the frontend maintains the elapsed waiting-time display, and an available table can be assigned to continue the workflow into table management." },
      { title: "Staff performance example", body: "The system aggregates operational data into waiter metrics and rankings, including tables served, average service time, promotions applied, rating, delays, and observations. JavaScript dynamically renders the JSON returned by the backend." },
      { title: "Engineering the system", body: "The project followed an iterative software-engineering process: requirements gathering, use cases, system architecture, database modeling, interface design, implementation, and testing." },
      { title: "Under the hood", body: "JavaScript sends asynchronous Fetch requests to REST-style backend endpoints. Python and Flask controllers process those requests and interact with MySQL, then return JSON responses that update the interface dynamically. Gunicorn serves the backend application." },
    ],
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
    text: "Nothing beats turning an idea into something real. Hackathons, class projects, personal builds, I am always making something.",
  },
]

export const contactLinks: ContactLink[] = [
  { label: "♡ email me", href: "mailto:clarisseburciaga@gmail.com", isPrimary: true },
  { label: "github ✦", href: "https://github.com/codeswithclair" },
  { label: "linkedin", href: "www.linkedin.com/in/clarisseburciagaa" },
  { label: "devpost", href: "https://devpost.com/codeswithclair" },
]

export const navLinks: string[] = ["about", "projects", "experience", "cv", "contact"]
