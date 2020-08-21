import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles.css";

import Header from "./components/Header/Header.component";
import HomePage from "./pages/homepage/Homepage.component";
import ShopPage from "./pages/Shoppage/Shop-page.component";
import SigninAndSignup from "./pages/Signin-Signup-page/Signin-Signup.component";
import { auth, createUserProfileDocument } from "./Firebase/firebase.utils.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsunscribeFromAuth = null;

  componentDidMount() {
    this.unsunscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user);
    });
  }

  componentWillUnmount() {
    this.unsunscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/Shop" component={ShopPage} />
          <Route path="/signin" component={SigninAndSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
