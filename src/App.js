import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './pages/Home';
import Chat from './pages/Chat';
import Signup from './pages/Signup';
import Login from './pages/Login';
import firebaseApp from './services/firebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(firebaseApp)

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          <Navigate
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
          <Navigate to="/chat" />
        )
      }
    />
  );
}

export class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true,
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false,
        });
      }
    })
  }

  render() {
    return this.state.loading === true ? (
      <h2>Loading...</h2>
    ) : (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            path="/chat"
            authenticated={this.state.authenticated}
            element={<Chat />}
          ></Route>
          <Route
            path="/signup"
            authenticated={this.state.authenticated}
            element={<Signup />}
          ></Route>
          <Route
            path="/login"
            authenticated={this.state.authenticated}
            element={<Login />}
          ></Route>
        </Routes>
      </Router>
    );
  }
}



export default App;
