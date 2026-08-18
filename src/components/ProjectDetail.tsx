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
  const palette = project.id === 'chronocheck'
    ? { backdrop: 'rgba(34, 52, 46, 0.28)', surface: '#f5faf3', border: '#b6c9b5', shadow: '#a7c7b0', accent: '#335e4c', soft: '#edf5ee', text: '#2b312d', muted: '#4d5852' }
    : project.id === 'mesaos'
      ? { backdrop: 'rgba(67, 48, 38, 0.52)', surface: '#fffaf0', border: '#5b4032', shadow: '#f59e0b', accent: '#b45309', soft: '#fef3c7', text: '#5b4032', muted: '#7c6658' }
      : { backdrop: 'rgba(74, 44, 42, 0.45)', surface: '#fff5f8', border: '#4a2c2a', shadow: '#ec4899', accent: '#be185d', soft: '#fff', text: '#4a2c2a', muted: '#6b4c54' }

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
        background: palette.backdrop,
        padding: 'clamp(16px, 4vw, 36px)',
        overflowY: 'auto',
      }}
    >
      <div
        onMouseDown={(event) => event.stopPropagation()}
        style={{
          background: palette.surface,
          border: `3px solid ${palette.border}`,
          boxShadow: `8px 8px 0 ${palette.shadow}`,
          color: palette.text,
          minWidth: 0,
          overflowX: 'hidden',
          margin: '0 auto',
          maxWidth: 980,
          width: '100%',
        }}
      >
        <div
          style={{
            alignItems: 'flex-start',
            borderBottom: `3px solid ${palette.shadow}`,
            display: 'flex',
            gap: 16,
            justifyContent: 'space-between',
            padding: '20px clamp(16px, 4vw, 28px)',
          }}
        >
          <div style={{ minWidth: 0 }}>
            <div className="font-pixel" style={{ color: palette.accent, fontSize: 7, lineHeight: 1.8 }}>
              {project.metadata ?? project.event}
            </div>
            <h2 id="project-detail-title" className="font-pixel" style={{ fontSize: 'clamp(15px, 3vw, 24px)', lineHeight: 1.7, margin: '6px 0 0' }}>
              {project.name}
            </h2>
            {project.subtitle && (
              <p className="font-pixel" style={{ color: palette.muted, fontSize: 8, lineHeight: 1.8, margin: '4px 0 0' }}>
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
            style={{ background: palette.soft, color: palette.text, flex: '0 0 auto', padding: '8px 10px' }}
          >
            x
          </button>
        </div>

        <div style={{ display: 'grid', gap: 28, minWidth: 0, padding: 'clamp(16px, 4vw, 28px)' }}>
          {primaryScreenshot && (
            <figure style={{ margin: 0 }}>
              <img
                src={primaryScreenshot.src}
                alt={primaryScreenshot.alt}
                style={{
                  background: palette.soft,
                  border: `3px solid ${palette.shadow}`,
                  boxShadow: `5px 5px 0 ${palette.accent}`,
                  display: 'block',
                  height: 'auto',
                  maxHeight: 520,
                  objectFit: 'contain',
                  width: '100%',
                }}
              />
              {primaryScreenshot.caption && (
                <figcaption style={{ color: palette.muted, fontFamily: 'Nunito, sans-serif', fontSize: 13, lineHeight: 1.6, marginTop: 8 }}>
                  {primaryScreenshot.caption}
                </figcaption>
              )}
            </figure>
          )}

          <p style={{ color: palette.muted, fontFamily: 'Nunito, sans-serif', fontSize: 16, lineHeight: 1.8, margin: 0, overflowWrap: 'anywhere' }}>
            {project.longDescription ?? project.description}
          </p>

          {project.principle && (
            <section style={{ background: palette.soft, border: `3px solid ${palette.shadow}`, boxShadow: `4px 4px 0 ${palette.accent}`, padding: 18 }}>
              <h3 className="font-pixel" style={{ color: palette.accent, fontSize: 10, lineHeight: 1.8, margin: '0 0 8px' }}>
                {project.principle.title}
              </h3>
              <p style={{ color: palette.muted, fontFamily: 'Nunito, sans-serif', fontSize: 15, lineHeight: 1.8, margin: 0, overflowWrap: 'anywhere' }}>
                {project.principle.text}
              </p>
            </section>
          )}

          {project.workflow && (
            <section>
              <h3 className="font-pixel" style={{ fontSize: 10, lineHeight: 1.8, margin: '0 0 10px' }}>workflow</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {project.workflow.map((step, index) => (
                  <span key={step} className="font-pixel" style={{ background: palette.soft, border: `2px solid ${palette.shadow}`, color: palette.accent, fontSize: 7, lineHeight: 1.8, padding: '6px 8px' }}>
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
                  <div key={role.name} style={{ background: palette.soft, border: `2px solid ${palette.shadow}`, padding: 14 }}>
                    <div className="font-pixel" style={{ color: palette.accent, fontSize: 8, lineHeight: 1.8, marginBottom: 8 }}>{role.name}</div>
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
                  <div key={feature.title} style={{ background: palette.soft, border: `2px solid ${palette.shadow}`, padding: 14 }}>
                    <div className="font-pixel" style={{ color: palette.accent, fontSize: 8, lineHeight: 1.8, marginBottom: 6 }}>{feature.title}</div>
                    <p style={{ color: palette.muted, fontFamily: 'Nunito, sans-serif', fontSize: 14, lineHeight: 1.6, margin: 0, overflowWrap: 'anywhere' }}>{feature.body}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.moduleSections && (
            <section style={{ display: 'grid', gap: 22 }}>
              <div>
                <h3 className="font-pixel" style={{ color: palette.accent, fontSize: 11, lineHeight: 1.8, margin: 0 }}>module walkthrough</h3>
                <p style={{ color: palette.muted, fontFamily: 'Nunito, sans-serif', fontSize: 15, lineHeight: 1.7, margin: '8px 0 0' }}>
                  Explore how each operational area works inside NG Manager.
                </p>
              </div>
              <div style={{ display: 'grid', gap: 26 }}>
                {project.moduleSections.map((module) => (
                  <article key={module.title} style={{ background: palette.soft, border: `3px solid ${palette.shadow}`, boxShadow: `5px 5px 0 ${palette.accent}`, minWidth: 0, padding: 16 }}>
                    <h4 className="font-pixel" style={{ color: palette.text, fontSize: 10, lineHeight: 1.8, margin: '0 0 8px' }}>{module.title}</h4>
                    <p style={{ color: palette.muted, fontFamily: 'Nunito, sans-serif', fontSize: 15, lineHeight: 1.7, margin: '0 0 14px', overflowWrap: 'anywhere' }}>{module.body}</p>
                    <img
                      src={module.image.src}
                      alt={module.image.alt}
                      style={{ background: '#fff', border: `2px solid ${palette.border}`, display: 'block', height: 'auto', width: '100%' }}
                    />
                  </article>
                ))}
              </div>
            </section>
          )}

          {project.technologies && (
            <section>
              <h3 className="font-pixel" style={{ fontSize: 10, lineHeight: 1.8, margin: '0 0 10px' }}>technology stack</h3>
              <div style={{ display: 'grid', gap: 10 }}>
                {project.technologies.map((technology) => (
                  <div key={technology.label} style={{ background: palette.soft, border: `2px solid ${palette.shadow}`, padding: 12 }}>
                    <div className="font-pixel" style={{ color: palette.accent, fontSize: 7, lineHeight: 1.8 }}>{technology.label}</div>
                    <div style={{ color: palette.muted, fontFamily: 'Nunito, sans-serif', fontSize: 14, lineHeight: 1.6, overflowWrap: 'anywhere' }}>{technology.value}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.contribution && (
            <section>
              <h3 className="font-pixel" style={{ fontSize: 10, lineHeight: 1.8, margin: '0 0 10px' }}>My contribution</h3>
              <p style={{ color: palette.muted, fontFamily: 'Nunito, sans-serif', fontSize: 15, lineHeight: 1.8, margin: 0, overflowWrap: 'anywhere' }}>
                {project.contribution}
              </p>
            </section>
          )}

          {project.sections?.map((section) => (
            <section key={section.title}>
              <h3 className="font-pixel" style={{ fontSize: 10, lineHeight: 1.8, margin: '0 0 10px' }}>{section.title}</h3>
              <p style={{ color: palette.muted, fontFamily: 'Nunito, sans-serif', fontSize: 15, lineHeight: 1.8, margin: 0, overflowWrap: 'anywhere' }}>
                {section.body}
              </p>
            </section>
          ))}

          {supportingScreenshots.length > 0 && (
            <section>
              <h3 className="font-pixel" style={{ fontSize: 10, lineHeight: 1.8, margin: '0 0 14px' }}>main interface overview</h3>
              <div style={{ display: 'grid', gap: 24 }}>
                {supportingScreenshots.map((screenshot) => (
                  <figure key={screenshot.src} style={{ margin: 0, width: '100%' }}>
                    <div className="font-pixel" style={{ color: palette.accent, fontSize: 9, lineHeight: 1.8, marginBottom: 10 }}>
                      {screenshot.title ?? screenshot.caption ?? 'Interface overview'}
                    </div>
                    <img
                      src={screenshot.src}
                      alt={screenshot.alt}
                      style={{
                        background: palette.soft,
                        border: `3px solid ${palette.shadow}`,
                        boxShadow: `4px 4px 0 ${palette.accent}`,
                        display: 'block',
                        height: 'auto',
                        width: '100%',
                      }}
                    />
                    <figcaption style={{ color: palette.muted, fontFamily: 'Nunito, sans-serif', fontSize: 14, lineHeight: 1.7, marginTop: 10 }}>
                      {screenshot.description ?? screenshot.caption ?? screenshot.alt}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}

          {(project.githubUrl || project.liveUrl || project.videoUrl || project.link) && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {(project.githubUrl || project.link) && (
                <a className="pixel-btn" href={project.githubUrl ?? project.link ?? '#'} target="_blank" rel="noopener noreferrer" style={{ background: palette.shadow, color: palette.text }}>
                  GitHub ↗
                </a>
              )}
              {project.videoUrl && (
                <a className="pixel-btn" href={project.videoUrl} target="_blank" rel="noopener noreferrer" style={{ background: palette.soft, color: palette.text }}>
                  Watch project video ↗
                </a>
              )}
              {project.liveUrl && (
                <a className="pixel-btn" href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ background: palette.surface, color: palette.text }}>
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
