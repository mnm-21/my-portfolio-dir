import { heroConfig } from '../config';

export default function HeroField() {
  const textShadow = '0 2px 24px rgba(0,0,0,0.45)';
  const [firstName, lastName] = heroConfig.wordmarkText.split('\n');

  if (!heroConfig.wordmarkText && !heroConfig.titleLine1) {
    return null;
  }

  return (
    <section
      className="hero-field"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        overflow: 'hidden',
      }}
    >
      <div
        className="hero-grid"
        style={{
          flex: '1 1 auto',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12vh 6vw 8vh',
          gap: '36px',
          overflow: 'visible',
          textAlign: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible', textAlign: 'center' }}>
          <h2
            className="hero-wordmark"
            style={{
              fontSize: 'clamp(72px, 10vw, 160px)',
              margin: 0,
              textAlign: 'center',
            }}
          >
            <span className="hero-name-line hero-fade-in-1">{firstName}</span>
            <span className="hero-name-line hero-fade-in-2">{lastName}</span>
          </h2>
        </div>

        <div
          className="hero-copy"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '750px',
          }}
        >
          {heroConfig.eyebrow && (
            <p
              className="font-sans-body hero-copy-offset"
              style={{
                fontSize: '12px',
                letterSpacing: '0.3em',
                color: 'rgba(255,255,255,0.75)',
                textTransform: 'uppercase',
                marginBottom: '28px',
                marginLeft: 0,
                textShadow,
              }}
            >
              {heroConfig.eyebrow}
            </p>
          )}

          <h1
            className="font-serif-display"
            style={{
              fontSize: 'clamp(36px, 3.6vw, 60px)',
              fontWeight: 500,
              lineHeight: 1.18,
              color: '#ffffff',
              wordBreak: 'keep-all',
              marginBottom: 0,
              textShadow,
            }}
          >
            <span className="hero-line hero-fade-in-3">{heroConfig.titleLine1}</span>
            {heroConfig.titleLine2 && (
              <span className="hero-line hero-fade-in-4">{heroConfig.titleLine2}</span>
            )}
          </h1>

          {(heroConfig.descriptionLine1 || heroConfig.descriptionLine2) && (
            <p
              className="font-sans-body hero-copy-offset"
              style={{
                fontSize: '14px',
                lineHeight: 1.9,
                color: 'rgba(255,255,255,0.75)',
                fontWeight: 300,
                marginBottom: '40px',
                marginLeft: '60px',
                textShadow,
              }}
            >
              {heroConfig.descriptionLine1}
              {heroConfig.descriptionLine2 && (
                <>
                  <br />
                  {heroConfig.descriptionLine2}
                </>
              )}
            </p>
          )}

          {heroConfig.ctaText && (
            <button
              className="button button-primary font-sans-body hero-copy-offset"
              onClick={() => {
                if (heroConfig.ctaTargetId) {
                  document
                    .getElementById(heroConfig.ctaTargetId)
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              style={{
                marginLeft: '60px',
              }}
            >
              <span>{heroConfig.ctaText}</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
