import "./DownBanner.scss";
import banner from "../../assets/images/down-banner.png";

const DownBanner = () => {
  return (
    <div className="banner-wrapper">
      <img src={banner} alt="Листайте вниз!" />
    </div>
  );
};

export default DownBanner;
