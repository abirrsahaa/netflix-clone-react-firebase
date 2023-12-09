import { MoviesNowPlaying } from "../hooks/MoviesNowPlaying";
import { MoviesPopular } from "../hooks/MoviesPopular";
import { MoviesTopRated } from "../hooks/MoviesTopRated";
import { MoviesUpcoming } from "../hooks/MoviesUpcoming";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browser = () => {
  MoviesNowPlaying();
  MoviesPopular();
  MoviesTopRated();
  MoviesUpcoming();
  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browser;
