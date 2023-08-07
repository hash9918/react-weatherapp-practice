import React, { useEffect, useState } from "react";
import { useDate } from "../Utils/UseDate";
import sun from "../assests/icons/sun.png";
import second from "../index.css";
import cloud from "../assests/icons/cloud.png";

import fog from "../assests/icons/fog.png";

import snow from "../assests/icons/snow.png";

import storm from "../assests/icons/storm.png";
import wind from "../assests/icons/windy.png";
import rain from "../assests/icons/rain.png";

export default function WeatherCard(props) {
  const [icons, setIcons] = useState(sun);
  const {
    temperature,
    windspeed,
    humidity,
    place,
    feelslike,
    iconstring,
    conditions,
  } = props;

  console.log(iconstring);

  const { time } = useDate();

  useEffect(() => {
    if (iconstring) {
      if (iconstring.toLowerCase().includes("cloud")) {
        setIcons(cloud);
      } else if (
        iconstring.toLowerCase().includes("rain") ||
        iconstring.toLowerCase().includes("light rain")
      ) {
        setIcons(rain);
      } else if (iconstring.toLowerCase().includes("sun")) {
        setIcons(sun);
      } else if (iconstring.toLowerCase().includes("fog")) {
        setIcons(fog);
      } else if (iconstring.toLowerCase().includes("snow")) {
        setIcons(snow);
      } else if (iconstring.toLowerCase().includes("storm")) {
        setIcons(storm);
      } else if (
        iconstring.toLowerCase().includes("wind") ||
        iconstring.toLowerCase().includes("haze")
      ) {
        setIcons(wind);
      }
    }
  }, [iconstring]);

  return (
    <div className="min-w-[22rem] w-[22rem] h-[30rem] glassCard p-4  ">
      <div className="flex w-full just-center items-center gap-4 mt-12 mb-4">
        <img src={icons} alt="weather_icon" />
        <p className="font-bold text-5xl flex justify-center items-center">
          {temperature} &deg;C
        </p>
      </div>
      <div className="font-bold text-center text-xl">{place}</div>
      <div className="w-full flex justify-between mt-4 items-center">
        <p className="flex-1 text-center p-2"> {new Date().toDateString()}</p>
        <p className="flex-1 text-center p-2"> {time}</p>
      </div>

      <div className="w-full flex justify-between items-center mt-4 gap-4">
        <p className="flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg">
          Wind Speed <p className="font-normal">{windspeed}</p>
        </p>
        <p className="flex-1 text-center p-2 font-bold rounded-lg bg-green-600">
          Humidity <p className="font-normal">{humidity}</p>
        </p>
      </div>
      <div className="w-full p-3 mt-4 flex justify-between items-center">
        <p className="font-semibold text-lg">FeelsLike</p>
        <p className="text-lg">{feelslike}</p>
      </div>
      <hr className="bg-slate-600" />
      <div className="w-full p-4 flex justify-center items-center text-3xl font-semibold capitalize ">
        {conditions}
      </div>
    </div>
  );
}
