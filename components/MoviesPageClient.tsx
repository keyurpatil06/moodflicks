'use client';

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import LitButton from "./ui/LitButton";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import Loader from "./Loader";
import Link from "next/link";
import ShimmerButton from "./ui/ShimmerButton";
import { movieGenres } from "@/data";

const MoviesPageClient = ({ movies }: { movies: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  useEffect(() => {
    const maxIndex = Math.floor(movies.length * 0.7);
    setCurrentIndex(Math.floor(Math.random() * (maxIndex + 1)));
  }, [movies.length]);

  if (currentIndex === null) {
    return (
      <Loader />
    )
  }

  const currentMovie = movies[currentIndex];

  const goToNext = () => {
    // if (currentIndex < movies.length - 1) {
    //   setCurrentIndex(currentIndex + 1);
    // }
    setCurrentIndex((currentIndex + 1) % movies.length);
  };

  const goToBack = () => {
    // if (currentIndex > 0) {
    //   setCurrentIndex(currentIndex - 1);
    // }
    setCurrentIndex((currentIndex - 1) % movies.length);
  };

  const imageSrc = currentMovie.poster_path
    ? `https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`
    : "/fallback-image.jpg";

  const getCategoryNames = (genreIds: number[]): string[] => {
    return genreIds
      .map(genreId => movieGenres.find(genre => genre.id === genreId)?.name)
      .filter((name): name is string => name !== undefined); // Explicit type guard
  };

  const genreIds = currentMovie.genre_ids;
  const categories = getCategoryNames(genreIds);

  return (
    <div className="bg-slate-950 min-h-screen text-white flex flex-col items-center justify-center p-4">
      <Navbar />

      <div className="p-6 mt-32 mx-4 bg-gray-800 rounded-lg shadow-lg md:w-2/5">
        <div className="flex items-center justify-center h-fit mb-4">
          <Image
            src={`${imageSrc}`}
            alt={currentMovie.title}
            height={800}
            width={300}
            className="rounded-md w-fit h-auto"
            priority
          />
        </div>
        <h2 className="text-xl font-semibold mb-2">{currentMovie.title}</h2>
        <div className="mb-2">
          {categories.map((category: string) => (
            <span 
            key={category}
            className="px-2 py-1 border-2 text-xs mr-2 rounded-full border-gray-400 text-gray-200 bg-gray-500"
            >
              {category}
              </span>
          ))}
        </div>
        <p className="text-md my-1 text-gray-200">
          {currentMovie.overview}
        </p>
        <p className="text-sm text-gray-400 mb-2">
          Release Date: {currentMovie.release_date || "Unknown"}
        </p>
        <p className="text-sm text-gray-400">
          Rating: {currentMovie.vote_average || "N/A"}
        </p>
      </div>

      <div className="flex gap-5 mt-6">
        <LitButton
          title='Back'
          onClick={goToBack}
          // disabled={currentIndex === 0}
          className={`${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}>
        </LitButton>
        <LitButton
          title='Next'
          onClick={goToNext}
          // disabled={currentIndex === movies.length - 1}
          className={`${currentIndex === movies.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}>
        </LitButton>
      </div>
      <Link href='/discover' className="my-4">
        <ShimmerButton
          title="Change Mood?"
          className="border-slate-300 border-2 hover:scale-105 transition whitespace-nowrap"
        />
      </Link>
      <BackgroundBeams />
    </div>
  )
}

export default MoviesPageClient;
