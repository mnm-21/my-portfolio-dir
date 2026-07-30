import type { CSSProperties, PointerEvent, ReactNode } from 'react';
import { useCallback, useRef } from 'react';

type TiltStyle = CSSProperties & {
  '--tilt-x': string;
  '--tilt-y': string;
  '--tilt-glare-x': string;
  '--tilt-glare-y': string;
};

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function TiltCard({ children, className = '', style }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const resetTilt = useCallback(() => {
    const element = ref.current;
    if (!element) return;

    element.style.setProperty('--tilt-x', '0deg');
    element.style.setProperty('--tilt-y', '0deg');
    element.style.setProperty('--tilt-glare-x', '50%');
    element.style.setProperty('--tilt-glare-y', '50%');
  }, []);

  const updateTilt = useCallback((event: PointerEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = element.getBoundingClientRect();
    const xPercent = (event.clientX - rect.left) / rect.width;
    const yPercent = (event.clientY - rect.top) / rect.height;
    const rotateY = (xPercent - 0.5) * 18;
    const rotateX = (0.5 - yPercent) * 14;

    element.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`);
    element.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`);
    element.style.setProperty('--tilt-glare-x', `${(xPercent * 100).toFixed(1)}%`);
    element.style.setProperty('--tilt-glare-y', `${(yPercent * 100).toFixed(1)}%`);
  }, []);

  return (
    <div
      ref={ref}
      className={`tilt-card-wrap ${className}`}
      onPointerMove={updateTilt}
      onPointerLeave={resetTilt}
      style={{
        ...style,
        '--tilt-x': '0deg',
        '--tilt-y': '0deg',
        '--tilt-glare-x': '50%',
        '--tilt-glare-y': '50%',
      } as TiltStyle}
    >
      {children}
    </div>
  );
}
