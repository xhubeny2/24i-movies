import axios from 'axios';

import {
    API_URL,
    POPULAR_MOVIES_URL,
    POPULAR_SERIES_URL,
    DISCOVER_MOVIE_URL,
    MOVIE_DETAIL_URL,
    SERIE_DETAIL_URL,
    API_KEY,
    SEARCH_MOVIES_URL,
    SEARCH_SERIES_URL,
} from '../constants/apiConstants';

export const getPopularMovies = () => {
    const response = axios.get(API_URL + POPULAR_MOVIES_URL, {
        params: {
            api_key: API_KEY,
        },
    });
    return response;
}

export const getPopularSeries = () => {
    const response = axios.get(API_URL + POPULAR_SERIES_URL, {
        params: {
            api_key: API_KEY,
        },
    });
    return response;
}

export const getMoviesWithGenre = (genreId) => {
    const response = axios.get(API_URL + DISCOVER_MOVIE_URL, {
        params: {
            api_key: API_KEY,
            with_genres: genreId
        },
    });
    return response;
}

export const getMovieDetail = (movieId) => {
    const response = axios.get(API_URL + MOVIE_DETAIL_URL + movieId, {
        params: {
            api_key: API_KEY,
        },
    });
    return response;
}

export const getSerieDetail = (serieId) => {
    const response = axios.get(API_URL + SERIE_DETAIL_URL + serieId, {
        params: {
            api_key: API_KEY,
        },
    });
    return response;
}

export const searchMovies = (query) => {
    const response = axios.get(API_URL + SEARCH_MOVIES_URL, {
        params: {
            api_key: API_KEY,
            query: query,
        },
    });
    return response;
}

export const searchSeries = (query) => {
    const response = axios.get(API_URL + SEARCH_SERIES_URL, {
        params: {
            api_key: API_KEY,
            query: query,
        },
    });
    return response;
}
