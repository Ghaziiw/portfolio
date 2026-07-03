import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { playTick, playWhoosh } from '../utils/audio';
import { TextScramble } from '../utils/textScramble';

gsap.registerPlugin(ScrollTrigger);

const SKILLS_DATA = [
  { category: 'LANGUAGES', items: ['C / C++', 'JAVA', 'PYTHON', 'JAVASCRIPT', 'TYPESCRIPT', 'SQL'] },
  { category: 'FRONTEND', items: ['ANGULAR', 'HTML / CSS', 'TAILWIND CSS', 'VITE'] },
  { category: 'BACKEND', items: ['NODE.JS', 'EXPRESS.JS', 'RESTFUL APIS', 'POSTGRESQL'] },
  { category: 'ENGINEERING', items: ['SYSTEM DESIGN', 'OOP / UML', 'BACKBLAZE B2', 'BASH'] }
];

const PROJECTS =[
  {
    id: '01',
    name: 'CITYCONNECT',
    category: 'SYSTEM',
    tags: ['ANGULAR', 'EXPRESS.JS', 'POSTGRESQL', 'BACKBLAZE B2'],
    year: '2026',
    role: 'FULL-STACK DEVELOPER',
    desc: 'A smart community platform digitizing municipal services, administrative tasks, and citizen reports, with an integrated gig-labor marketplace for local service workers.',
    github: 'https://github.com/amenallah53/city-connect'
  },
  {
    id: '02',
    name: 'ARTISANART',
    category: 'FRONTEND',
    tags: ['ANGULAR', 'NODE.JS', 'EXPRESS.JS', 'POSTGRESQL'],
    year: '2025',
    role: 'SOFTWARE ENGINEER',
    desc: 'A full-stack e-commerce hub designed to assist Tunisian artisans in presenting, promoting, and marketing handmade heritage items online directly to buyers.',
    github: 'https://github.com/Ghaziiw/ArtisanArt'
  },
  {
    id: '03',
    name: 'ROBINSON',
    category: 'SYSTEM',
    tags: ['JAVA', 'OOP', 'SWING', 'DESKTOP'],
    year: '2025',
    role: 'JAVA ARCHITECT',
    desc: 'An object-oriented desktop application tracking hotel check-ins, guest billing profiles, room scheduling logs, and room service records.',
    github: 'https://github.com/Ghaziiw/Robinson-Hotel-Management'
  }
];


