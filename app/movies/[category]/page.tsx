"use client";

import { use, useEffect, useState } from "react";
import Loader from "@/components/Loader";
import MoviesPageClient from "@/components/MoviesPageClient";
import { getMoviesByGenre } from "@/lib/actions/movie.actions";

type Props = {
  params: Promise<{ category: string }>;
};

const MoviesPage = ({ params }: Props) => {
    const { category } = use(params);
    const [movies, setMovies] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            const cached = localStorage.getItem(category);

            if (cached) {
                setMovies(JSON.parse(cached));
                setLoading(false);
                return;
            }

            const data = await getMoviesByGenre(category);
            
            if (data) {
                setMovies(data);
                localStorage.setItem(category, JSON.stringify(data));
            }

            setLoading(false);
        };

        fetchMovies();
    }, [category]);

    if (loading) return <Loader />;

    return <MoviesPageClient movies={movies} />;
};

export default MoviesPage;