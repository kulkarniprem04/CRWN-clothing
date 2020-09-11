import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./styles.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "./components/Header/Header.component";
import HomePage from "./pages/homepage/Homepage.component";
import ShopPage from "./pages/Shoppage/Shop-page.component";
import SigninAndSignup from "./pages/Signin-Signup-page/Signin-Signup.component";
import CheckoutPage from "./pages/Checkoutpage/CheckoutPage.component";

import { auth, createUserProfileDocument } from "./Firebase/firebase.utils.js";
import { setCurrentUser } from "./Redux/users/user.actions";
import { selectCurrentUser } from "./Redux/users/user.selectors";

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
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SigninAndSignup />
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
