import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect } from "react";

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

function Weather() {
  const weatherData = useSelector((store) => store.weatherData);
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch({type: "LOAD_DATA"})
  }, [])

  return (
    <StyledDiv>
      <WeatherBlock>
        <HeaderPara>
          Weather Today in{" "}
          {weatherData.location.name +
            ", " +
            weatherData.location.region +
            ", " +
            weatherData.location.country}
        </HeaderPara>
        <TempretureBlock>
          <p>{weatherData.current.feelslike_c} &#8451;</p>
          <TemperturePara>Feels Like</TemperturePara>
        </TempretureBlock>
        <Line />
        <AdditionalInfo>
          <StyledPara>Humidity:</StyledPara>
          <StyledPara> {weatherData.current.humidity}%</StyledPara>
        </AdditionalInfo>
        <Line />
        <AdditionalInfo>
          <StyledPara>Wind:</StyledPara>
          <StyledPara>{weatherData.current.wind_kph} km/h</StyledPara>
        </AdditionalInfo>
        <Line />
        <AdditionalInfo>
          <StyledPara>Pressure:</StyledPara>
          <StyledPara>{weatherData.current.pressure_mb} mb</StyledPara>
        </AdditionalInfo>
        <Line />
        <AdditionalInfo>
          <StyledPara>UV Index:</StyledPara>
          <StyledPara>{weatherData.current.uv_index} of 10</StyledPara>
        </AdditionalInfo>
      </WeatherBlock>
    </StyledDiv>
  );
}

export default Weather;
