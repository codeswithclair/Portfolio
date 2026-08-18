import SectionHeader from './ui/SectionHeader'
import type { Profile } from '@/types'

interface CVProps {
  profile: Pick<Profile, 'name' | 'title' | 'school' | 'cvPath'>
}

export default function CV({ profile }: CVProps) {
  return (
    <section id="cv" style={{ padding: 'clamp(40px,6vw,80px) clamp(20px,6vw,80px)' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, textAlign: 'center' }}>
        <SectionHeader title="my cv" />

        <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, color: '#6b4c54', lineHeight: 1.8, maxWidth: 460, margin: 0 }}>
          Want the full picture? Download my CV to see everything in one place.
        </p>

        <div
          style={{
            background: '#fff',
            border: '3px solid #f9a8d4',
            boxShadow: '6px 6px 0 #ec4899',
            padding: '32px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
            width: '100%',
            maxWidth: 420,
          }}
        >
          <div style={{ fontSize: 48 }}>📄</div>
          <div>
            <div className="font-pixel" style={{ fontSize: 9, color: '#4a2c2a', lineHeight: 1.8 }}>{profile.name}</div>
            <div className="font-pixel" style={{ fontSize: 7, color: '#9d6e7e', lineHeight: 2 }}>{profile.title}</div>
            <div className="font-pixel" style={{ fontSize: 6, color: '#be185d', lineHeight: 2 }}>{profile.school}</div>
          </div>
          <a
            href={profile.cvPath}
            download
            className="pixel-btn"
            style={{ background: '#ec4899', color: '#fff', textDecoration: 'none' }}
          >
            ♡ download cv
          </a>
          <span className="font-pixel" style={{ fontSize: 6, color: '#9d6e7e' }}>PDF format</span>
        </div>
      </div>
    </section>
  )
}
