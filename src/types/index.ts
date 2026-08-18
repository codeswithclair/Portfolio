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
