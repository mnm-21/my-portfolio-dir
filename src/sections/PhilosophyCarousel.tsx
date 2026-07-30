import { philosophyConfig } from '../config';

export default function PhilosophyCarousel() {
  const methods = [
    {
      title: 'Model the physical constraint',
      body: 'RCM kinematics, deformable tissue, muscle actuation, contact, wind drift, and sensor artifacts are treated as part of the learning problem.',
    },
    {
      title: 'Make the objective measurable',
      body: 'Policies are judged through centering, visibility, jitter, collisions, temporal consistency, downstream perception, and task success.',
    },
    {
      title: 'Stress the system before trusting it',
      body: 'Randomized rollouts, stochastic noise, severe flare regimes, and baseline comparisons are built into the evaluation loop.',
    },
  ];

  return (
    <section className="method-section">
      <div className="method-intro">
        {philosophyConfig.eyebrow && <div className="section-kicker">{philosophyConfig.eyebrow}</div>}
        <h2 className="font-serif-display">{philosophyConfig.title}</h2>
        {philosophyConfig.body && <p>{philosophyConfig.body}</p>}
      </div>

      <div className="method-grid">
        {methods.map((method, index) => (
          <article className="method-card" key={method.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{method.title}</h3>
            <p>{method.body}</p>
          </article>
        ))}
      </div>

      <div className="method-tags" aria-label="Research focus areas">
        {philosophyConfig.rollingWords.map((word) => (
          <span key={word}>{word}</span>
        ))}
      </div>
    </section>
  );
}
