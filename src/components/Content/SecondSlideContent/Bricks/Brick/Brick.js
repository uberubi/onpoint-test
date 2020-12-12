import './Brick.scss'

const Brick = ({image, ml, mt}) => {
  const brickPositionStyle={
    top: mt,
    left: ml
  }
  return ( 
    <div style={brickPositionStyle} className='brick-container'>
      <img src={image} alt='brick' />
    </div>
   );
}
 
export default Brick;
