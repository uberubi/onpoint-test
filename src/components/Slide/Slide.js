import './Slide.scss'

const Slide = ({ background, children }) => {

  return (
    <div
      className="slide-wrapper"
      style={{ backgroundImage: `url(${background})` }}
    >{children}</div>
  );
};

export default Slide;
