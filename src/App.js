import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles.css";

import Header from "./components/Header/Header.component";
import HomePage from "./pages/homepage/Homepage.component";
import ShopPage from "./pages/Shoppage/Shop-page.component";
import SigninAndSignup from "./pages/Signin-Signup-page/Signin-Signup.component";

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Shop" component={ShopPage} />
        <Route path="/signin" component={SigninAndSignup} />
      </Switch>
    </div>
  );
}
