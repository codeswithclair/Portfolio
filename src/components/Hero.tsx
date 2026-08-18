import chibiMe from '@/imports/chibi-avatar.jpg'
import CodeWindow from './ui/CodeWindow'
import Sparkles from './ui/Sparkles'
import type { Profile } from '@/types'

interface HeroProps {
  profile: Profile
  onScrollTo: (id: string) => void
}

export default function Hero({ profile, onScrollTo }: HeroProps) {
  return (
    <section
      className="dot-bg"
      style={{
        padding: 'clamp(48px, 8vw, 100px) clamp(20px, 6vw, 80px)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 48,
        alignItems: 'center',
      }}
    >
      {/* Left */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Sparkles />
        </div>

        <h1
          className="font-pixel"
          style={{ fontSize: 'clamp(18px, 3vw, 30px)', color: '#4a2c2a', lineHeight: 1.8, margin: 0 }}
        >
          hi, i'm {profile.name.toLowerCase()} ✦
        </h1>

        <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 17, color: '#6b4c54', lineHeight: 1.8, maxWidth: 460, margin: 0 }}>
          {profile.bio}
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
          <button
            onClick={() => onScrollTo('projects')}
            className="pixel-btn"
            style={{ background: '#ec4899', color: '#fff' }}
          >
            my projects
          </button>
          <button
            onClick={() => onScrollTo('contact')}
            className="pixel-btn"
            style={{ background: '#fff0f5', color: '#4a2c2a' }}
          >
            say hello ♡
          </button>
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 4 }}>
          {profile.vibes.map((v) => (
            <span
              key={v}
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: 6,
                padding: '4px 10px',
                background: '#fff',
                border: '2px solid #fbb6ce',
                color: '#be185d',
              }}
            >
              ✦ {v}
            </span>
          ))}
        </div>
      </div>

      {/* Right */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'relative' }}>
        <div className="float" style={{ alignSelf: 'flex-end', maxWidth: 200 }}>
          <CodeWindow
            title="me.js"
            lines={['<code>', '  coffee();', '  cute();', '  create();', '  repeat();', '</code>']}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              background: 'radial-gradient(circle, #fce7f3 50%, #f9a8d4 100%)',
              border: '3px solid #f9a8d4',
              boxShadow: '6px 6px 0 #ec4899',
              padding: '20px 20px 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', gap: 8, marginBottom: 4 }}>
              <span className="sparkle" style={{ fontSize: 12, color: '#ec4899' }}>✦</span>
              <span className="sparkle-delay" style={{ fontSize: 12, color: '#fbbf24' }}>★</span>
              <span className="sparkle-delay2" style={{ fontSize: 12, color: '#f9a8d4' }}>✦</span>
            </div>
            <img
              src={chibiMe}
              alt="pixel chibi avatar"
              className="float"
              style={{ width: 260, imageRendering: 'pixelated', mixBlendMode: 'multiply', display: 'block' }}
            />
          </div>
        </div>

        <div className="float" style={{ alignSelf: 'flex-start', maxWidth: 210 }}>
          <CodeWindow
            title="passion.js"
            lines={['if (passion) {', '  build();', '  code();', '  inspire();', '}']}
          />
        </div>
      </div>
    </section>
  )
}
