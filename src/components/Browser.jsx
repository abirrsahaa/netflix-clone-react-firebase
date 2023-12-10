import { useSelector } from "react-redux";
import { MoviesNowPlaying } from "../hooks/MoviesNowPlaying";
import { MoviesPopular } from "../hooks/MoviesPopular";
import { MoviesTopRated } from "../hooks/MoviesTopRated";
import { MoviesUpcoming } from "../hooks/MoviesUpcoming";

import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GptSearch";

const Browser = () => {
  const showGptSearch = useSelector((store) => store.Gpt.showGptSearch);
  MoviesNowPlaying();
  MoviesPopular();
  MoviesTopRated();
  MoviesUpcoming();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browser;
