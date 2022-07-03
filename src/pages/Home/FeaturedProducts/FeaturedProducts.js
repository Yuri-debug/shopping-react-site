import styled from "styled-components";
import FeaturedProductsWrapper from "./FeaturedProductsWrapper";

const FeaturedProductsDiv = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const StyledPara = styled.p`
  color: #fff;
  font-family: ariel;
  font-size: 22px;

  text-transform: uppercase;

  padding: 16px 58px;
  margin: 0;
`;

function FeaturedProducts() {
  return (
    <FeaturedProductsWrapper>
      <FeaturedProductsDiv>
        <StyledPara>Featured Products</StyledPara>
      </FeaturedProductsDiv>
    </FeaturedProductsWrapper>
  );
}

export default FeaturedProducts;
