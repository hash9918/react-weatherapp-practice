import { useState } from "react";
import "./App.css";
import search from "./assests/icons/search.svg";
import { useStateContext } from "./context";
import Background from "./components/Background";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [input, setInput] = useState("");
  const { weather, loc, values, wind, setPlace } = useStateContext();
  const submitCity = () => {
    setPlace(input);
    setInput("");
  };

  // console.log(loc);
  // console.log(weather[0]);
  // console.log(values);
  // console.log(wind);

  return (
    <div className="w-full h-screen  px-8">
      <nav className="w-full p-3 flex justify-between items-center">
        <h1 className="font-bold tracking-wide text-3xl text-black">
          Weather App
        </h1>

        <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2">
          <img src={search} className="w-[1.5rem] h-[1.5rem]" alt="search" />
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                //sumit the form
                submitCity();
              }
            }}
            type="text"
            placeholder="Search City"
            className="focus:outline-none w-full text-lg text-black"
          />
        </div>
      </nav>
      <Background />
      <main className="w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center">
        {weather && loc && values && wind ? (
          <WeatherCard
            place={loc}
            feelslike={values.feels_like}
            temperature={values.temp}
            humidity={values.humidity}
            windspeed={wind.speed}
            iconstring={weather[0].main}
            conditions={weather[0].description}
          />
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
}

export default App;
