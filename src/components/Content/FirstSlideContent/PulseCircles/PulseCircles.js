import "./PulseCircles.scss";
import Circle from "./Circle/Circle";

const PulseCircles = () => {
  return (
    <div
      className="pulse-circles-container"
    >
      <Circle labelTop='-6px' labelLeft='48px' top="269px" left="578px" d="20px" label={"Цель по HbA1c"} />
      <Circle labelTop='-42px' labelLeft='-57px' top="425px" left="280px" d="14px" label={"Гипогликемия"} />
      <Circle labelTop='-35px' labelLeft='-111px' top="530px" left="482px" d="8px" label={"Осложнения СД"} />
      <Circle labelTop='-38px' labelLeft='-34px' top="512px" left="825px" d="8px" label={"СС риски"} />
    </div>
  );
};

export default PulseCircles;
