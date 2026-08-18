import SectionHeader from './ui/SectionHeader'
import type { ContactLink } from '@/types'

interface ContactProps {
  links: ContactLink[]
}

export default function Contact({ links }: ContactProps) {
  return (
    <section
      id="contact"
      style={{
        background: '#fce7f3',
        borderTop: '3px solid #fbb6ce',
        padding: 'clamp(40px,6vw,80px) clamp(20px,6vw,80px)',
      }}
    >
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
        <SectionHeader title="let's build something ♡" />

        <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 16, color: '#6b4c54', lineHeight: 1.8, maxWidth: 480, margin: 0 }}>
          I'm always open to new projects, collaborations, hackathons, or just a friendly hello.
          Reach out and let's make something real and useful together.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="pixel-btn"
              style={{
                background: link.isPrimary ? '#ec4899' : '#fff0f5',
                color: link.isPrimary ? '#fff' : '#4a2c2a',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="code-window" style={{ textAlign: 'left', marginTop: 16, maxWidth: 280 }}>
          <div className="code-window-bar" style={{ color: '#f9a8d4' }}>
            <span className="code-dot" />
            <span className="code-dot" />
            <span className="code-dot" />
            <span style={{ color: '#be185d', marginLeft: 8, fontSize: 6 }}>contact.js</span>
          </div>
          <div style={{ color: '#ec4899' }}>{'if (idea) {'}</div>
          <div style={{ color: '#9d6e7e', paddingLeft: 12 }}>reach_out();</div>
          <div style={{ color: '#9d6e7e', paddingLeft: 12 }}>lets_build();</div>
          <div style={{ color: '#ec4899' }}>{'}'}</div>
        </div>
      </div>
    </section>
  )
}
