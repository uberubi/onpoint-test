import { useState } from "react";
import "./App.scss";
import Slide from "./components/Slide/Slide";
import InputRange from "./components/InputRange/InputRange";
import slideFirstBackground from "./assets/images/slider-first-background.png";
import slideSecondBackground from "./assets/images/slider-second-background.png";
import slideThirdFirstBackground from "./assets/images/slider-third-first-background.png";
import slideThirdSecondBackground from "./assets/images/slider-third-second-background.png";
import slideThirdThirdBackground from "./assets/images/slider-third-third-background.png";

const App = () => {
  const [slideIndexY, setSlideIndexY] = useState(0);
  const [slideIndexX, setSlideIndexX] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const onTouchStart = (e) => {
    setTouchStart(e.touches[0].clientY);
  };

  const onTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientY;
    const delta = touchEnd - touchStart;
    if (delta < -50 && delta !== 0 && slideIndexY < 2) setSlideIndexY((prev) => prev + 1);
    if (delta > 50 && slideIndexY > 0) setSlideIndexY((prev) => prev - 1);
  };

  const getInputProgressWidth = (width) => {
    if (width <= 150) setSlideIndexX(0);
    if (width > 150 && width < 465) setSlideIndexX(1);
    if (width >= 465) setSlideIndexX(2);
  };

  return (
    <div
      style={{ transform: `translateY(-${slideIndexY}00vh)` }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="app"
    >
      <Slide background={slideFirstBackground} />
      <Slide background={slideSecondBackground} />
      <div
        className="app-horizontal-slider"
        style={{ transform: `translateX(-${slideIndexX}00vw)` }}
      >
        <div className="app-horizontal-slider__slides">
          <Slide background={slideThirdFirstBackground} />
          <Slide background={slideThirdSecondBackground} />
          <Slide background={slideThirdThirdBackground} />
        </div>
      </div>
      <InputRange getInputProgressWidth={getInputProgressWidth} />
    </div>
  );
};
export default App;
