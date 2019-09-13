import React, { Fragment } from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { Home } from './pages/Home';
import { Router } from '@reach/router'
import { Detail } from './pages/Detail';
import { NavBar } from './components/NavBar';
import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { NoRegisteredUser } from './pages/NoRegisteredUser';
const UserLogged = ({ children }) => {
    return children({ isAuth: false });
}

export const App = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <Logo />
            <Router>
                <Home path='/' />
                <Home path='/pet/:id' />
                <Detail path='/detail/:detailId' />
            </Router>
            <UserLogged>
                {
                    ({ isAuth }) =>
                    isAuth ?
                    <Router>
                        <Favs path='/favs' />
                        <User path='/user' />
                    </Router>
                    : <Router>
                        <NoRegisteredUser path='/favs'/>
                        <NoRegisteredUser path='/user'/>
                    </Router>
                }
                
            </UserLogged>
            <NavBar />
        </Fragment>
    )
};