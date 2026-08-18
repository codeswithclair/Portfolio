import SectionHeader from './ui/SectionHeader'
import type { AboutCard, Profile } from '@/types'

interface AboutProps {
  cards: AboutCard[]
  profile: Pick<Profile, 'personalityTags'>
}

export default function About({ cards, profile }: AboutProps) {
  return (
    <section
      id="about"
      style={{
        background: '#fce7f3',
        borderTop: '3px solid #fbb6ce',
        borderBottom: '3px solid #fbb6ce',
        padding: 'clamp(40px,6vw,80px) clamp(20px,6vw,80px)',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <SectionHeader title="about me" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {cards.map((card) => (
            <div
              key={card.label}
              style={{
                background: '#fff',
                border: '3px solid #f9a8d4',
                boxShadow: '3px 3px 0 #f472b6',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 24 }}>{card.emoji}</span>
                <span className="font-pixel" style={{ fontSize: 8, color: '#ec4899' }}>{card.label}</span>
              </div>
              <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 14, color: '#6b4c54', lineHeight: 1.7, margin: 0 }}>
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
          {profile.personalityTags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: 7,
                padding: '8px 14px',
                background: '#fff',
                border: '2px solid #f9a8d4',
                boxShadow: '3px 3px 0 #f472b6',
                color: '#be185d',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
