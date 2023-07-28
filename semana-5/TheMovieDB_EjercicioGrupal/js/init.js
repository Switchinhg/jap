const API_KEY = "8d181bcb5e80a929053da01f6921e4a9";
const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const API_URL_SEARCH = "https://google.com/search?q=";

async function getJSONData(url) {
    // ## INICIO BLOQUE 3 ##
    const result = {};
    try {
        const response = await fetch(url);
        if (response.ok) {
            result.data = await response.json();
            result.status = "ok";
        } else {
            throw Error(response.statusText);
        }
    }
    catch (error) {
        result.status = 'error';
        result.data = error;
    }
    return result;
    // ## FIN BLOQUE 3 ##
}

function getMovies(search) {
    return getJSONData(`${API_URL}&query=${search}`);
}