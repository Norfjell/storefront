import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export default function WeatherWidget() {
  const [location, setLocation] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [icon, setIcon] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
        )
          .then((res) => res.json())
          .then((data) => {
            setLocation(data.name);
            setTemperature(Math.round(data.main.temp));
            setIcon(data.weather[0].icon);
          });
      },
      (error) => {
        console.error("Geolocation not allowed", error);
      }
    );
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      {temperature !== null && (
        <>
          <img
            src={`https://openweathermap.org/img/wn/${icon}.png`}
            alt="weather icon"
            className="w-5 h-5"
          />
          <span>{temperature}°C</span>
          <span className="text-xs text-gray-500">in {location}</span>
        </>
      )}
    </div>
  );
}