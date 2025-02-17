import { useDispatch, useSelector } from "react-redux";
import { LOGO, USER_PHOTO } from "../../utils/constants";
import "./Header.css";
import { addUser, removeUser } from "../../store/userSlice";
import { useNavigate } from "react-router";
import { RootState } from "../../store/store";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <div className="header">
      <img src={LOGO} alt="logo" style={{ width: "200px" }} />
      {user && (
        <div className="user-profile-container">
          <img
            src={USER_PHOTO}
            alt="u-p"
            style={{ width: "50px", borderRadius: "25px" }}
          />
          <button className="button" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
