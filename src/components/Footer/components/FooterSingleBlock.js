import styled from "styled-components";

const StyledDiv = styled.div``;

const Header = styled.p`
  margin-bottom: 20px;

  font-family: ariel;
  font-size: 19px;
  font-weight: 600;

  text-transform: uppercase;
`;

const StyledPara = styled.p`
  font-family: ariel;
  font-size: 14px;
  &:hover {
    color: #000;
    transition: 0.3s;
  }
`;

function FooterSingleBlock() {
  return (
    <StyledDiv>
      <Header>fEATURED sALE</Header>
      <StyledPara>Alexis Hudson</StyledPara>
      <StyledPara>American Apparel</StyledPara>
      <StyledPara>Ben Sherman</StyledPara>
      <StyledPara>Big Buddha</StyledPara>
    </StyledDiv>
  );
}

export { FooterSingleBlock };
