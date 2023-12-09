import { useDispatch, useSelector } from "react-redux";
import { Logo, PROFILE_PIC } from "../utils/Constants";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/User";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.User);
  const navigate = useNavigate();

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
    onAuthStateChanged(auth, (user) => {
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
  }, []);

  return (
    <div className=" w-full absolute z-10 flex justify-between">
      <img
        className="w-60 h-28 bg-gradient-to-b from-black"
        src={Logo}
        alt="logo"
      />
      {user && (
        <div className="flex gap-4 ">
          <img
            className="hidden md:block w-12 h-12"
            src={PROFILE_PIC}
            alt="profile pic"
          />
          <button
            onClick={signouthandler}
            className="font-bold text-white rounded-lg shadow-md w-12 h-12"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
