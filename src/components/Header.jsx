import { useDispatch, useSelector } from "react-redux";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/User";
import { toggleGptSearchView } from "../utils/GptSlice";
import { changeLanguage } from "../utils/Config";
import { Logo, SUPPORTED_LANGUAGES } from "../utils/Constants";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.User);
  const navigate = useNavigate();

  const showGptSearch = useSelector((store) => store.Gpt.showGptSearch);

  const signouthandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("i am here working fine ");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");

        // ...
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={Logo} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="hidden md:block w-12 h-12"
            alt="usericon"
            src={user?.photoURL}
          />
          <button onClick={signouthandler} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
