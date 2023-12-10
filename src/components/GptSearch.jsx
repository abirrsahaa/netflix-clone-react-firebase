import { BG_IMG } from "../utils/Constants";
import GptSearchBar from "./GptSearchBar";
import GptSuggestion from "./GptSuggestion";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover" src={BG_IMG} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptSuggestion />
      </div>
    </>
  );
};
export default GPTSearch;
