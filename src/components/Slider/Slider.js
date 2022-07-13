import styled from "styled-components";
import { SingleSliderBlock } from "./components/SliderBlock";
import { PrevButton } from "./components/PrevButton";
import { NextButton } from "./components/NextButton";

import img1 from "../../assets/Layer 3.png";
import img2 from "../../assets/Layer 5.png";
import img3 from "../../assets/Layer 6.png";
import { useEffect, useState } from "react";

const StyledSlider = styled.div`
  margin: 0 auto;
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 25px 30px;
`;

function Slider() {
  let intialValue = 0;

  const [indx, setIndex] = useState(
    Number(localStorage.getItem("indx")) || intialValue
  );

  let data = [
    { id: 1, text: "BRANDED SHOES", img: img1 },
    { id: 2, text: "BRANDED TSHIRTS", img: img2 },
    { id: 3, text: "BRANDED BRIDGES", img: img3 },
    { id: 4, text: "BRANDED SHOES", img: img1 },
    { id: 5, text: "BRANDED TSHIRTS", img: img2 },
    { id: 6, text: "BRANDED BRIDGES", img: img3 },
  ];

  useEffect(() => {
    localStorage.setItem("indx", indx);
  }, [indx]);

  return (
    <Wrapper>
      <PrevButton indx={indx} setIndex={setIndex} />
      <StyledSlider>
        <SingleSliderBlock img={data[indx].img} text={data[indx].text} />
        <SingleSliderBlock
          img={data[indx + 1].img}
          text={data[indx + 1].text}
        />
        <SingleSliderBlock
          img={data[indx + 2].img}
          text={data[indx + 2].text}
        />
      </StyledSlider>
      <NextButton indx={indx} setIndex={setIndex} />
    </Wrapper>
  );
}

export default Slider;
