interface FooterProps {
  school: string
}

export default function Footer({ school }: FooterProps) {
  return (
    <footer
      style={{
        background: '#4a2c2a',
        padding: '20px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 10,
      }}
    >
      <span className="font-pixel" style={{ fontSize: 6, color: '#f9a8d4' }}>♡ {school}</span>
      <span className="font-pixel" style={{ fontSize: 6, color: '#9d6e7e' }}>
        built with ✦ coffee
      </span>
    </footer>
  )
}
