
import { useEffect, useRef, useState } from 'react';

interface AnimationSequenceOptions {
  delay?: number;
  stagger?: number;
  triggerOnView?: boolean;
}

export const useAnimationSequence = <T extends HTMLElement = HTMLDivElement>(
  itemCount: number,
  { delay = 0, stagger = 100, triggerOnView = true }: AnimationSequenceOptions = {}
) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isTriggered, setIsTriggered] = useState(!triggerOnView);
  const containerRef = useRef<T>(null);

  useEffect(() => {
    if (!triggerOnView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isTriggered) {
          setIsTriggered(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [triggerOnView, isTriggered]);

  useEffect(() => {
    if (!isTriggered) return;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setActiveIndex((prev) => {
          if (prev >= itemCount - 1) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, stagger);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isTriggered, itemCount, delay, stagger]);

  return { containerRef, activeIndex, isTriggered };
};

export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const parallax = scrolled * speed;
        setOffset(parallax);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { elementRef, offset };
};
