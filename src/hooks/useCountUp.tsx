
import { useEffect, useState, useRef } from 'react';

interface UseCountUpOptions {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  separator?: string;
  preserveValue?: boolean;
}

export const useCountUp = ({
  end,
  start = 0,
  duration = 2000,
  decimals = 0,
  suffix = '',
  prefix = '',
  separator = '',
  preserveValue = false
}: UseCountUpOptions) => {
  const [currentValue, setCurrentValue] = useState(preserveValue ? end : start);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();

  const startAnimation = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    startTimeRef.current = performance.now();
    
    const animate = (currentTime: number) => {
      if (!startTimeRef.current) return;
      
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      const current = start + (end - start) * easedProgress;
      setCurrentValue(current);
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
        setCurrentValue(end);
      }
    };
    
    animationRef.current = requestAnimationFrame(animate);
  };

  const reset = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setCurrentValue(start);
    setIsAnimating(false);
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const formatValue = (value: number) => {
    let formattedValue = value.toFixed(decimals);
    
    if (separator && value >= 1000) {
      formattedValue = value.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      });
    }
    
    return `${prefix}${formattedValue}${suffix}`;
  };

  return {
    value: formatValue(currentValue),
    rawValue: currentValue,
    startAnimation,
    reset,
    isAnimating
  };
};

// Hook specifically for legal statistics with common formats
export const useLegalStatistic = (
  value: string,
  options: Partial<UseCountUpOptions> = {}
) => {
  // Parse common legal statistic formats
  let numericValue = 0;
  let suffix = '';
  let prefix = '';
  
  if (value.includes('%')) {
    numericValue = parseInt(value.replace('%', ''));
    suffix = '%';
  } else if (value.includes('x')) {
    const parts = value.split('-');
    if (parts.length === 2) {
      // Handle ranges like "6-80x"
      numericValue = parseInt(parts[1].replace('x', ''));
      prefix = parts[0] + '-';
      suffix = 'x';
    } else {
      numericValue = parseInt(value.replace('x', ''));
      suffix = 'x';
    }
  } else if (value.includes('+')) {
    numericValue = parseInt(value.replace(/[+%]/g, ''));
    suffix = value.includes('%') ? '%+' : '+';
  } else {
    numericValue = parseInt(value.replace(/[^\d]/g, ''));
  }

  return useCountUp({
    end: numericValue,
    suffix,
    prefix,
    duration: 2000,
    ...options
  });
};
