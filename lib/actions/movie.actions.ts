'use server'

import { moodToGenreMap } from "@/data";
import axios from "axios";

const { TMDB_KEY, WEB_URL } = process.env;

export const getMoviesByGenre = async (category: string) => {
    const genres = moodToGenreMap[category].join('|');
    // const url = `${WEB_URL}?api_key=${TMDB_KEY}&with_genres=${genres}&sort_by=popularity.desc`;
    const url = `${WEB_URL}?api_key=${TMDB_KEY}&with_genres=${genres}`;

    try {
        const requests = [1, 2, 3].map((page) =>
            axios.get(`${url}&page=${page}`)
        );

        // Resolve all requests
        const responses = await Promise.all(requests);

        // Combine all results into a single array
        const movies = responses.flatMap(response => response.data.results);

        return movies;
    } catch (error) {
        console.log(error)
    }
}