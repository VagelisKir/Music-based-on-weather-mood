const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

export async function fetchWeather(city: string) {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  if (!res.ok) throw new Error("Failed to fetch weather data");
    return res.json(); 
}