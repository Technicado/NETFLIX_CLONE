import React, { useState } from "react";
import SignUpPage from "./SignUpPage";
import "../Styling/Loginpage.css";

const LoginPage = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="login">
      <div className="login__background">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="netflix logo"
          className="login__logo"
        />
        <button onClick={() => setSignIn(true)} className="sign__in">
          Sign In
        </button>
        <div className="login__gradient" />
      </div>
      <div className="login__body">
        {signIn ? (
          <SignUpPage />
        ) : (
          <>
            <h1>Find Unlimited films, TV programmes and More.</h1>
            <h2>Watch anywhere, Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="login__start__btn"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
//https://assets.nflxext.com/ffe/siteui/vlv3/757ab38f-5d08-40bc-b3eb-eaba63ed8203/93c34f94-56c8-40a7-8b2e-b4aac6427977/GB-en-20210125-popsignuptwoweeks-perspective_alpha_website_medium.jpg
