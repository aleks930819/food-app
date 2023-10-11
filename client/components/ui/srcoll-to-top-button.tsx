'use client';

import { useWindowSize } from '@uidotdev/usehooks';
import { ArrowUp } from 'lucide-react';
import { useState } from 'react';

const ScrollToTopButton = () => {
  const { width, height } = useWindowSize();
  const [isVisible, setIsVisible] = useState(false);

  const scrollHandler = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > height!) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }

  return (
    <div className="fixed bottom-0 right-0 z-50">
      <button
        onClick={scrollHandler}
        className={`flex fixed bottom-20 right-0 hover:bg-primary-light bg-primary-dark text-white p-2  shadow-md transition duration-500 ease-in-out transform overflow-y-auto
      ${isVisible ? 'translate-x-0 opacity-100' : ' opacity-0 translate-x-full pointer-events-none'}
     `}
      >
        <span>
          <ArrowUp size={24} />
        </span>
      </button>
    </div>
  );
};

export default ScrollToTopButton;
