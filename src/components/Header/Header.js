import { HeaderWrapper } from "./components/HeaderWrapper";
import { TopLogoWrapper } from "./components/TopLogoWrapper";
import { TopLogo } from "./components/TopLogo";
import { TopNavWrapper } from "./components/TopNavWrapper";
import { TopNav } from "./components/TopNav";

import logo from "../../imgs/Aditii.png";
import cart from "../../imgs/Shape 2.png";

import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetSum } from "../../redux/reducers/sumReducer";
import { setInput } from "../../redux/reducers/inputReducer";

const StyledInput = styled.input`
  width: 435px;
  height: 20px;
  border: 1px solid #e1e1e1;
  align-self: center;
`;

const Cart = styled.div`
  display: flex;
`;

const CartImg = styled.img`
  height: 38px;
  width: 42px;
`;

const ShopSum = styled.p`
  margin-left: 15px;
`;

const StyledButton = styled.div`
  border: none;
  color: #ffffff;
  font-family: ariel;
  font-size: 18px;
  padding: 7px 9px;
  &:hover {
    color: #000;
    transition: 0.3s;
  }
`;

const ResetButton = styled.button`
  margin-left: 15px;

  border: #fff;
  background-color: #fff;

  font-family: ariel;
  font-size: 16px;

  text-transform: uppercase;

  &:hover {
    transition: 0.3s;
    color: red;
  }
`;

const Line = styled.div`
  border-left: 2px solid #ffffff;
  height: 18px;
  margin-top: 7px;
`;

const StyledLink = styled(Link)`
  border: none;
  color: #ffffff;
  font-family: ariel;
  font-size: 18px;
  padding: 7px 7px;
  text-decoration: none;
  &:hover {
    color: #000;
    transition: 0.3s;
  }
`;

function Header() {
  const dispatch = useDispatch();
  const sumItems = useSelector((store) => store.sum.sum);
  const getInputValue = (event) => {
    dispatch(setInput(event.target.value));
  };
  return (
    <HeaderWrapper>
      <TopLogoWrapper>
        <TopLogo>
          <img src={logo} alt="img" />
          <StyledInput type="text" onChange={getInputValue} />
          <Cart>
            <CartImg src={cart} alt="img" />
            <ShopSum>
              {"$" + sumItems}
              <ResetButton
                onClick={() => {
                  dispatch(resetSum());
                }}
              >
                reset
              </ResetButton>
            </ShopSum>
          </Cart>
        </TopLogo>
      </TopLogoWrapper>
      <TopNavWrapper>
        <TopNav>
          <StyledLink to="/">HOME</StyledLink>
          <Line />
          <StyledLink to="/salebin">SALE</StyledLink>
          <Line />
          <StyledButton>HANDBAGS</StyledButton>
          <Line />
          <StyledButton>WALLETS</StyledButton>
          <Line />
          <StyledButton>ACCESSORIES</StyledButton>
          <Line />
          <StyledButton>MENS STORE</StyledButton>
          <Line />
          <StyledButton>SHOES</StyledButton>
          <Line />
          <StyledButton>VINTAGE</StyledButton>
          <Line />
          <StyledButton>SERVICES</StyledButton>
          <Line />
          <StyledButton>CONTACT US</StyledButton>
        </TopNav>
      </TopNavWrapper>
    </HeaderWrapper>
  );
}

export default Header;
