import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import propTypes from "prop-types";

const ScrollToTop = ({ scrollableRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (scrollableRef && scrollableRef.current) {
        // Jika ada scrollableRef, gunakan scrollable elemen
        const scrollableDiv = scrollableRef.current;
        if (scrollableDiv.scrollTop > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        // Jika tidak ada scrollableRef, gunakan window
        if (window.pageYOffset > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    if (scrollableRef && scrollableRef.current) {
      const scrollableDiv = scrollableRef.current;
      scrollableDiv.addEventListener("scroll", toggleVisibility);

      return () => scrollableDiv.removeEventListener("scroll", toggleVisibility);
    } else {
      window.addEventListener("scroll", toggleVisibility);

      return () => window.removeEventListener("scroll", toggleVisibility);
    }
  }, [scrollableRef]);

  const scrollToTop = () => {
    if (scrollableRef && scrollableRef.current) {
      scrollableRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-30">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3.5 bg-orangePrimary text-white rounded-full shadow-lg hover:bg-orangeSecondary transition duration-300"
        >
          <IoIosArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

ScrollToTop.propTypes = {
  scrollableRef: propTypes.object,
};

export default ScrollToTop;
