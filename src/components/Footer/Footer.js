import styled from "styled-components";
import { FooterSingleBlock } from "./components/FooterSingleBlock";
import { FooterWrapper } from "./components/FooterWrapper";

const FooterBlock = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 16px 0;

  color: #fff;

  display: grid;
  grid-template-columns: 130px 130px 130px 130px;
  column-gap: 100px;

  justify-content: center;
`

function Footer() {
    return (
        <FooterWrapper>
            <FooterBlock>
                <FooterSingleBlock />
                <FooterSingleBlock />
                <FooterSingleBlock />
                <FooterSingleBlock />
            </FooterBlock>
        </FooterWrapper>
    )
}

export default Footer