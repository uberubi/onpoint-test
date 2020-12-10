import { useEffect, useRef, useState } from "react";
import "./InputRange.scss";

const InputRange = ({ getInputProgressWidth }) => {
  const [width, setWidth] = useState(1);
  const [isTransition, setIsTransition] = useState(false)
  const input = useRef();

  useEffect(() => {
    getInputProgressWidth(width);
  }, [width, getInputProgressWidth]);

  function onTouchMove(e) {
    const rect = input.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    if (x >= 0 && x <= 620) {
      setWidth(x);
    }
    setIsTransition(false)
  }

  function onTouchEnd(e) {
    if (width >= 155 && width <= 465) setWidth(310);
    if (width <= 155) setWidth(1);
    if (width >= 465) setWidth(620);
    setIsTransition(true)
  }
  
  return (
    <div ref={input} className="slider-range">
      <div className="slider-range__track">
        <div style={{ width, transition: isTransition ? 'width 0.5s' : 'none' }} className="slider-range__track-progress">
          <div
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="slider-range__track-progress__icon"
          />
        </div>
      </div>
      <div className="slider-range__labels">
        <p>1988</p>
        <p>2009</p>
        <p>2016</p>
      </div>
    </div>
  );
};

export default InputRange;
