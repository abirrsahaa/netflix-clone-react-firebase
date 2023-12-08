import { useEffect } from "react";
import { options } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { setUpcomingMovie } from "../utils/MovieSlice";

export const MoviesUpcoming = () => {
  // i will be fetching the data from the api to see what is the response
  // i will be using the useEffect hook to fetch the data from the api
  const upcoming = useSelector((store) => store?.Movie?.UpcomingMovie);
  const dispatch = useDispatch();

  const getting = async () => {
    const fetching = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=hi&page=1&region=IN",
      options
    );
    const data = await fetching.json();
    dispatch(setUpcomingMovie(data));
  };

  useEffect(() => {
    !upcoming && getting();
  }, []);
};
