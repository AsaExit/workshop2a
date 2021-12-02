import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect} from "react-router-dom";
import CrudDemo from './CrudDemo';
import PersonDetails from './PersonDetails';
import UpdatePerson from './UpdatePerson';

const DemoRouter = () => {

    return (
        <Fragment>
            <Router>
                <Header />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route path="/home" component={Home} />
                        <Route path="/person" component={Person} />
                        <Redirect from="/contact" to=""/>
                        <Route path="/about" component={About} />
                        <Route path="/crud" component={CrudDemo} />
                        <Route path="/details/:id" component={PersonDetails} />
                        <Route path="/updates/:id" component={UpdatePerson} />

                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        </Fragment>
    );

};

const Welcome = () => <b><h3>Welcome Page</h3></b>;
const Home = () => <b><h3>Home Page</h3></b>;
const About = () => <b><h3>About Us Page</h3></b>;
const Person = () => <b><h3>Person Page</h3></b>;
const NotFound = () =><b><h3>Page Not Found</h3></b>;

const Header = () => {
return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <Link className="navbar-brand" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="/">Welcome</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="/person">Person</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="/crud">CRUD</Link>
                </li>
            </ul>
            <form>
                <Link className="btn btn-dark" to="/person">Sign Up</Link>
            </form>
        </div>

    </nav>
)
};

export default DemoRouter;