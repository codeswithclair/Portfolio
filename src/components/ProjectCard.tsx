import { useState } from 'react'
import PixelTag from './ui/PixelTag'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      aria-label={`View project details for ${project.name}`}
      style={{
        background: '#fff',
        border: '3px solid #f9a8d4',
        boxShadow: hovered ? '7px 7px 0 #ec4899' : '4px 4px 0 #f9a8d4',
        transform: hovered ? 'translateY(-4px)' : 'none',
        transition: 'transform 0.15s, box-shadow 0.15s',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        cursor: 'pointer',
        font: 'inherit',
        textAlign: 'left',
        width: '100%',
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

      <span
        className="font-pixel"
        style={{
          color: hovered ? '#ec4899' : '#be185d',
          fontSize: hovered ? 8 : 7,
          marginTop: 4,
          transition: 'color 0.15s, font-size 0.15s',
        }}
      >
        view project →
      </span>
    </button>
  )
}
