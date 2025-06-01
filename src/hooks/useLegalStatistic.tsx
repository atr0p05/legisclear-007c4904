
import { useEffect, useState, useRef } from 'react';

interface UseLegalStatisticOptions {
  duration?: number;
}

export const useLegalStatistic = (
  value: string,
  options: UseLegalStatisticOptions = {}
) => {
  const { duration = 2000 } = options;
  const [displayValue, setDisplayValue] = useState('0');
  const [hasStarted, setHasStarted] = useState(false);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();

  // Parse the target value
  let targetNumeric = 0;
  let suffix = '';
  let prefix = '';
  
  if (value.includes('%')) {
    const match = value.match(/(\d+)%(\+?)/);
    if (match) {
      targetNumeric = parseInt(match[1]);
      suffix = '%' + (match[2] || '');
    }
  } else if (value.includes('x')) {
    const parts = value.split('-');
    if (parts.length === 2) {
      // Handle ranges like "6-80x"
      targetNumeric = parseInt(parts[1].replace('x', ''));
      prefix = parts[0] + '-';
      suffix = 'x';
    } else {
      targetNumeric = parseInt(value.replace('x', ''));
      suffix = 'x';
    }
  } else if (value.includes('+')) {
    targetNumeric = parseInt(value.replace(/[+%]/g, ''));
    suffix = value.includes('%') ? '%+' : '+';
  } else {
    targetNumeric = parseInt(value.replace(/[^\d]/g, ''));
  }

  const startAnimation = () => {
    if (hasStarted) return;
    
    setHasStarted(true);
    startTimeRef.current = performance.now();
    
    const animate = (currentTime: number) => {
      if (!startTimeRef.current) return;
      
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      const current = Math.floor(targetNumeric * easedProgress);
      setDisplayValue(`${prefix}${current}${suffix}`);
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayValue(`${prefix}${targetNumeric}${suffix}`);
      }
    };
    
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return {
    value: displayValue,
    startAnimation,
    hasStarted
  };
};
