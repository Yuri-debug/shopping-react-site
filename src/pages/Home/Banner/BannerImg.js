import styled from "styled-components";

import bannerImg from "../../../imgs/Layer 1.png";

const StyledImg = styled.img`
  width: 278px;
  height: 334px;
`

function BannerImg() {
    return <StyledImg src={bannerImg} alt="img" />
}

export default BannerImg