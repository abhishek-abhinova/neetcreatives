import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 });
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || window.matchMedia('(pointer: coarse)').matches) return;
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener('mousemove', move, { passive: true });
    document.documentElement.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.documentElement.removeEventListener('mouseleave', leave);
    };
  }, [reduce]);

  if (reduce) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[5] hidden h-[480px] w-[480px] rounded-full transition-opacity duration-500 md:block"
      style={{
        left: pos.x - 240,
        top: pos.y - 240,
        opacity: visible ? 1 : 0,
        background:
          'radial-gradient(circle, rgba(124,92,255,0.10) 0%, rgba(34,211,238,0.05) 35%, transparent 65%)',
      }}
    />
  );
}
