import React from "react";

import styled from "styled-components";
import Rating from "react-rating";

import img1 from "../../../assets/star1.png";
import img2 from "../../../assets/star2.png";
import { useDispatch } from "react-redux";
import { makeDelete } from "../../../redux/reducers/deleteItemReducer";
import { setSum } from "../../../redux/reducers/sumReducer";

const StyledDiv = styled.div`
  border: 1px solid #e4e4e4;
  border-bottom: 2px solid #e4e4e4;
  &:hover {
    background-color: #f0f0f0;
    border-bottom: 2px solid #3cc395;

    transition: 0.3s;
  }
`;

const BlockWrapper = styled.div`
  padding: 30px 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImg = styled.img`
  margin-bottom: 20px;
`;

const NamePara = styled.p`
  margin-bottom: 10px;
  font-family: ariel;
  font-size: 19px;
  font-weight: 600;

  color: #afafaf;

  text-transform: uppercase;
  text-align: center;
`;

const ShopBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ShopPara = styled.p`
  font-family: ariel;
  font-size: 19px;
  font-weight: 600;

  color: #afafaf;
`;

const ShopButton = styled.button`
  height: 34px;

  align-self: center;

  background-color: #3cc395;

  color: #ffffff;
  font-family: ariel;
  font-size: 14px;
  text-transform: uppercase;

  border: 1px solid #3cc395;
  border-radius: 5px;

  margin-left: 15px;

  &:hover {
    border: 1px solid #afafaf;
    color: #000000;
    background-color: #ffffff;
  }
`;

const DeleteButton = styled.button`
  margin: 0 0 50px 150px;

  border: #fff;
  background-color: #fff;

  font-family: ariel;
  font-size: 16px;

  text-transform: uppercase;

  &:hover {
    background-color: #f0f0f0;
    transition: 0.3s;
    color: red;
  }
`;

function ProductsSingleBlock(props) {
  const dispatch = useDispatch();
  return (
    <StyledDiv>
      <BlockWrapper>
        <DeleteButton
          onClick={() => {
            dispatch(makeDelete(props.id));
          }}
        >
          Delete
        </DeleteButton>
        <StyledImg src={props.img} alt="img"></StyledImg>
        <NamePara>{props.text}</NamePara>
        <Rating
          emptySymbol={<img src={img1} alt="img" />}
          fullSymbol={<img src={img2} alt="img" />}
        />
        <ShopBlock>
          <ShopPara>$300</ShopPara>
          <ShopButton
            onClick={() => {
              dispatch(setSum(300));
            }}
          >
            shop now
          </ShopButton>
        </ShopBlock>
      </BlockWrapper>
    </StyledDiv>
  );
}

export { ProductsSingleBlock };
