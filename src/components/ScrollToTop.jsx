import { useState, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-30">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-4 bg-orangePrimary text-white rounded-full shadow-lg hover:bg-orangeSecondary transition duration-300"
        >
          <IoIosArrowUp className='w-4 h-4'/>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
