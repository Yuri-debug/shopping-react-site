import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setSum } from "../../../redux/reducers/sumReducer";

const SliderBlock = styled.div`
  display: flex;
  // justify-content: space-between;
`;

const Text = styled.div`
  width: 75px;

  color: #afafaf;
  font-family: ariel;
  font-size: 19px;
  margin-left: 10px;
`;

const StyledButton = styled.button`
  background-color: #3cc395;

  color: #ffffff;
  font-family: ariel;
  font-size: 14px;
  text-transform: uppercase;

  border: 1px solid #3cc395;
  border-radius: 5px;

  padding: 9px 14px;

  &:hover {
    border: 1px solid #afafaf;
    color: #000000;
    background-color: #ffffff;
  }
`

function SingleSliderBlock(props) {

  const dispatch = useDispatch()

  return (
    <SliderBlock>
      <img src={props.img} alt="img" />
      <Text>
        <p>{props.text}</p>
        <p>$150</p>
        <StyledButton onClick={() => {dispatch(setSum(150))}}>shop</StyledButton>
      </Text>
    </SliderBlock>
  );
}

export default SingleSliderBlock;
