import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from "../Home/homePage";
import Navbar from "../Home/navBar";
import Footer from "../Home/footer";
import AddRegistrationPayment from "../Student/Payments/addRegistrationPayment";
import AccountantDashboard from "../Accountant/dashboard";

function PageRoutes() {
    return (
        <div>
            <Router>
                <Navbar/>
                <section className="content">
                    <Switch>
                        <Route path="/" component={HomePage} exact/>
                        <Route path="/student/registration/add-payment" component={AddRegistrationPayment}/>
                        <Route path="/accountant/" component={AccountantDashboard}/>
                    </Switch>
                </section>
                <Footer/>
            </Router>
        </div>
    );
}

export default PageRoutes;

