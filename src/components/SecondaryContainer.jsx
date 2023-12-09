import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.Movie);
  console.log(movies);

  return (
    movies.NowPlayingMovie && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.NowPlayingMovie} />
          <MovieList title={"Trending"} movies={movies.TopRatedMovie} />
          <MovieList title={"Popular"} movies={movies.PopularMovie} />
          <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovie} />
          <MovieList title={"Horror"} movies={movies.NowPlayingMovie} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
