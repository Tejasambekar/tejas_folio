import { useState, useEffect, useCallback } from 'react';

interface UseTypewriterOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
  loop?: boolean;
}

export function useTypewriter({
  words,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
  loop = true
}: UseTypewriterOptions) {
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      setDisplayedText(currentWord.substring(0, displayedText.length - 1));
    } else {
      setDisplayedText(currentWord.substring(0, displayedText.length + 1));
    }
  }, [displayedText, isDeleting, wordIndex, words]);

  useEffect(() => {
    if (isComplete && !loop) return;

    const currentWord = words[wordIndex];

    if (!isDeleting && displayedText === currentWord) {
      // Word is complete, wait before deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenWords);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText === '') {
      // Move to next word
      setIsDeleting(false);
      const nextIndex = (wordIndex + 1) % words.length;
      setWordIndex(nextIndex);
      
      if (nextIndex === 0 && !loop) {
        setIsComplete(true);
        return;
      }
    }

    const speed = isDeleting ? deleteSpeed : typeSpeed;
    const timeout = setTimeout(tick, speed);
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delayBetweenWords, loop, tick, isComplete]);

  return { displayedText, isComplete };
}
