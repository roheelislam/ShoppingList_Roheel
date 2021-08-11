import logo from "./logo.svg";
import "./App.css";
import CreateForm from "./create";
import Header from "./Header";
import React from "react";
import Home from "./Home";
import List from "./List";
import Detail from "./detail";
import Search from "./Search";
import list_Edit from "./list_Edit";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";

//using route and router tags to create links

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/create">
              <CreateForm />
            </Route>

            <Route path="/List">
              <List />
            </Route>
            <Route path="/detail/:id" component={Detail}></Route>

            <Route path="/search/:query" component={Search}></Route>
            <Route path="/list_Edit/:id" component={list_Edit}></Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
