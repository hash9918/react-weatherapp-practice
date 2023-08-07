import { useContext, createContext, useState, useEffect } from "react";

import axios from "axios";

const stateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const temp = 9919;

  const [values, setValues] = useState({});

  const [place, setPlace] = useState("kanpur");
  const apiKey = process.env.REACT_APP_API_KEY;

  const [loc, setLocation] = useState("");

  const [wind, setWind] = useState({});

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid={apikey}&units=metric`
        );

        setValues(response.data.main);
        setWeather(response.data.weather);
        setLocation(response.data.name);
        setWind(response.data.wind);
        // setValues(response.data.main);

        // console.log(weather);
      } catch (error) {
        console.log(error);
        alert("some error is there");
      }
    };
    fetchWeatherData();
  }, [place]);
  // useEffect(() => {
  //   console.log(weather);
  // }, [weather]);

  return (
    <stateContext.Provider value={{ weather, wind, setPlace, loc, values }}>
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => {
  return useContext(stateContext);
};
