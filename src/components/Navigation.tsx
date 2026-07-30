import { useEffect, useRef, useState } from 'react';
import { Download } from 'lucide-react';
import { navigationConfig } from '../config';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!navigationConfig.brandMark && navigationConfig.links.length === 0) {
    return null;
  }

  return (
    <nav
      ref={navRef}
      className="site-nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        padding: '24px 4vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background 0.5s ease, backdrop-filter 0.5s ease',
        background: scrolled
          ? 'linear-gradient(180deg, rgba(5, 10, 15, 0.62), rgba(5, 10, 15, 0.26) 70%, rgba(5, 10, 15, 0))'
          : 'linear-gradient(180deg, rgba(5, 10, 15, 0.34), rgba(5, 10, 15, 0))',
        backdropFilter: scrolled ? 'blur(10px)' : 'blur(2px)',
        WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'blur(2px)',
      }}
    >
      <div
        className="font-serif-display"
        style={{
          fontSize: '18px',
          fontWeight: 400,
          letterSpacing: '0.15em',
          color: '#FFFFFF',
        }}
      >
        {navigationConfig.brandMark}
      </div>
      <div className="site-nav-links" style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
        {navigationConfig.links.map((item) => (
          <button
            key={item.targetId}
            onClick={() => handleNavClick(item.targetId)}
            className="font-sans-body"
            style={{
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              opacity: 0.6,
              fontSize: '14px',
              letterSpacing: '0.08em',
              cursor: 'pointer',
              transition: 'opacity 0.4s ease',
              padding: 0,
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.opacity = '0.6';
            }}
          >
            {item.label}
          </button>
        ))}
        {navigationConfig.cvHref && (
          <a
            className="button button-secondary nav-cv-button"
            href={navigationConfig.cvHref}
            download
          >
            <span>Download CV</span>
            <Download size={14} aria-hidden="true" />
          </a>
        )}
      </div>
    </nav>
  );
}
