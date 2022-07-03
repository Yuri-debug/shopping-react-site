import BannerDiv from "./Banner/BannerDiv";
import BannerWrapper from "./Banner/BannerWrapper";
import BannerText from "./Banner/BannerText";
import BannerImg from "./Banner/BannerImg";

function Banner() {
  return (
    <BannerWrapper>
      <BannerDiv>
        <BannerImg />
        <BannerText />
      </BannerDiv>
    </BannerWrapper>
  );
}

export default Banner;
