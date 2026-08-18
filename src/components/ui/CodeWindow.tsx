interface CodeWindowProps {
  title: string
  lines: string[]
}

export default function CodeWindow({ title, lines }: CodeWindowProps) {
  return (
    <div className="code-window">
      <div className="code-window-bar" style={{ color: '#f9a8d4' }}>
        <span className="code-dot" />
        <span className="code-dot" />
        <span className="code-dot" />
        <span style={{ color: '#be185d', marginLeft: 8, fontSize: 6 }}>{title}</span>
      </div>
      {lines.map((line, i) => (
        <div key={i} style={{ color: i === 0 ? '#ec4899' : '#9d6e7e' }}>{line}</div>
      ))}
    </div>
  )
}
