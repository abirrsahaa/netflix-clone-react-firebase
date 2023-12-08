import { MoviesNowPlaying } from "../hooks/MoviesNowPlaying";
import { MoviesPopular } from "../hooks/MoviesPopular";
import { MoviesTopRated } from "../hooks/MoviesTopRated";
import { MoviesUpcoming } from "../hooks/MoviesUpcoming";
import Header from "./Header";

const Browser = () => {
  MoviesNowPlaying();
  MoviesPopular();
  MoviesTopRated();
  MoviesUpcoming();
  return (
    <>
      <Header />
    </>
  );
};

export default Browser;
