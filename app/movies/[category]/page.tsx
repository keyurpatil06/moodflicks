import Loader from "@/components/Loader";
import MoviesPageClient from "@/components/MoviesPageClient";
import { getMoviesByGenre } from "@/lib/actions/movie.actions";

type Props = {
  params: { category: string };
};

const MoviesPage = async ({ params }: Props) => {
  const { category } = await params;
  const movies = await getMoviesByGenre(category);

  return movies?.length !== 0
    ? <MoviesPageClient movies={movies!} />
    : <Loader />;
};

export default MoviesPage;
