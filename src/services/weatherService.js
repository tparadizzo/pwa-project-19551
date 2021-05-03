import { weather } from "../keys";

//getting api from openweathermap
export const getWeatherData = async () => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=Dublin,Dublin,IE&appid=${weather}&units=metric`);
}