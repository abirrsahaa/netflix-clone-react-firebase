import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/Constants";
import { setNowPlayingMovie } from "../utils/MovieSlice";
import { useEffect } from "react";

export const MoviesNowPlaying = () => {
  const playing = useSelector((store) => store.Movie.NowPlayingMovie);
  const dispatch = useDispatch();
  // i will be fetching the data from the api to see what is the response
  // i will be using the useEffect hook to fetch the data from the api

  const getting = async () => {
    const fetching = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=hi&page=1&region=IN",
      options
    );
    const data = await fetching.json();

    dispatch(setNowPlayingMovie(data));
  };

  useEffect(() => {
    !playing && getting();
  }, []);
};
