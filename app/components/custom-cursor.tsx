'use client';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const $follower = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const xTo = gsap.quickTo($follower.current, 'x', {
        duration: 0.6,
        ease: 'power3',
      });

      const yTo = gsap.quickTo($follower.current, 'y', {
        duration: 0.6,
        ease: 'power3',
      });

      window.addEventListener('mousemove', (e) => {
        xTo(e.clientX);
        yTo(e.clientY);
      });

      return () =>
        window.removeEventListener('mousemove', (e) => {
          xTo(e.clientX);
          yTo(e.clientY);
        });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  // Render a visible cursor follower
  return <div ref={$follower} className="custom-cursor"></div>;
};

export default CustomCursor;
