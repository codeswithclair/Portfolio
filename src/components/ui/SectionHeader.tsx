import Sparkles from './Sparkles'

interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: subtitle ? 8 : 0 }}>
        <h2 className="section-title">✦ {title}</h2>
        <Sparkles />
      </div>
      {subtitle && (
        <p className="font-pixel" style={{ fontSize: 7, color: '#9d6e7e', lineHeight: 2, margin: 0 }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
