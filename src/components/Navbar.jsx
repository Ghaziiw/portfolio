import { Link, useLocation } from 'react-router-dom';
import { playTick, playWhoosh } from '../utils/audio';

const NAV_ITEMS = [
  { label: 'INDEX', path: '/' },
  { label: 'WORKS', path: '/works' },
  { label: 'RESUME', path: '/resume' }
];

export default function Navbar() {
  const location = useLocation();

  const handleLinkClick = () => {
    playTick();
  };

  const handleLinkHover = () => {
    playWhoosh();
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 900,
        background: 'rgba(12, 12, 14, 0.85)',
        backdropFilter: 'blur(8px)',
        borderBottom: '2px solid #f5f5f7',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.2rem 2rem',
      }}
    >
      {/* Brand logo */}
      <Link
        to="/"
        onClick={handleLinkClick}
        onMouseEnter={handleLinkHover}
        style={{
          fontFamily: 'var(--sans)',
          fontWeight: 700,
          fontSize: '1.2rem',
          color: '#f5f5f7',
          textDecoration: 'none',
          letterSpacing: '0.05em',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span
          style={{
            background: 'var(--accent-pink)',
            color: '#0c0c0e',
            padding: '2px 6px',
            fontSize: '0.9rem',
            fontWeight: 900,
            border: '1.5px solid #f5f5f7',
          }}
        >
          DEV
        </span>
        PORTFOLIO
      </Link>

      {/* Nav links */}
      <div
        style={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              onClick={handleLinkClick}
              onMouseEnter={handleLinkHover}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: isActive ? '#0c0c0e' : '#f5f5f7',
                background: isActive ? 'var(--accent-cyan)' : 'transparent',
                border: isActive ? '2px solid #f5f5f7' : '2px solid transparent',
                padding: '0.4rem 0.8rem',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'all 0.15s ease',
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
