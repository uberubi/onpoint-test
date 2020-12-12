import "./Circle.scss";

const Circle = ({ d, top, left, label, labelTop, labelLeft }) => {
  const circlesStyles = {
    width: d,
    height: d,
  };

  const circlesPositionStyles = {
    top, left
  }

  const labelPositionStyles = {
    top: labelTop,
    left: labelLeft
  }
  
  return (
      <div className="circle-container" style={circlesPositionStyles}>
        <p className='circle-container__label' style={labelPositionStyles}>{label}</p>
        <div
          className="circle-container__circle1"
          style={circlesStyles}
        ></div>
        <div
          className="circle-container__circle2"
          style={circlesStyles}
        ></div>
        <div
          className="circle-container__circle3"
          style={circlesStyles}
        ></div>
      </div>
  );
};

export default Circle;