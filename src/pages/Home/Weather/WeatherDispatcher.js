import { useEffect } from "react";
import { useState } from "react";

function WeatherDispatcher() {
  const [temp, setTemp] = useState(Number(localStorage.getItem("temp")) || 0);
  const [humid, setHumid] = useState(
    Number(localStorage.getItem("humid")) || 0
  );
  const [img, setImg] = useState();
  const [location, setLoc] = useState("muhosransk by default");
  const [wind, setWind] = useState();
  const [pressure, setPress] = useState();
  const [uv, setUv] = useState();

  useEffect(() => {
    fetch(
      "http://api.weatherapi.com/v1/current.json?key=95b27957d7b24ef5872124347221006&q=Sumy&aqi=yes"
    )
      .then((res) => res.json())
      .then((res) => {
        setTemp(res.current.temp_c);
        setHumid(res.current.humidity);
        setImg(res.current.condition.icon);
        setLoc(
          res.location.name +
            ", " +
            res.location.region +
            ", " +
            res.location.country
        );
        setWind(res.current.wind_kph);
        setPress(res.current.pressure_mb);
        setUv(res.current.uv);
      });
  });

  return [location, temp, img, humid, wind, pressure, uv];
}

export default WeatherDispatcher;
