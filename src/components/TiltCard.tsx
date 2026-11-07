import { useRef, useState, type ReactNode, type MouseEvent } from 'react';

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
};

export default function TiltCard({ children, className = '', maxTilt = 12 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - py) * maxTilt * 2;
    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(12px)`);
  };

  const handleLeave = () => setTransform('');

  return (
    <div className={`[perspective:1000px] ${className}`}>
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ transform: transform || 'rotateX(0deg) rotateY(0deg)' }}
        className="transition-transform duration-300 ease-out [transform-style:preserve-3d] will-change-transform"
      >
        {children}
      </div>
    </div>
  );
}
