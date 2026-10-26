import { useEffect, useRef } from 'react';

/**
 * Checks if the user prefers reduced motion.
 */
export function isReducedMotionPreferred() {
  if (typeof window === 'undefined') return true;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Checks if the device has a fine pointer (desktop mouse/trackpad vs touch).
 */
export function isFinePointer() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(pointer: fine) and (hover: hover)').matches;
}

/**
 * Hook for lightweight 3D perspective card tilt with cursor-following radial highlight.
 * Automatically disabled on touch screens and when reduced motion is preferred.
 */
export function useCardTilt(options = {}) {
  const { maxTilt = 4, scale = 1.01 } = options;
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || !isFinePointer() || isReducedMotionPreferred()) return;

    let rafId = null;

    const handleMouseMove = (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Set CSS variables for radial gradient illumination
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        // Compute tilt angles (normalized from -1 to 1)
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const percentX = (x - centerX) / centerX;
        const percentY = (y - centerY) / centerY;

        const tiltX = -percentY * maxTilt;
        const tiltY = percentX * maxTilt;

        card.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`;
      });
    };

    const handleMouseLeave = () => {
      if (rafId) cancelAnimationFrame(rafId);
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    card.addEventListener('mousemove', handleMouseMove, { passive: true });
    card.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.style.transform = '';
    };
  }, [maxTilt, scale]);

  return cardRef;
}

/**
 * Hook for subtle magnetic movement on buttons on desktop.
 * Automatically disabled on touch screens and when reduced motion is preferred.
 */
export function useMagnetic(options = {}) {
  const { strength = 0.25, max = 5 } = options;
  const targetRef = useRef(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target || !isFinePointer() || isReducedMotionPreferred()) return;

    let rafId = null;

    const handleMouseMove = (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - centerX) * strength;
        const deltaY = (e.clientY - centerY) * strength;

        const clampedX = Math.max(-max, Math.min(max, deltaX));
        const clampedY = Math.max(-max, Math.min(max, deltaY));

        target.style.transform = `translate3d(${clampedX.toFixed(1)}px, ${clampedY.toFixed(1)}px, 0)`;
      });
    };

    const handleMouseLeave = () => {
      if (rafId) cancelAnimationFrame(rafId);
      target.style.transform = 'translate3d(0, 0, 0)';
    };

    target.addEventListener('mousemove', handleMouseMove, { passive: true });
    target.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      target.removeEventListener('mousemove', handleMouseMove);
      target.removeEventListener('mouseleave', handleMouseLeave);
      target.style.transform = '';
    };
  }, [strength, max]);

  return targetRef;
}

/**
 * Hook to reveal an element once when it scrolls into view.
 * Will not re-animate if the user scrolls past and back.
 */
export function useScrollReveal(options = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -40px 0px' } = options;
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (isReducedMotionPreferred()) {
      el.classList.add('revealed');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('revealed');
            observer.unobserve(el); // Animate once only!
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return ref;
}
