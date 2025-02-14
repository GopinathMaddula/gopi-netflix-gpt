import { useRef, useState } from "react";
import { APP_BG, USER_PHOTO } from "../../utils/constants";
import "./Login.css";
import { checkValidation } from "../../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    const emailValue: string | undefined = email?.current?.value;
    const passwordValue: string | undefined = password?.current?.value;
    if (!emailValue || !passwordValue) {
      setErrorMessage("Email and Password are required");
      return;
    }
    const message = checkValidation(emailValue, passwordValue);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL: USER_PHOTO,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="login-container">
        <img
          src={APP_BG}
          alt="bg"
          style={{ height: "100vh", width: "100vw", objectPosition: "center" }}
        />
      </div>
      <div className="form-main-container">
        <form className="form-container" onSubmit={handleSubmit}>
          <h1 className="sign-in-heading">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Enter your name"
              className="border"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email or mobile number"
            className="border"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="border"
          />
          <p className="error-message">{errorMessage}</p>
          <button className="button" onClick={handleButtonClick}>
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="new-netflix">
            {isSignIn ? "New to Netflix ?" : "Already A User"}{" "}
            <span onClick={toggleSignIn}>
              {isSignIn ? "Sign up now" : "Sign In Now"}
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
