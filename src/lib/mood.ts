type Weather = {
  weather: { main: string }[];
  main: { temp: number };
};

export function getMoodFromWeather(weather: Weather): string {
 const condition = weather.weather[0]?.main
 const temp = weather.main?.temp

 if(condition === "Clear") {
   return "Energetic";
 } if(condition === "Clouds") {
   return "Chill";  
 } if(condition === "Rain") {
    return "Calm";
 } if(condition === "Snow") {
   return "Cozy";
 } if(condition === "Thunderstorm") {
   return "Intense";
}   else {
    return "Neutral";
     }          
}

export function getSongsFromMood(mood: string): string[] {
  const songs: Record<string, string[]> = {
    Energetic: ["Song A", "Song B", "Song C"],
    Chill: ["Song D", "Song E", "Song F"],
    Calm: ["Song G", "Song H", "Song I"],
    Cozy: ["Song J", "Song K", "Song L"],
    Intense: ["Song M", "Song N", "Song O"],
    Neutral: ["Song P", "Song Q", "Song R"],
  };
const options = songs[mood as keyof typeof songs] || [];
  return options;   
}