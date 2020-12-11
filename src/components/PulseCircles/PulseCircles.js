import './PulseCircles.scss'
import Circle from './Circle/Circle'

const PulseCircles = () => {
  return (
    <div className="pulse-circles-container">
      {/* <Circle top="0" left="0" d="20px" />
      <Circle top="0" left="0" d="14px" />
      <Circle top="0" left="0" d="8px" />
      <Circle top="0" left="0" d="8px" /> */}
      <Circle top="36.5%" left="56.7%" d="20px" />
      <Circle top="56.5%" left="27.4%" d="14px" />
      <Circle top="70%" left="47%" d="8px" />
      <Circle top="68%" left="80.4%" d="8px" />
    </div>
  );
};

export default PulseCircles;
