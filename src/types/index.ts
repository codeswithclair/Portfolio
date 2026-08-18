export interface Project {
  id: string
  name: string
  emoji: string
  event: string
  eventColor: string
  description: string
  tags: string[]
  accent: string
  link: string | null
  subtitle?: string
  metadata?: string
  screenshots?: {
    src: string
    alt: string
    isPrimary?: boolean
  }[]
  githubUrl?: string
  liveUrl?: string
  videoUrl?: string
  longDescription?: string
  principle?: {
    title: string
    text: string
  }
  workflow?: string[]
  relationships?: string[]
  technologies?: {
    label: string
    value: string
  }[]
  contribution?: string
  sections?: {
    title: string
    body: string
  }[]
}

export interface Experience {
  id: string
  title: string
  subtitle: string
  emoji: string
  description: string
  tags: string[]
  color: string
}

export interface AboutCard {
  emoji: string
  label: string
  text: string
}

export interface ContactLink {
  label: string
  href: string
  isPrimary?: boolean
}

export interface Profile {
  name: string
  title: string
  school: string
  bio: string
  cvPath: string
  vibes: string[]
  personalityTags: string[]
  skills: string[]
}
