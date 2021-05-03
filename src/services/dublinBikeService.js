import { dublinBike } from "../keys";

//getting api from jcdcaux
export const getDublinBike = async () => {
    return fetch(`https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=${dublinBike}`);
}