import { useState, useEffect } from 'react';

const useScroll = (scrollOffset) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY >= scrollOffset) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollOffset]);

  return hasScrolled;
};

export default useScroll;
