import React from "react";
import "./Signin-Signup.styles.scss";

import Signin from "../../components/Signin/Signin.component";
import SignUo from "../../components/Sign-up/sign-up.component";

const SigninAndSignup = () => (
  <div className="signin-and-signup">
    <Signin />
    <SignUo />
  </div>
);

export default SigninAndSignup;