export default function Home() {
  const containerRef = useRef(null);
  const emailRef = useRef(null);
  const heroRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    // Scroll reveals using GSAP ScrollTrigger
    const sections = containerRef.current.querySelectorAll('.reveal-section');
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Hero title entrance animation
    const titleChars = heroRef.current.querySelectorAll('.hero-char');
    gsap.fromTo(
      titleChars,
      { opacity: 0, scale: 0.8, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: 'back.out(1.7)',
        delay: 0.1,
      }
    );

    // Set up contact email scramble text
    let scrambler;
    if (emailRef.current) {
      scrambler = new TextScramble(emailRef.current);
    }

    const handleEmailHover = () => {
      playTick();
      if (scrambler) {
        scrambler.setText('GHAZIMDB@EMAIL.COM');
      }
    };

    const emailEl = emailRef.current;
    if (emailEl) {
      emailEl.addEventListener('mouseenter', handleEmailHover);
    }

    return () => {
      if (emailEl) {
        emailEl.removeEventListener('mouseenter', handleEmailHover);
      }
    };
  }, []);

  return (
    <div ref={containerRef} style={{ paddingTop: '5.5rem' }}>
      
      {/* 1. HERO SECTION */}
      <section
        ref={heroRef}
        style={{
          minHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 2rem',
          position: 'relative',
          borderBottom: '2px solid #f5f5f7',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <span
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.85rem',
              color: 'var(--accent-pink)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1rem',
            }}
          >
            [ SOFTWARE ENGINEERING STUDENT ]
          </span>
          <h1
            style={{
              fontSize: 'clamp(3rem, 8vw, 7.5rem)',
              lineHeight: 0.9,
              marginBottom: '2rem',
              fontFamily: 'var(--sans)',
              fontWeight: 900,
            }}
          >
            {'GHAZI '.split('').map((char, index) => (
              <span key={index} className="hero-char" style={{ display: 'inline-block' }}>{char}</span>
            ))}
            {'MOUADDEB'.split('').map((char, index) => (
              <span key={index} className="hero-char" style={{ display: 'inline-block' }}>{char}</span>
            ))}
            <br />
            <span
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px var(--fg)',
              }}
            >
              {'FULL-STACK '.split('').map((char, index) => (
                <span key={index} className="hero-char" style={{ display: 'inline-block' }}>{char}</span>
              ))}
            </span>
            <br />
            <span style={{ color: 'var(--accent-cyan)' }}>
              {'PORTFOLIO'.split('').map((char, index) => (
                <span key={index} className="hero-char" style={{ display: 'inline-block' }}>{char}</span>
              ))}
            </span>
          </h1>
          <p
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)',
              maxWidth: '650px',
              lineHeight: 1.6,
              opacity: 0.75,
              marginBottom: '3rem',
            }}
          >
            SPECIALIZING IN FULL-STACK WEB DEVELOPMENT, DATABASE SYSTEM DESIGN, AND ROBUST SOFTWARE ARCHITECTURE.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link
              to="/works"
              className="brutalist-button"
              onClick={playTick}
              onMouseEnter={playWhoosh}
            >
              EXPLORE INDEX →
            </Link>
            <a
              href="#contact"
              className="brutalist-button"
              style={{ borderColor: 'var(--accent-pink)' }}
              onClick={playTick}
              onMouseEnter={playWhoosh}
            >
              GET IN TOUCH //
            </a>
          </div>
        </div>
      </section>

      {/* Endless Marquee Banner */}
      <div className="marquee-container">
        <div className="marquee-content">
          <div className="marquee-text">
            ANGULAR <span>●</span> NODE.JS <span>●</span> EXPRESS.JS <span>●</span> POSTGRESQL <span>●</span> SOFTWARE ENGINEER <span>●</span>
          </div>
          <div className="marquee-text">
            ANGULAR <span>●</span> NODE.JS <span>●</span> EXPRESS.JS <span>●</span> POSTGRESQL <span>●</span> SOFTWARE ENGINEER <span>●</span>
          </div>
        </div>
      </div>

      {/* 2. ABOUT SECTION */}
      <section
        className="reveal-section"
        style={{
          padding: '8vw 2rem',
          borderBottom: '2px solid #f5f5f7',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--accent-pink)', marginBottom: '1.5rem' }}>
            [ 01 // ABOUT ]
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, opacity: 0.8 }}>
            I am a software engineering student specializing in web development, backend engineering, databases, and software design. Experienced in building scalable web applications using Angular and Express.js, designing RESTful APIs, and modeling relational databases.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="brutalist-card">
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: 'var(--accent-cyan)' }}>
              CORE PRINCIPLE
            </h3>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '0.9rem', opacity: 0.75 }}>
              Clean, modular architecture backed by reliable relational database designs and user-friendly web frameworks.
            </p>
          </div>
          <div className="brutalist-card" style={{ boxShadow: '4px 4px 0px 0px var(--accent-pink)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: 'var(--accent-yellow)' }}>
              PROJECT TARGETS
            </h3>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '0.9rem', opacity: 0.75 }}>
              Building e-commerce platforms, community portals, and desktop management systems with modern tech stacks.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SKILLS SECTION */}
      <section
        className="reveal-section"
        style={{
          padding: '8vw 2rem',
          borderBottom: '2px solid #f5f5f7',
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '3rem',
          }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--accent-cyan)' }}>
            [ 02 // SKILLS ]
          </h2>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '1rem', opacity: 0.4 }}>TECH_MATRIX_v1.0</span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '2rem',
          }}
        >
          {SKILLS_DATA.map((col) => (
            <div
              key={col.category}
              className="brutalist-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '4px 4px 0px 0px var(--accent-blue)',
              }}
              onMouseEnter={playWhoosh}
            >
              <h3
                style={{
                  fontSize: '1.1rem',
                  borderBottom: '2px solid #f5f5f7',
                  paddingBottom: '0.5rem',
                  marginBottom: '1rem',
                  color: 'var(--fg)',
                  letterSpacing: '0.05em',
                }}
              >
                {col.category}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                {col.items.map((skill) => (
                  <div
                    key={skill}
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '0.85rem',
                      padding: '0.3rem 0',
                      borderBottom: '1px solid var(--border-muted)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      opacity: 0.8,
                    }}
                  >
                    <span>{skill}</span>
                    <span style={{ color: 'var(--accent-pink)' }}>+</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SELECTED WORKS */}
      <section
        ref={projectsRef}
        className="reveal-section"
        style={{
          padding: '8vw 2rem',
          borderBottom: '2px solid #f5f5f7',
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '3rem',
          }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--accent-pink)' }}>
            [ 03 // WORKS ]
          </h2>
          <Link
            to="/works"
            onClick={playTick}
            onMouseEnter={playWhoosh}
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.9rem',
              color: 'var(--fg)',
              textDecoration: 'underline',
              fontWeight: 700,
            }}
          >
            VIEW ALL SELECTED
          </Link>
        </div>

        {/* Selected Project Blocks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="brutalist-card"
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                alignItems: 'center',
                gap: '2rem',
                boxShadow: '5px 5px 0px 0px var(--accent-cyan)',
              }}
              onMouseEnter={playWhoosh}
            >
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  opacity: 0.35,
                }}
              >
                {proj.id}
              </div>
              <div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.4rem', color: '#f5f5f7' }}>
                  {proj.name}
                </h3>
                <p style={{ fontSize: '0.95rem', opacity: 0.7, marginBottom: '0.8rem' }}>
                  {proj.desc}
                </p>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: '0.75rem',
                        background: 'rgba(245, 245, 247, 0.08)',
                        padding: '2px 8px',
                        border: '1px solid var(--border-muted)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.85rem', opacity: 0.4 }}>
                  {proj.year}
                </span>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={playTick}
                  className="brutalist-button"
                  style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}
                >
                  CODE ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section
        id="contact"
        className="reveal-section"
        style={{
          padding: '10vw 2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.8rem',
            letterSpacing: '0.25em',
            color: 'var(--accent-yellow)',
            marginBottom: '1rem',
            display: 'block',
          }}
        >
          ● HAVE AN IDEA? LET'S BUILD IT
        </span>
        <h2
          style={{
            fontSize: 'clamp(2rem, 5.5vw, 5rem)',
            fontWeight: 900,
            marginBottom: '2rem',
            lineHeight: 1.1,
          }}
        >
          LAUNCH TRANSMISSION
        </h2>

        <div
          style={{
            border: '3px solid #f5f5f7',
            background: 'var(--bg-panel)',
            padding: '2rem 3vw',
            width: 'min(90vw, 850px)',
            marginBottom: '3rem',
            boxShadow: '6px 6px 0px 0px var(--accent-pink)',
          }}
        >
          <a
            ref={emailRef}
            href="mailto:ghazimdb@email.com"
            onClick={playTick}
            style={{
              fontFamily: 'var(--sans)',
              fontWeight: 900,
              fontSize: 'clamp(1.2rem, 3.8vw, 3rem)',
              color: '#f5f5f7',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              display: 'block',
            }}
          >
            GHAZIMDB@EMAIL.COM
          </a>
        </div>

        {/* Footer info inside contact */}
        <div style={{ display: 'flex', gap: '2rem', fontFamily: 'var(--mono)', fontSize: '0.9rem' }}>
          <a
            href="https://github.com/Ghaziiw"
            target="_blank"
            rel="noreferrer"
            className="brutalist-button"
            onClick={playTick}
            onMouseEnter={playWhoosh}
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com/in/ghazi-meddeb-436154306/"
            target="_blank"
            rel="noreferrer"
            className="brutalist-button"
            onClick={playTick}
            onMouseEnter={playWhoosh}
            style={{ borderColor: 'var(--accent-cyan)' }}
          >
            LINKEDIN
          </a>
        </div>
      </section>

      {/* Footer Branding */}
      <footer
        style={{
          borderTop: '2px solid #f5f5f7',
          padding: '2rem',
          textAlign: 'center',
          fontFamily: 'var(--mono)',
          fontSize: '0.75rem',
          opacity: 0.45,
        }}
      >
        © 2026 GHAZI MOUADDEB — ALL RIGHTS RESERVED
      </footer>

    </div>
  );
}
