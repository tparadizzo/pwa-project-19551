import { weather } from "../keys";

export const getWeatherData = async () => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=Dublin,Dublin,IE&appid=${weather}&units=metric`);
}