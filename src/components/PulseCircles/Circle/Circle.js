import "./Circle.scss";

const Circle = ({ d, top, left }) => {
  const circlesStyles = {
    width: d,
    height: d,
  };
  
  return (
      <div className="circle-container" style={{ top, left }}>
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