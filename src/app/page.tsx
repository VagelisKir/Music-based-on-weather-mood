"use client";

import { useState } from "react";
import { getMoodFromWeather, getSongsFromMood } from "@/lib/mood";
import { fetchWeather } from "@/lib/fetchWeather";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const [city, setCity] = useState("");
  const [submittedCity, setSubmittedCity] = useState("");

  const {
    data: weather,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["weather", submittedCity],
    queryFn: () => fetchWeather(submittedCity),
    enabled: !!submittedCity,
  });

  const mood = weather ? getMoodFromWeather(weather) : "";
  const song = mood ? getSongsFromMood(mood) : "";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">🎧 Weather Mood Recommender</h1>

      <div className="flex gap-2 mb-4">
        <input
          className="border px-4 py-2 rounded w-64"
          type="text"
          placeholder="Enter a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={() => setSubmittedCity(city)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Get Mood
        </button>
      </div>

      {isLoading && <p>Loading weather...</p>}
      {error && <p>Could not fetch weather. Try a different city.</p>}
      {weather && (
        <div className="mt-4">
          <p className="text-lg">
            🌡️ {weather.main.temp}°C | {weather.weather[0].main}
          </p>
          <p className="text-xl mt-2">
            🧠 Mood: <strong>{mood}</strong>
          </p>
          <p className="text-xl">
            🎶 Song: <strong>{song}</strong>
          </p>
        </div>
      )}
    </div>
  );
}
