import React from 'react'; //{useEffect, useState}
import "bootstrap/dist/css/bootstrap.css";
import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link,Redirect } from 'react-router-dom';//useHistory, useParams, useLocation, Redirect
import CrudDemo from './CrudDemo';

const DemoRouter = () => {
  return (
    <Fragment>
    <div className="container">
        <Router>
          <Header/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Welcome} />
              <Route path="/form" component={RegisterForm} />
              <Redirect from="/contactUs" to="/about" />
              <Route path="/cruddemo"><CrudDemo /></Route>
              <Route path="/person"><Person /></Route>
              <Route path="/about"><About /></Route>
              <Route path="/input"><InputToForm /></Route>
              {/* <Redirect from="/personInformation/:id" to="/data/:id" />  // can work*/}
              <Route path="/data/:id" component={ShowData} />
              <Route path="/error" component={ErrorPage} />
            <Route component={NotFound} />                    
          </Switch>
        </Router>
    </div>
    </Fragment>
  );
};

const Header = () => {
  return (
      
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
              <Link className="navbar-brand" to="/">React</Link>
              </li>
              <li className="nav-item">
              <Link className="navbar-brand" to="/home">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="navbar-brand" to="/person">Person</Link>
              </li>
              <li className="nav-item">
              <Link className="navbar-brand" to="/about">About</Link>
              </li>
              <li className="nav-item">
              <Link className="navbar-brand" to="/cruddemo">Crud</Link>
              </li>
          </ul>
          <form>
                <Link className="btn btn-primary" to="/person">Sign Up</Link>
            </form>
          </div>
          </nav>
      
  );
};

  // useHistory allows developer access to the React Routers history object
const Home = () => {

  
  return (
      <Fragment>
          Welcome
      </Fragment>
  );

};

const Welcome = () => {
  return (
      <Fragment>
          You are on the homepage
      </Fragment>
  );
};

const About = () => {
  return (
      <Fragment>
          About Us Page
      </Fragment>
  );
};

const Person = () => {
return (
    <Fragment>
        <h3>The person Page</h3>
    </Fragment>
);
};

const NotFound = () => {
  return (
      <Fragment>
          Page Not Found
      </Fragment>
  );
};


const RegisterForm = () => {

};
const ShowData=()=>{

};
const InputToForm=()=>{

};
const ErrorPage=()=>{
  
};

export default DemoRouter;
