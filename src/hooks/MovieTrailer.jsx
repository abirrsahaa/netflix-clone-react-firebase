// Corrected custom hook
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/Constants";
// import { useEffect } from "react";
import { setMovieTrailer } from "../utils/MovieSlice";

export const useFindTrailer = () => {
  const dispatch = useDispatch();
  // const trailer = useSelector((store) => store?.Movie?.MovieTrailer?.results);
  // console.log("trailer");
  // console.log(trailer);

  const moviesNow = useSelector((store) => store?.Movie?.NowPlayingMovie);
  // console.log(moviesNow);
  const movieId = moviesNow?.results[0]?.id;

  if (!moviesNow) return;
  if (!movieId) return;

  const getting = async () => {
    const geti = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      options
    );

    const data = await geti.json();

    const first = data.results.filter((item) => item.type === "Teaser");

    const TrailerFirst = first[1];

    // Dispatch the action to set the movie trailer
    dispatch(setMovieTrailer(TrailerFirst));
  };

  // if (!trailer) return;
  getting();

  //   const trailer = useSelector((store) => store?.Movie?.MovieTrailer);

  // const MovieKaTrailer = Array.from(trailer);

  //   useEffect(() => {
  //     !trailer && getting();
  //   }, []); // Include trailer in the dependency array to fix the issue
};
