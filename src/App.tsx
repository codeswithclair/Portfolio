import { profile, projects, experiences, aboutCards, contactLinks } from '@/data/mock'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import CV from '@/components/CV'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function App() {
  return (
    <div style={{ background: '#fff5f8', minHeight: '100vh' }}>
      <Nav onScrollTo={scrollTo} />
      <Hero profile={profile} onScrollTo={scrollTo} />
      <About cards={aboutCards} profile={profile} />
      <Projects projects={projects} />
      <Experience experiences={experiences} />
      <Skills skills={profile.skills} />
      <CV profile={profile} />
      <Contact links={contactLinks} />
      <Footer school={profile.school} />
    </div>
  )
}
