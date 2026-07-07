import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { playTick, playWhoosh } from '../utils/audio';

const ALL_PROJECTS = [
  {
    id: '01',
    name: 'CITYCONNECT',
    category: ['FRONTEND','BACKEND'],
    tags: ['ANGULAR', 'EXPRESS.JS', 'POSTGRESQL', 'BACKBLAZE B2'],
    year: '2026',
    role: 'FULL-STACK DEVELOPER',
    desc: 'A smart community platform digitizing municipal services, administrative tasks, and citizen reports, with an integrated gig-labor marketplace for local service workers.',
    github: 'https://github.com/amenallah53/city-connect'
  },
  {
    id: '02',
    name: 'ARTISANART',
    category: ['FRONTEND','BACKEND'],
    tags: ['ANGULAR', 'NODE.JS', 'EXPRESS.JS', 'POSTGRESQL'],
    year: '2025',
    role: 'SOFTWARE ENGINEER',
    desc: 'A full-stack e-commerce hub designed to assist Tunisian artisans in presenting, promoting, and marketing handmade heritage items online directly to buyers.',
    github: 'https://github.com/Ghaziiw/ArtisanArt'
  },
  {
    id: '03',
    name: 'ROBINSON',
    category: ['SYSTEM'],
    tags: ['JAVA', 'OOP', 'SWING', 'DESKTOP'],
    year: '2025',
    role: 'JAVA ARCHITECT',
    desc: 'An object-oriented desktop application tracking hotel check-ins, guest billing profiles, room scheduling logs, and room service records.',
    github: 'https://github.com/Ghaziiw/Robinson-Hotel-Management'
  }
];

const CATEGORIES = ['ALL', 'FRONTEND', 'BACKEND', 'SYSTEM'];

export default function Works() {
  const [filter, setFilter] = useState('ALL');

  useEffect(() => {
    gsap.fromTo(
      '.works-grid-card',
      { opacity: 0, scale: 0.95, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
      }
    );
  }, [filter]);

  const handleFilterClick = (cat) => {
    playTick();
    setFilter(cat);
  };

  // Adjust filtering slightly to make sure categories are accurately checked
  const filteredProjects = ALL_PROJECTS.filter((proj) => {
    if (filter === 'ALL') return true;
    if (filter === 'FRONTEND' && Array.isArray(proj.category) && proj.category.includes('FRONTEND')) return true;
    if (filter === 'SYSTEM' && Array.isArray(proj.category) && proj.category.includes('SYSTEM')) return true;
    // Map backend categories
    if (filter === 'BACKEND' && Array.isArray(proj.category) && proj.category.includes('BACKEND')) return true;
    return false;
  });

  return (
    <div
      style={{
        paddingTop: '7rem',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Page Header */}
      <div
        style={{
          borderBottom: '3px solid #f5f5f7',
          paddingBottom: '2rem',
          marginBottom: '3rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.8rem',
            color: 'var(--accent-pink)',
            letterSpacing: '0.2em',
          }}
        >
          INDEX // PREVIOUS REPOSITORIES
        </span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900 }}>
          PROJECTS
        </h1>
      </div>

      {/* Filter Categories Navbar */}
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '3rem',
        }}
      >
        {CATEGORIES.map((cat) => {
          const count = cat === 'ALL'
            ? ALL_PROJECTS.length
            : ALL_PROJECTS.filter((p) => Array.isArray(p.category) && p.category.includes(cat)).length;
          return (
            <button
              key={cat}
              onClick={() => handleFilterClick(cat)}
              onMouseEnter={playWhoosh}
              style={{
                background: filter === cat ? 'var(--accent-cyan)' : 'transparent',
                color: filter === cat ? '#0c0c0e' : '#f5f5f7',
                border: '2px solid #f5f5f7',
                padding: '0.5rem 1.2rem',
                fontFamily: 'var(--mono)',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                transition: 'all 0.15s ease',
              }}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Works Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2.5rem',
          flex: 1,
          marginBottom: '5rem',
        }}
      >
        {filteredProjects.map((proj) => (
          <article
            key={proj.id}
            className="works-grid-card brutalist-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '5px 5px 0px 0px var(--accent-blue)',
            }}
            onMouseEnter={playWhoosh}
          >
            {/* Header info */}
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontFamily: 'var(--mono)',
                  fontSize: '0.8rem',
                  opacity: 0.4,
                  marginBottom: '1.2rem',
                }}
              >
                <span>
                  #{proj.id} // {Array.isArray(proj.category) ? proj.category.join(', ') : proj.category}
                </span>
                <span>{proj.year}</span>
              </div>
              <h2
                style={{
                  fontSize: '1.8rem',
                  marginBottom: '0.6rem',
                  color: '#f5f5f7',
                }}
              >
                {proj.name}
              </h2>
              <p
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.95rem',
                  opacity: 0.75,
                  lineHeight: 1.5,
                  marginBottom: '1.5rem',
                }}
              >
                {proj.desc}
              </p>
            </div>

            {/* Bottom metadata details */}
            <div style={{ marginTop: 'auto' }}>
              <div
                style={{
                  borderTop: '1px solid var(--border-muted)',
                  paddingTop: '1rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontFamily: 'var(--mono)', opacity: 0.6, marginBottom: '0.4rem' }}>
                  <span>ROLE:</span>
                  <span style={{ color: 'var(--accent-yellow)' }}>{proj.role}</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.6rem' }}>
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: '0.7rem',
                        background: 'rgba(245, 245, 247, 0.05)',
                        border: '1px solid var(--border-muted)',
                        padding: '1px 6px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={playTick}
                  className="brutalist-button"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  VIEW REPOSITORY ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Footer back button */}
      <div
        style={{
          borderTop: '2px solid #f5f5f7',
          padding: '3rem 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'var(--mono)',
          fontSize: '0.8rem',
        }}
      >
        <Link to="/" onClick={playTick} style={{ color: 'var(--fg)', textDecoration: 'none', fontWeight: 700 }}>
          ← RETURN TO INDEX
        </Link>
        <span style={{ opacity: 0.3 }}>TOTAL_REPOS // {filteredProjects.length}</span>
      </div>
    </div>
  );
}
