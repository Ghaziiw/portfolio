import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { playTick, playChime } from '../utils/audio';

const TERMINAL_LINES = [
  'SYSTEM BOOT SECTOR [ACTIVE]',
  'INITIALIZING BRUTALIST ENGINE...',
  'FETCHING DESIGN SYSTEM TOKENS...',
  'COMPILED: SpaceGrotesk-Bold.woff2',
  'COMPILED: SpaceMono-Regular.woff2',
  'ACQUIRING INTERACTIVE PHYSICS MATRIX...',
  'SETTING ACCENT FREQUENCY // ELECTRIC BLUE',
  'SYNAPSE COMPILATION SUCCESSFUL.',
  'PORTFOLIO COMPONENT INJECTED [DONE]',
  'ALL FREQUENCIES ONLINE.'
];

export default function Loader({ onReady }) {
  const [percent, setPercent] = useState(0);
  const [terminalText, setTerminalText] = useState('');
  const loaderRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    let count = 0;
    let textIdx = 0;
    let terminalInterval;

    // Fast loading simulation
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 3) + 1;
      if (count >= 100) {
        count = 100;
        clearInterval(interval);
        clearInterval(terminalInterval);
        
        // Final sequence
        setTerminalText('SIGNAL ACQUIRED. READY TO LAUNCH.');
        playChime();
        
        // GSAP transition out
        const tl = gsap.timeline({
          delay: 0.35,
          onComplete: () => {
            if (onReady) onReady();
          }
        });
        
        tl.to(loaderRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: 'power4.inOut',
        });
      } else {
        setPercent(count);
        // Play tick sound on random steps to feel interactive
        if (Math.random() < 0.25) {
          playTick();
        }
      }
    }, 45);

    // Shuffle terminal log lines
    terminalInterval = setInterval(() => {
      setTerminalText(TERMINAL_LINES[textIdx]);
      textIdx = (textIdx + 1) % TERMINAL_LINES.length;
    }, 400);

    return () => {
      clearInterval(interval);
      clearInterval(terminalInterval);
    };
  }, [onReady]);

  return (
    <div
      ref={loaderRef}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#0c0c0e',
        color: '#f5f5f7',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        borderBottom: '4px solid #f5f5f7',
      }}
    >
      {/* Top Bar Details */}
      <div
        style={{
          position: 'absolute',
          top: '2rem',
          left: '2rem',
          right: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'var(--mono)',
          fontSize: '0.75rem',
          opacity: 0.45,
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
        }}
      >
        <span>SYS.LOAD // PORTFOLIO_v3.0</span>
        <span>STATUS: BOOT_SEQUENCE</span>
      </div>

      {/* Main Percentage Core */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '2rem',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 'clamp(5rem, 12vw, 10rem)',
            fontWeight: 700,
            lineHeight: 1,
            color: 'var(--fg)',
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'center',
          }}
        >
          <span>{String(percent).padStart(3, '0')}</span>
          <span style={{ fontSize: '2rem', marginLeft: '0.5rem', color: 'var(--accent-pink)' }}>%</span>
        </div>
      </div>

      {/* Brutalist Progress Bar */}
      <div
        style={{
          width: 'min(80vw, 400px)',
          height: '24px',
          border: '3px solid #f5f5f7',
          background: 'transparent',
          position: 'relative',
          padding: '2px',
          marginBottom: '1.5rem',
        }}
      >
        <div
          ref={barRef}
          style={{
            width: `${percent}%`,
            height: '100%',
            background: 'var(--accent-blue)',
            transition: 'width 0.05s linear',
          }}
        />
      </div>

      {/* Terminal logs */}
      <div
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.75rem',
          color: 'var(--accent-cyan)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          textAlign: 'center',
          height: '20px',
        }}
      >
        &gt; {terminalText}
      </div>

      {/* Bottom info */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          fontFamily: 'var(--mono)',
          fontSize: '0.7rem',
          opacity: 0.3,
          letterSpacing: '0.1em',
        }}
      >
        UTC+01:00 // DEVELOPER PORTFOLIO
      </div>
    </div>
  );
}
