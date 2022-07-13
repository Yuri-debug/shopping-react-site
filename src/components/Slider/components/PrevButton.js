import React from "react";
import styled from "styled-components";

import logo1 from "../../../assets/Layer 3.png";
import logo2 from "../../../assets/Layer 5.png";
import logo3 from "../../../assets/Layer 6.png";

import buttonImg from "../../../assets/Shape 3 copy 2.png";

const StyledButton = styled.button`
  border: 2px solid #ffffff;
  background-color: #ffffff;
  &:hover {
    border: 2px solid #f1f1f1;
  }
`;

function PrevButton(props) {
  let arr = [logo1, logo2, logo3];
  let intialValue = 0;

  return (
    <StyledButton
      onClick={() =>
        props.setIndex(
          props.indx == arr.length - 1 ? intialValue : props.indx + 1
        )
      }
    >
      <img src={buttonImg} alt="img" />
    </StyledButton>
  );
}

export { PrevButton };
