import React from 'react'
import {
    Redirect,
    Route,
    Switch,
    BrowserRouter as Router
} from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'
import { LoginView } from '../views/login/LoginView'
import { AboutView } from './../views/about/AboutView'
import { ContactView } from './../views/contact/ContactView'
import { HomeView } from './../views/home/HomeView'

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route
                        path="/"
                        exact
                        component={HomeView}
                    />

                    <Route
                        path="/login"
                        component={LoginView}
                    />

                    <Route
                        path="/about"
                        component={AboutView}
                    />

                    <Route
                        path="/contact"
                        component={ContactView}
                    />

                    <Redirect to="/home" />
                </Switch>
            </Router>
        </div>
    )
}
