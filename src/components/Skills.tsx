import SectionHeader from './ui/SectionHeader'
import PixelTag from './ui/PixelTag'

interface SkillsProps {
  skills: string[]
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section style={{ padding: 'clamp(32px,5vw,60px) clamp(20px,6vw,80px)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <SectionHeader title="skills" />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {skills.map((skill) => (
            <PixelTag key={skill} label={skill} variant="skill" />
          ))}
        </div>
      </div>
    </section>
  )
}
