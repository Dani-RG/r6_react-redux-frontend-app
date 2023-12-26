import React, { useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  TwitterAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import logoGoogle from "../images/logo_Google.png";
import logoTwitter from "../images/logo_Twitter.png";
import logoFacebook from "../images/logo_Facebook.png";
import { StyledLoginView } from "../components/styles/LoginView.styled";
import { StyledLoginCard } from "../components/styles/LoginCard.styled";

const Login: React.FC = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setAuthing(false);
      });
  };

  const signInWithTwitter = async () => {
    setAuthing(true);

    signInWithPopup(auth, new TwitterAuthProvider())
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setAuthing(false);
      });
  };

  const signInWithFacebook = async () => {
    setAuthing(true);

    signInWithPopup(auth, new FacebookAuthProvider())
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setAuthing(false);
      });
  };

  return (
    <StyledLoginView>
      <a
        href={"https://clouddistrict.com/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://clouddistrict.com/hubfs/raw_assets/public/themes/kumo-ku/assets/images/icons/logocd.svg"
          alt="cloudDistrictLogo"
        />
      </a>
      <h3>Tech Test:</h3>
      <StyledLoginCard>
        <h2>Sign in</h2>
        <div>
          <button onClick={() => signInWithGoogle()} disabled={authing}>
            <img src={logoGoogle} alt="logoGoogle" />
            Continue with Google
          </button>
          <button onClick={() => signInWithTwitter()} disabled={authing}>
            <img src={logoTwitter} alt="logoTwitter" />
            Continue with Twitter
          </button>
          <button onClick={() => signInWithFacebook()} disabled={authing}>
            <img src={logoFacebook} alt="logoFacebook" />
            Continue with Facebook
          </button>
        </div>
      </StyledLoginCard>
    </StyledLoginView>
  );
};

export default Login;
