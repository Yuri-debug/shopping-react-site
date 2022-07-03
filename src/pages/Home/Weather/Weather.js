import styled from "styled-components";
import WeatherDispatcher from "./WeatherDispatcher";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;

  width: 70%;
  margin: 0 auto;
  padding: 100px 0;
  color: #000;
`;
const WeatherBlock = styled.div`
  width: 500px;
  margin: 0 auto;
  font-family: ariel;
`;

const HeaderPara = styled.p`
  font-size: 22px;
`;

const TempretureBlock = styled.div`
  margin: 50px 0;

  font-size: 38px;

  & p {
    margin: 0;
  }
`;

const TemperturePara = styled.p`
  margin-top: 0;
  font-size: 18px;
`;

const Line = styled.div`
  width: 500px;

  border-bottom: 2px solid #e7e7e7;
`;
const StyledPara = styled.p`
  font-size: 20px;
`;
const AdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Player = styled.div`
  align-self: center;
`;

function Weather() {
  return (
    <StyledDiv>
      <WeatherBlock>
        <HeaderPara>Weather Today in {WeatherDispatcher()[0]}</HeaderPara>
        <TempretureBlock>
          <p>{WeatherDispatcher()[1]} &#8451;</p>
          <TemperturePara>Feels Like</TemperturePara>
        </TempretureBlock>
        <Line />
        <AdditionalInfo>
          <StyledPara>Humidity:</StyledPara>
          <StyledPara> {WeatherDispatcher()[3]}%</StyledPara>
        </AdditionalInfo>
        <Line />
        <AdditionalInfo>
          <StyledPara>Wind:</StyledPara>
          <StyledPara>{WeatherDispatcher()[4]} km/h</StyledPara>
        </AdditionalInfo>
        <Line />
        <AdditionalInfo>
          <StyledPara>Pressure:</StyledPara>
          <StyledPara>{WeatherDispatcher()[5]} mb</StyledPara>
        </AdditionalInfo>
        <Line />
        <AdditionalInfo>
          <StyledPara>UV Index:</StyledPara>
          <StyledPara>{WeatherDispatcher()[6]} of 10</StyledPara>
        </AdditionalInfo>
      </WeatherBlock>
    </StyledDiv>
  );
}

export default Weather;
