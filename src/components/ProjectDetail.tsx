import { useEffect, useRef } from 'react'
import PixelTag from './ui/PixelTag'
import type { Project } from '@/types'

interface ProjectDetailProps {
  project: Project
  onClose: () => void
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const primaryScreenshot = project.screenshots?.find((screenshot) => screenshot.isPrimary) ?? project.screenshots?.[0]
  const supportingScreenshots = project.screenshots?.filter((screenshot) => screenshot !== primaryScreenshot) ?? []

  useEffect(() => {
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
      onMouseDown={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        background: 'rgba(74, 44, 42, 0.45)',
        padding: 'clamp(16px, 4vw, 36px)',
        overflowY: 'auto',
      }}
    >
      <div
        onMouseDown={(event) => event.stopPropagation()}
        style={{
          background: '#fff5f8',
          border: '3px solid #4a2c2a',
          boxShadow: '8px 8px 0 #ec4899',
          color: '#4a2c2a',
          margin: '0 auto',
          maxWidth: 980,
          width: '100%',
        }}
      >
        <div
          style={{
            alignItems: 'flex-start',
            borderBottom: '3px solid #f9a8d4',
            display: 'flex',
            gap: 16,
            justifyContent: 'space-between',
            padding: '20px clamp(16px, 4vw, 28px)',
          }}
        >
          <div style={{ minWidth: 0 }}>
            <div className="font-pixel" style={{ color: '#be185d', fontSize: 7, lineHeight: 1.8 }}>
              {project.metadata ?? project.event}
            </div>
            <h2 id="project-detail-title" className="font-pixel" style={{ fontSize: 'clamp(15px, 3vw, 24px)', lineHeight: 1.7, margin: '6px 0 0' }}>
              {project.name}
            </h2>
            {project.subtitle && (
              <p className="font-pixel" style={{ color: '#9d6e7e', fontSize: 8, lineHeight: 1.8, margin: '4px 0 0' }}>
                {project.subtitle}
              </p>
            )}
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="pixel-btn"
            style={{ background: '#fff', color: '#4a2c2a', flex: '0 0 auto', padding: '8px 10px' }}
          >
            x
          </button>
        </div>

        <div style={{ display: 'grid', gap: 24, padding: 'clamp(16px, 4vw, 28px)' }}>
          {primaryScreenshot && (
            <figure style={{ margin: 0 }}>
              <img
                src={primaryScreenshot.src}
                alt={primaryScreenshot.alt}
                style={{
                  background: '#fff',
                  border: '3px solid #f9a8d4',
                  boxShadow: '5px 5px 0 #f472b6',
                  display: 'block',
                  height: 'auto',
                  maxHeight: 520,
                  objectFit: 'contain',
                  width: '100%',
                }}
              />
              {primaryScreenshot.caption && (
                <figcaption style={{ color: '#9d6e7e', fontFamily: 'Nunito, sans-serif', fontSize: 13, lineHeight: 1.6, marginTop: 8 }}>
                  {primaryScreenshot.caption}
                </figcaption>
              )}
            </figure>
          )}

          <p style={{ color: '#6b4c54', fontFamily: 'Nunito, sans-serif', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
            {project.longDescription ?? project.description}
          </p>

          {project.principle && (
            <section style={{ background: '#fff', border: '3px solid #f9a8d4', boxShadow: '4px 4px 0 #f472b6', padding: 18 }}>
              <h3 className="font-pixel" style={{ color: '#be185d', fontSize: 10, lineHeight: 1.8, margin: '0 0 8px' }}>
                {project.principle.title}
              </h3>
              <p style={{ color: '#6b4c54', fontFamily: 'Nunito, sans-serif', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                {project.principle.text}
              </p>
            </section>
          )}

          {project.workflow && (
            <section>
              <h3 className="font-pixel" style={{ fontSize: 10, lineHeight: 1.8, margin: '0 0 10px' }}>workflow</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {project.workflow.map((step, index) => (
                  <span key={step} className="font-pixel" style={{ background: '#fff', border: '2px solid #f9a8d4', color: '#be185d', fontSize: 7, lineHeight: 1.8, padding: '6px 8px' }}>
                    {index > 0 ? '→ ' : ''}{step}
                  </span>
                ))}
              </div>
            </section>
          )}

          {project.relationships && (
            <section>
              <h3 className="font-pixel" style={{ fontSize: 10, lineHeight: 1.8, margin: '0 0 10px' }}>graph relationships</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {project.relationships.map((relationship) => (
                  <PixelTag key={relationship} label={relationship} />
                ))}
              </div>
            </section>
          )}

          {project.roles && (
            <section>
              <h3 className="font-pixel" style={{ fontSize: 10, lineHeight: 1.8, margin: '0 0 10px' }}>role-based system</h3>
              <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))' }}>
                {project.roles.map((role) => (
                  <div key={role.name} style={{ background: '#fff', border: '2px solid #f9a8d4', padding: 14 }}>
                    <div className="font-pixel" style={{ color: '#be185d', fontSize: 8, lineHeight: 1.8, marginBottom: 8 }}>{role.name}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {role.capabilities.map((capability) => (
                        <PixelTag key={capability} label={capability} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.features && (
            <section>
              <h3 className="font-pixel" style={{ fontSize: 10, lineHeight: 1.8, margin: '0 0 10px' }}>core modules</h3>
              <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))' }}>
                {project.features.map((feature) => (
                  <div key={feature.title} style={{ background: '#fff', border: '2px solid #f9a8d4', padding: 14 }}>
                    <div className="font-pixel" style={{ color: '#be185d', fontSize: 8, lineHeight: 1.8, marginBottom: 6 }}>{feature.title}</div>
                    <p style={{ color: '#6b4c54', fontFamily: 'Nunito, sans-serif', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{feature.body}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.technologies && (
            <section>
              <h3 className="font-pixel" style={{ fontSize: 10, lineHeight: 1.8, margin: '0 0 10px' }}>technology stack</h3>
              <div style={{ display: 'grid', gap: 10 }}>
                {project.technologies.map((technology) => (
                  <div key={technology.label} style={{ background: '#fff', border: '2px solid #f9a8d4', padding: 12 }}>
                    <div className="font-pixel" style={{ color: '#be185d', fontSize: 7, lineHeight: 1.8 }}>{technology.label}</div>
                    <div style={{ color: '#6b4c54', fontFamily: 'Nunito, sans-serif', fontSize: 14, lineHeight: 1.6 }}>{technology.value}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.contribution && (
            <section>
              <h3 className="font-pixel" style={{ fontSize: 10, lineHeight: 1.8, margin: '0 0 10px' }}>My contribution</h3>
              <p style={{ color: '#6b4c54', fontFamily: 'Nunito, sans-serif', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                {project.contribution}
              </p>
            </section>
          )}

          {project.sections?.map((section) => (
            <section key={section.title}>
              <h3 className="font-pixel" style={{ fontSize: 10, lineHeight: 1.8, margin: '0 0 10px' }}>{section.title}</h3>
              <p style={{ color: '#6b4c54', fontFamily: 'Nunito, sans-serif', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                {section.body}
              </p>
            </section>
          ))}

          {supportingScreenshots.length > 0 && (
            <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
              {supportingScreenshots.map((screenshot) => (
                <figure key={screenshot.src} style={{ margin: 0 }}>
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    style={{
                      background: '#fff',
                      border: '3px solid #f9a8d4',
                      boxShadow: '4px 4px 0 #f472b6',
                      display: 'block',
                      height: 'auto',
                      width: '100%',
                    }}
                  />
                  {screenshot.caption && (
                    <figcaption style={{ color: '#9d6e7e', fontFamily: 'Nunito, sans-serif', fontSize: 13, lineHeight: 1.6, marginTop: 8 }}>
                      {screenshot.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}

          {(project.githubUrl || project.liveUrl || project.videoUrl || project.link) && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {(project.githubUrl || project.link) && (
                <a className="pixel-btn" href={project.githubUrl ?? project.link ?? '#'} target="_blank" rel="noopener noreferrer" style={{ background: '#ec4899', color: '#fff' }}>
                  GitHub ↗
                </a>
              )}
              {project.videoUrl && (
                <a className="pixel-btn" href={project.videoUrl} target="_blank" rel="noopener noreferrer" style={{ background: '#fff', color: '#4a2c2a' }}>
                  Watch project video ↗
                </a>
              )}
              {project.liveUrl && (
                <a className="pixel-btn" href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ background: '#fff0f5', color: '#4a2c2a' }}>
                  Live demo ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
