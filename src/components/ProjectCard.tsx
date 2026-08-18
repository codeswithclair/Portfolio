import { useState } from 'react'
import PixelTag from './ui/PixelTag'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        border: '3px solid #f9a8d4',
        boxShadow: hovered ? '6px 6px 0 #ec4899' : '4px 4px 0 #f9a8d4',
        transform: hovered ? 'translate(-2px,-2px)' : 'none',
        transition: 'all 0.15s',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        cursor: project.link ? 'pointer' : 'default',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 28 }}>{project.emoji}</span>
        <div>
          <div className="font-pixel" style={{ fontSize: 10, color: '#4a2c2a', lineHeight: 1.8 }}>
            {project.name}
          </div>
          <span
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 6,
              padding: '3px 8px',
              background: project.eventColor,
              border: '2px solid #f9a8d4',
              color: '#9d6e7e',
              display: 'inline-block',
            }}
          >
            {project.event}
          </span>
        </div>
      </div>

      <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 14, color: '#6b4c54', lineHeight: 1.7, margin: 0, flexGrow: 1 }}>
        {project.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {project.tags.map((tag) => (
          <PixelTag key={tag} label={tag} />
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="pixel-btn"
          style={{ background: '#ec4899', color: '#fff', textDecoration: 'none', marginTop: 4, alignSelf: 'flex-start' }}
        >
          view ✦
        </a>
      )}
    </div>
  )
}
