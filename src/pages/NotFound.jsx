import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { playTick, playWhoosh } from '../utils/audio';
import { TextScramble } from '../utils/textScramble';

export default function NotFound() {
  const codeRef = useRef(null);

  useEffect(() => {
    let scrambler;
    if (codeRef.current) {
      scrambler = new TextScramble(codeRef.current);
      scrambler.setText('404');
    }

    gsap.fromTo(
      '.notfound-reveal',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
    );
  }, []);

  const handleHover = () => {
    playWhoosh();
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem',
        textAlign: 'center',
        background: '#0c0c0e',
      }}
    >
      <span
        className="notfound-reveal"
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.85rem',
          color: 'var(--accent-pink)',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
        }}
      >
        ● SIGNAL LOST // CONNECTION TERMINATED
      </span>

      <h1
        ref={codeRef}
        className="notfound-reveal"
        style={{
          fontSize: 'clamp(5rem, 15vw, 12rem)',
          fontWeight: 900,
          color: '#f5f5f7',
          lineHeight: 1,
          marginBottom: '1rem',
        }}
      >
        404
      </h1>

      <p
        className="notfound-reveal"
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '1rem',
          maxWidth: '450px',
          lineHeight: 1.6,
          opacity: 0.6,
          marginBottom: '3rem',
        }}
      >
        THE FREQUENCY OR ACCESS PORT YOU CHOSE DOES NOT EXIST OR WAS MOVED OUT OF THE CORE MATRIX.
      </p>

      <Link
        to="/"
        className="notfound-reveal brutalist-button"
        onClick={playTick}
        onMouseEnter={handleHover}
        style={{ borderColor: 'var(--accent-cyan)' }}
      >
        ← RETREAT TO INDEX
      </Link>
    </div>
  );
}
