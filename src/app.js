import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "normalize.css/normalize.css";
import  "./styles/styles.scss";

const Test = () => {
  return  (
    <div>
      This is test!
    </div>
  );
};


const Test2 = () => {
  return  (
    <div>
      This is test2!
    </div>
  );
};

const Test3 = () => {
  return  (
    <div>
      This is test3!
    </div>
  );
};


const Test4 = () => {
  return  (
    <div>
      This is test4!
    </div>
  );
};

const NotFound = () => {
  return  (
    <div>
      404 NotFound - <Link to="/"> Go Home </Link>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      <div>
        <NavLink to="/" activeClassName="is-active" exact={true}> Home </NavLink>
        <NavLink to="/create" activeClassName="is-active"> Create </NavLink>
        <NavLink to="/edit" activeClassName="is-active"> Edit </NavLink>
        <NavLink to="/help" activeClassName="is-active"> Help </NavLink>
      </div>
      <br />
    </header>
  );
}

const routes = (
  <BrowserRouter>
  <div>
    <Header/>
    <Switch>
      <Route path="/" component={Test} exact={true}/>
      <Route path="/create" component={Test2}/>
      <Route path="/edit" component={Test3}/>
      <Route path="/help" component={Test4}/>
      <Route component={NotFound}/>
    </Switch>
  </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));

