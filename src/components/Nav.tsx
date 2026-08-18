import { useState, useEffect } from 'react'
import { navLinks } from '@/data/mock'

interface NavProps {
  onScrollTo: (id: string) => void
}

export default function Nav({ onScrollTo }: NavProps) {
  const [active, setActive] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    navLinks.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleClick = (id: string) => {
    onScrollTo(id)
    setActive(id)
    setMenuOpen(false)
  }

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(255,245,248,0.92)',
        backdropFilter: 'blur(8px)',
        borderBottom: '3px solid #fbb6ce',
        padding: '14px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
      }}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="font-pixel"
        style={{ fontSize: 8, color: '#ec4899', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '0.05em' }}
      >
        ♡ clair.dev ♡
      </button>

      {/* Desktop links */}
      <div className="hidden sm:flex" style={{ gap: 16, display: 'flex', flexWrap: 'wrap' }}>
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => handleClick(link)}
            className="nav-link"
            style={{ background: 'none', border: 'none', color: active === link ? '#ec4899' : '#9d6e7e' }}
          >
            {link}
          </button>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="sm:hidden"
        onClick={() => setMenuOpen((v) => !v)}
        style={{
          background: 'none',
          border: '2px solid #f9a8d4',
          padding: '6px 10px',
          cursor: 'pointer',
          fontFamily: "'Press Start 2P', monospace",
          fontSize: 8,
          color: '#ec4899',
          display: 'none',
        }}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(255,245,248,0.98)',
            borderBottom: '3px solid #fbb6ce',
            padding: '16px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleClick(link)}
              className="nav-link"
              style={{ background: 'none', border: 'none', color: active === link ? '#ec4899' : '#9d6e7e', textAlign: 'left' }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
