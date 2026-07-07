import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { playTick, playWhoosh } from '../utils/audio';
import cvEnPdf from '../assets/cv-en.pdf';
import cvFrPdf from '../assets/cv-fr.pdf';

const EXPERIENCES = [
  {
    id: 'exp-1',
    role: 'CITYCONNECT // SMART PLATFORM',
    company: 'Angular, Node.js, Express.js, PostgreSQL, Backblaze B2',
    period: '2026',
    bullets: [
      'Developed a full-stack platform digitizing municipal services and public administrative tasks.',
      'Integrated a service marketplace for manual laborers (builders, plumbers, electricians) to connect with citizens.',
      'Implemented file handling and secure storage structures utilizing Backblaze B2 bucket APIs.'
    ]
  },
  {
    id: 'exp-2',
    role: 'ARTISANART // E-COMMERCE PLATFORM',
    company: 'Angular, Node.js, Express.js, PostgreSQL',
    period: '2025',
    bullets: [
      'Built a platform designed to assist local Tunisian artisans in marketing and selling handmade products online.',
      'Implemented user interfaces, relational schemas, and RESTful API endpoints for item collections.',
      'Optimized query execution paths and structured product databases for low latency.'
    ]
  },
  {
    id: 'exp-3',
    role: 'ROBINSON // HOTEL SYSTEM',
    company: 'Java, Object-Oriented Programming, Swing',
    period: '2025',
    bullets: [
      'Developed a desktop application tracking hotel room status, billing records, and client files.',
      'Applied modular software architecture guidelines and strict OOP inheritance patterns.'
    ]
  }
];

const EDUCATION = [
  {
    id: 'edu-1',
    degree: 'SOFTWARE ENGINEERING CYCLE',
    institution: 'Faculté des Sciences de Tunis (FST)',
    period: '2025 - PRESENT',
    details: 'Pursuing engineering specialization focusing on advanced software design, backend development, and databases.'
  },
  {
    id: 'edu-2',
    degree: 'INTEGRATED PREPARATORY CYCLE — MPI',
    institution: 'Faculté des Sciences de Tunis (FST)',
    period: '2023 - 2025',
    details: 'Intensive preparatory studies focusing on Mathematics, Physics, and Computer Science foundations.'
  },
  {
    id: 'edu-3',
    degree: 'BACCALAUREATE IN TECHNICAL SCIENCES',
    institution: 'Lycée Pilote de Gafsa',
    period: 'GRADUATED 2023',
    details: 'Graduated with highest honors (Mention Très Bien - 17.14 / 20).'
  }
];

const LANGUAGES = [
  { name: 'ARABIC', level: 'NATIVE' },
  { name: 'FRENCH', level: 'FLUENT' },
  { name: 'ENGLISH', level: 'FLUENT' },
  { name: 'SPANISH', level: 'PROFICIENT' }
];

export default function Resume() {
  useEffect(() => {
    gsap.fromTo(
      '.resume-item',
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      }
    );
  }, []);

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
            color: 'var(--accent-cyan)',
            letterSpacing: '0.2em',
          }}
        >
          CURRICULUM VITAE // GHAZI MOUADDEB
        </span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900 }}>
          RESUME
        </h1>
      </div>

      {/* Download Action Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem',
        }}
      >
        {/* English CV */}
        <div
          className="resume-item brutalist-card"
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.2rem',
            boxShadow: '5px 5px 0px 0px var(--accent-pink)',
          }}
          onMouseEnter={playWhoosh}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span
              style={{
                fontFamily: 'var(--sans)',
                fontSize: '3rem',
                fontWeight: 900,
                color: 'var(--accent-pink)',
                lineHeight: 1,
              }}
            >
              EN
            </span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '1rem', fontWeight: 700 }}>ENGLISH CV</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', opacity: 0.5 }}>PDF FORMAT</div>
            </div>
          </div>
          <a
            href={cvEnPdf}
            download="ghazi-mouaddeb-cv-en.pdf"
            onClick={playTick}
            className="brutalist-button"
            style={{
              width: '100%',
              justifyContent: 'center',
              textDecoration: 'none',
              borderColor: 'var(--accent-pink)',
            }}
          >
            DOWNLOAD CV (EN) ↓
          </a>
        </div>

        {/* French CV */}
        <div
          className="resume-item brutalist-card"
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.2rem',
            boxShadow: '5px 5px 0px 0px var(--accent-cyan)',
          }}
          onMouseEnter={playWhoosh}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span
              style={{
                fontFamily: 'var(--sans)',
                fontSize: '3rem',
                fontWeight: 900,
                color: 'var(--accent-cyan)',
                lineHeight: 1,
              }}
            >
              FR
            </span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '1rem', fontWeight: 700 }}>CV FRANÇAIS</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', opacity: 0.5 }}>FORMAT PDF</div>
            </div>
          </div>
          <a
            href={cvFrPdf}
            download="ghazi-mouaddeb-cv-fr.pdf"
            onClick={playTick}
            className="brutalist-button"
            style={{
              width: '100%',
              justifyContent: 'center',
              textDecoration: 'none',
              borderColor: 'var(--accent-cyan)',
            }}
          >
            TÉLÉCHARGER CV (FR) ↓
          </a>
        </div>
      </div>

      {/* Structured Sections */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          marginBottom: '5rem',
        }}
      >
        {/* Left Column: Work History */}
        <div>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--accent-cyan)', marginBottom: '2rem', borderBottom: '2px solid #f5f5f7', paddingBottom: '0.5rem' }}>
            [ PROJECTS & DEV ]
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="resume-item" style={{ borderLeft: '3px solid var(--accent-pink)', paddingLeft: '1.5rem' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.8rem', opacity: 0.5, marginBottom: '0.3rem' }}>
                  {exp.period}
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                  {exp.role}
                </h3>
                <h4 style={{ fontSize: '0.95rem', fontFamily: 'var(--mono)', color: 'var(--accent-blue)', marginBottom: '1rem' }}>
                  {exp.company}
                </h4>
                <ul style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.8, fontSize: '0.9rem', lineHeight: 1.5 }}>
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Education & Languages */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--accent-pink)', marginBottom: '2rem', borderBottom: '2px solid #f5f5f7', paddingBottom: '0.5rem' }}>
              [ EDUCATION ]
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="resume-item" style={{ borderLeft: '3px solid var(--accent-cyan)', paddingLeft: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '0.8rem', opacity: 0.5, marginBottom: '0.3rem' }}>
                    {edu.period}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                    {edu.degree}
                  </h3>
                  <h4 style={{ fontSize: '0.95rem', fontFamily: 'var(--mono)', color: 'var(--accent-yellow)', marginBottom: '0.8rem' }}>
                    {edu.institution}
                  </h4>
                  <p style={{ opacity: 0.8, fontSize: '0.9rem', lineHeight: 1.5 }}>
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--accent-yellow)', marginBottom: '2rem', borderBottom: '2px solid #f5f5f7', paddingBottom: '0.5rem' }}>
              [ LANGUAGES ]
            </h2>
            <div
              className="resume-item brutalist-card"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                boxShadow: '4px 4px 0px 0px var(--accent-blue)',
              }}
            >
              {LANGUAGES.map((lang) => (
                <div key={lang.name} style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '1rem', fontWeight: 700 }}>{lang.name}</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', opacity: 0.6 }}>{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Return */}
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
        <span style={{ opacity: 0.3 }}>CV_MATRIX // COMPLETE</span>
      </div>
    </div>
  );
}
