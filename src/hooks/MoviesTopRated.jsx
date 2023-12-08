import { useEffect } from "react";
import { options } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { setTopRatedMovie } from "../utils/MovieSlice";

export const MoviesTopRated = () => {
  // i will be fetching the data from the api to see what is the response
  // i will be using the useEffect hook to fetch the data from the api

  const rating = useSelector((store) => store?.Movie?.TopRatedMovie);
  const dispatch = useDispatch();

  const getting = async () => {
    const fetching = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=hi&page=1&region=IN",
      options
    );
    const data = await fetching.json();
    dispatch(setTopRatedMovie(data));
  };

  useEffect(() => {
    !rating && getting();
  }, []);
};
