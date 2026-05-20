'use client';

import { useEffect } from 'react';

export default function ScrollRevealInit() {
  useEffect(() => {
    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right')
    );

    if (revealEls.length === 0) {
      return;
    }

    const reveal = (el: HTMLElement) => {
      el.classList.add('active');
    };

    const checkReveal = () => {
      revealEls.forEach((el) => {
        if (el.classList.contains('active')) {
          return;
        }

        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 80 && rect.bottom >= 0) {
          reveal(el);
        }
      });
    };

    checkReveal();
    window.addEventListener('scroll', checkReveal, { passive: true });
    window.addEventListener('resize', checkReveal);

    return () => {
      window.removeEventListener('scroll', checkReveal);
      window.removeEventListener('resize', checkReveal);
    };
  }, []);

  return null;
}
