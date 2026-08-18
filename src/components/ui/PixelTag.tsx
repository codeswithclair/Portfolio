interface PixelTagProps {
  label: string
  variant?: 'default' | 'skill' | 'vibe'
}

const styles = {
  default: {
    background: '#fce7f3',
    border: '2px solid #f9a8d4',
    color: '#be185d',
  },
  skill: {
    background: '#fff0f5',
    border: '2px solid #f9a8d4',
    boxShadow: '2px 2px 0 #f472b6',
    color: '#be185d',
    fontSize: 8,
    padding: '8px 12px',
  },
  vibe: {
    background: '#fff',
    border: '2px solid #fbb6ce',
    color: '#be185d',
  },
}

export default function PixelTag({ label, variant = 'default' }: PixelTagProps) {
  return (
    <span
      style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: 6,
        padding: '4px 8px',
        display: 'inline-block',
        ...styles[variant],
      }}
    >
      {label}
    </span>
  )
}
