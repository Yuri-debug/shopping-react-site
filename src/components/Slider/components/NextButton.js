import React from "react";
import styled from "styled-components";

import logo1 from "../../../imgs/Layer 3.png";
import logo2 from "../../../imgs/Layer 5.png";
import logo3 from "../../../imgs/Layer 6.png";

import buttonImg from "../../../imgs/Shape 3 copy.png";

const StyledButton = styled.button`
  border: 2px solid #ffffff;
  background-color: #ffffff;
  &:hover {
    border: 2px solid #f1f1f1;
  }
`;

function NextButton(props) {
  let arr = [logo1, logo2, logo3];
  let intialValue = 0;

  return (
    <StyledButton
      onClick={() =>
        props.setIndex(
          props.indx == intialValue ? arr.length - 1 : props.indx - 1
        )
      }
    >
      <img src={buttonImg} />
    </StyledButton>
  );
}

export { NextButton };
