import "./Bricks.scss";
import Brick from "./Brick/Brick";
import brickOne from "../../../../assets/images/second-slide-brick-one.png";
import brickTwo from "../../../../assets/images/second-slide-brick-two.png";
import brickThree from "../../../../assets/images/second-slide-brick-three.png";
import brickFour from "../../../../assets/images/second-slide-brick-four.png";

const Bricks = () => {
  return (
    <div className="bricks-container">
      <Brick image={brickOne} mt={'20vh'} ml={'8vw'}/>
      <Brick image={brickTwo} mt={'56vh'} ml={'22vw'} />
      <Brick image={brickThree} mt={'74vh'} ml={'69vw'}/>
      <Brick image={brickFour} mt={'4vh'} ml={'86vw'}/>
    </div>
  );
};

export default Bricks;
