import React, { useEffect, useState } from "react";
import { useStateContext } from "../context";
import clear from "../assests/images/Clear.jpg";
import fog from "../assests/images/fog.png";
import cloudy from "../assests/images/Cloudy.jpg";
import snow from "../assests/images/snow.jpg";
import stormy from "../assests/images/Stormy.jpg";
import sunny from "../assests/images/Sunny.jpg";

export default function Background() {
  const { weather } = useStateContext();

  // console.log(weather);

  const [image, setImage] = useState(fog);

  // console.log(weather.main);

  useEffect(() => {
    if (weather?.[0]?.main) {
      // console.log("inside");
      let imagestring = weather[0].main;
      if (imagestring.toLowerCase().includes("clear")) {
        setImage(clear);
      } else if (imagestring.toLowerCase().includes("cloud")) {
        setImage(cloudy);
      } else if (imagestring.toLowerCase().includes("fog")) {
        setImage(fog);
      } else if (imagestring.toLowerCase().includes("snow")) {
        setImage(snow);
      } else if (
        imagestring.toLowerCase().includes("storm") ||
        imagestring.toLowerCase().includes("thunder")
      ) {
        setImage(stormy);
      } else if (imagestring.toLowerCase().includes("sunny")) {
        setImage(sunny);
      }
    }
  }, [weather]);

  return (
    <div>
      <img
        src={image}
        alt="weather-image"
        className="h-screen w-full fixed left-0 top-0 -z-[10]"
      />
    </div>
  );
}
