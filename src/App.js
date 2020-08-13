import React, { Component } from 'react';
import { Route, Switch, } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';


import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {

  state = {
    currentUser: null
  }

  unsubscriverFromAuth = null;

  componentDidMount() {
    this.unsubscriverFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // onSnapshot : Get realtime updates with Cloud Firestore
        /*
        db.collection("cities").doc("SF")
        .onSnapshot(function(doc) {
            console.log("Current data: ", doc.data());
        });
        
        snapshot.data() : 
        */
        userRef.onSnapshot(snapshot => (
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        ))
      } else {
        this.setState({ currentUser: userAuth });
      }
    })
  }

  componentWillUnmount() {
    this.unsubscriverFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
