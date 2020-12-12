import "./SecondSlideContent.scss";
import SecondSlideTitle from './SecondSlideTitle/SecondSlideTitle'
import Bricks from './Bricks/Bricks'
const SecondSlideContent = ({ slideIndexY }) => {
  console.log('SECOND SLIDE INDEX', slideIndexY )
  return (
    <div
      style={{
        transform: `translateY(-${slideIndexY === 2 ? slideIndexY * 30 : 0}vh)`,
        // transform: `translateY(-${slideIndexY * 30}vh)`,
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
