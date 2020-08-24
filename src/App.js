import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles.css";
import { connect } from "react-redux";

import Header from "./components/Header/Header.component";
import HomePage from "./pages/homepage/Homepage.component";
import ShopPage from "./pages/Shoppage/Shop-page.component";
import SigninAndSignup from "./pages/Signin-Signup-page/Signin-Signup.component";
import { auth, createUserProfileDocument } from "./Firebase/firebase.utils.js";
import { setCurrentUser } from "./Redux/users/user.actions";

class App extends React.Component {
  unsunscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsunscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsunscribeFromAuth();
  }

  render() {
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
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
