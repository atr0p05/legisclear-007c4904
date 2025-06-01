
import { useState, useEffect, useRef } from 'react';

interface UseTypeWriterOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
  loop?: boolean;
  cursor?: string;
  showCursor?: boolean;
}

export const useTypeWriter = ({
  words,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
  loop = true,
  cursor = '|',
  showCursor = true
}: UseTypeWriterOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[currentWordIndex];
    
    const typeWriter = () => {
      if (isWaiting) {
        setIsWaiting(false);
        setIsDeleting(true);
        return;
      }

      if (!isDeleting) {
        // Typing
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
          timeoutRef.current = setTimeout(typeWriter, typeSpeed);
        } else {
          // Finished typing, wait before deleting
          setIsWaiting(true);
          timeoutRef.current = setTimeout(typeWriter, delayBetweenWords);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
          timeoutRef.current = setTimeout(typeWriter, deleteSpeed);
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          if (loop || currentWordIndex < words.length - 1) {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      }
    };

    timeoutRef.current = setTimeout(typeWriter, typeSpeed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [words, currentWordIndex, displayText, isDeleting, isWaiting, typeSpeed, deleteSpeed, delayBetweenWords, loop]);

  const text = showCursor ? `${displayText}${cursor}` : displayText;

  const reset = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setDisplayText('');
    setCurrentWordIndex(0);
    setIsDeleting(false);
    setIsWaiting(false);
  };

  return { text, reset, isComplete: !loop && currentWordIndex === words.length - 1 && displayText === words[words.length - 1] };
};

// Simple single text typewriter
export const useSimpleTypeWriter = (
  text: string,
  speed: number = 100,
  startDelay: number = 0
) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const start = () => {
    if (hasStarted) return;
    setHasStarted(true);
    
    setTimeout(() => {
      let currentIndex = 0;
      const timer = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(timer);
          setIsComplete(true);
        }
      }, speed);
    }, startDelay);
  };

  const reset = () => {
    setDisplayText('');
    setIsComplete(false);
    setHasStarted(false);
  };

  return { displayText, isComplete, start, reset, hasStarted };
};
