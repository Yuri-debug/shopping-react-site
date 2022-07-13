import { BannerDiv } from "./components/BannerDiv";
import { BannerImg } from "./components/BannerImg";
import { BannerText } from "./components/BannerText";
import { BannerWrapper } from "./components/BannerWrapper";

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
