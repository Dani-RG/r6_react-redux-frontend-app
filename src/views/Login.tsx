import React, { useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login: React.FunctionComponent = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };

  const signInWithFacebook = async () => {
    setAuthing(true);

    signInWithPopup(auth, new FacebookAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };

  const signInWithTwitter = async () => {
    setAuthing(true);

    signInWithPopup(auth, new TwitterAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };

  return (
    <div>
      <p>Login Page</p>
      <button onClick={() => signInWithGoogle()} disabled={authing}>
        Sign in with Google
      </button>
      <button onClick={() => signInWithFacebook()} disabled={authing}>
        Sign in with Facebook
      </button>
      <button onClick={() => signInWithTwitter()} disabled={authing}>
        Sign in with Twitter
      </button>
    </div>
  );
};

export default Login;
