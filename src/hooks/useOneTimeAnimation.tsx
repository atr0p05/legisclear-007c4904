
import { useEffect, useRef, useState } from 'react';

interface UseOneTimeAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useOneTimeAnimation = <T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  rootMargin = '0px'
}: UseOneTimeAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasTriggered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setIsVisible(true);
          setHasTriggered(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, hasTriggered]);

  return { elementRef, isVisible, hasTriggered };
};

// Hook for hero section visibility (for navigation)
export const useHeroVisibility = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = heroRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hero is considered "visible" if any part of it is in view
        setIsHeroVisible(entry.intersectionRatio > 0.1);
      },
      {
        threshold: [0, 0.1, 0.5, 1],
        rootMargin: '-50px 0px 0px 0px' // Offset to trigger slightly before hero completely disappears
      }
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, []);

  return { heroRef, isHeroVisible };
};
