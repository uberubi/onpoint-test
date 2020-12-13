import "./SecondSlideContent.scss";
import SecondSlideTitle from "./SecondSlideTitle/SecondSlideTitle";
import Bricks from "./Bricks/Bricks";
const SecondSlideContent = ({ slideIndexY }) => {
  return (
    <div
      style={{
        transform: `translateY(-${
          slideIndexY === 0
            ? 10
            : slideIndexY === 1
            ? 0
            : slideIndexY === 2
            ? 20
            : 0
        }vh)`,
        transition: "transform 0.7s",
      }}
      className="second-slide-content"
    >
      <SecondSlideTitle />
      <Bricks />
    </div>
  );
};

export default SecondSlideContent;
