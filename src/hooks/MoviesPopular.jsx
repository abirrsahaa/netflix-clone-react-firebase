import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/Constants";
import { useEffect } from "react";
import { setPopularMovie } from "../utils/MovieSlice";

export const MoviesPopular = () => {
  // i will be fetching the data from the api to see what is the response
  // i will be using the useEffect hook to fetch the data from the api

  const popular = useSelector((store) => store.Movie.PopularMovie);
  const dispatch = useDispatch();

  const getting = async () => {
    const fetching = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=hi&page=1&region=IN",
      options
    );
    const data = await fetching.json();
    dispatch(setPopularMovie(data));
  };

  useEffect(() => {
    !popular && getting();
  }, []);
};
