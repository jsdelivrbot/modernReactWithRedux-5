import axios from 'axios';

const API_KEY = '66237fc9594d473087b059a3c94e71eb';
const ROOF_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOF_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request:', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}