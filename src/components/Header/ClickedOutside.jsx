import propTypes from "prop-types";
import { useEffect, useRef } from "react";

const ClickedOutside = ({children, exceptionRef, onClick, className}) => {
    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickListener = (event) => {
          let clickedInside = false;
          if (exceptionRef) {
            clickedInside =
              (wrapperRef.current && wrapperRef.current.contains(event.target)) ||
              (exceptionRef.current && exceptionRef.current === event.target) ||
              (exceptionRef.current && exceptionRef.current.contains(event.target));
          } else {
            clickedInside =
              wrapperRef.current && wrapperRef.current.contains(event.target);
          }
      
          if (!clickedInside) onClick();
        };
      
        document.addEventListener('mousedown', handleClickListener);
      
        return () => {
          document.removeEventListener('mousedown', handleClickListener);
        };
      }, [exceptionRef, onClick]);
      
  return (
    <div ref={wrapperRef} className={`${className || ""}`}>
      {children}
    </div>
  );
};

ClickedOutside.propTypes = {
  children: propTypes.node,
  exceptionRef: propTypes.object,
  onClick: propTypes.func,
  className: propTypes.string
};

export default ClickedOutside;
