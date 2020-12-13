import './FirstSlideContent.scss'
import PulseCircles from './PulseCircles/PulseCircles'
import FirstSlideTitle from './FirstSlideTitle/FirstSlideTitle'

const FirstSlideContent = ({slideIndexY}) => {
  return ( 
    <div 
    style={{
      transform: `translateY(-${slideIndexY=== 1 ? 20 : 0}vh)`,
      transition: "transform 0.7s",
    }}
    className='first-slide-content-wrapper'>
      <FirstSlideTitle />
      <PulseCircles />
    </div>
   );
}
 
export default FirstSlideContent;