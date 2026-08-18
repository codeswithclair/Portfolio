import { useState } from 'react'
import SectionHeader from './ui/SectionHeader'
import ProjectCard from './ProjectCard'
import ProjectDetail from './ProjectDetail'
import type { Project } from '@/types'

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" style={{ padding: 'clamp(40px,6vw,80px) clamp(20px,6vw,80px)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <SectionHeader title="projects" subtitle="things i've built ♡" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
          ))}
        </div>
      </div>

      {selectedProject && <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}
