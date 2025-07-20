"use client";

import { use, useEffect, useState } from "react";
import Loader from "@/components/Loader";
import MoviesPageClient from "@/components/MoviesPageClient";
import { getMoviesByGenre } from "@/lib/actions/movie.actions";
import { getWithExpiry, setWithExpiry } from "@/lib/utils";

type Props = {
    params: Promise<{ category: string }>;
};

const MoviesPage = ({ params }: Props) => {
    const { category } = use(params);
    const [movies, setMovies] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            const cached = getWithExpiry(category);

            if (cached) {
                setMovies(cached);
                setLoading(false);
                return;
            }

            const data = await getMoviesByGenre(category);
            if (data) {
                setMovies(data);
                setWithExpiry(category, data, 24 * 60 * 60 * 1000); // 24 hours
            }

            setLoading(false);
        };

        fetchMovies();
    }, [category]);

    if (loading) return <Loader />;

    return <MoviesPageClient movies={movies} />;
};

export default MoviesPage;