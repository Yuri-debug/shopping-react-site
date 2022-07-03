import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setSum } from "../../../redux/reducers/sumReducer";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 410px;
  
  color: #ffffff;
  font-family: ariel;
  h1 & {
     font-size: 43px; 
  }
  p & {
      font-size: 13px;
  }
`;

const StyledButton = styled.button`
  width: 139px;
  height: 46px;

  font-family: ariel;
  font-size: 19px;
  color: #ffffff;
  background-color: #37c6b5;

  margin-top: 29px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  &:hover {
      border: none;
      background-color: #ffffff;
      color: #000;
      transition: 0.3s;
  }
`

function BannerText() {

  const dispatch = useDispatch()

  return (
    <StyledDiv>
      <h1>COWHIDE STANDARD CREW</h1>
      <p>
        White coloured, short-sleeved, printed T-shirt for men by Levi's. This
        crew-neck T-shirt is made of organic cotton and comes in a regular fit.
      </p>
      <StyledButton onClick={() => {dispatch(setSum(300))}}>SHOP NOW</StyledButton>
    </StyledDiv>
  );
}

export default BannerText
