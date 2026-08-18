import SectionHeader from './ui/SectionHeader'
import PixelTag from './ui/PixelTag'
import type { Experience as ExperienceType } from '@/types'

interface ExperienceProps {
  experiences: ExperienceType[]
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section
      id="experience"
      style={{
        background: '#fce7f3',
        borderTop: '3px solid #fbb6ce',
        borderBottom: '3px solid #fbb6ce',
        padding: 'clamp(40px,6vw,80px) clamp(20px,6vw,80px)',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <SectionHeader title="experience" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {experiences.map((exp) => (
            <div
              key={exp.id}
              style={{
                background: '#fff',
                border: '3px solid #f9a8d4',
                boxShadow: '4px 4px 0 #f9a8d4',
                padding: '22px',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: 16,
                alignItems: 'start',
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  background: exp.color,
                  border: '3px solid #f9a8d4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 26,
                  flexShrink: 0,
                }}
              >
                {exp.emoji}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div>
                  <div className="font-pixel" style={{ fontSize: 8, color: '#4a2c2a', lineHeight: 1.8 }}>
                    {exp.title}
                  </div>
                  <div className="font-pixel" style={{ fontSize: 6, color: '#be185d', lineHeight: 2 }}>
                    {exp.subtitle}
                  </div>
                </div>
                <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 14, color: '#6b4c54', lineHeight: 1.7, margin: 0 }}>
                  {exp.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {exp.tags.map((tag) => (
                    <PixelTag key={tag} label={tag} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
