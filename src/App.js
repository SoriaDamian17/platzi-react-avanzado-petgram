import React, { Suspense, useContext } from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { Home } from './pages/Home';
import { Router, Redirect } from '@reach/router'
import { NavBar } from './components/NavBar';
import { User } from './pages/User';
import { NoRegisteredUser } from './pages/NoRegisteredUser';
import { NotFound } from './pages/NotFound';
import { Context } from './Context';

const Favs = React.lazy(() =>  import('./pages/Favs') )
const Detail = React.lazy(() =>  import('./pages/Detail') )

export const App = () => {
    //const {isAuth} = useContext( Context );
    const isAuth = false;
    return (
        <Suspense fallback={<div />}>
            <GlobalStyle />
            <Logo />
            <Router>
                <NotFound default />
                <Home path='/' />
                <Home path='/pet/:id' />
                <Detail path='/detail/:detailId' /> 
                {!isAuth && <NoRegisteredUser path='/login' /> }
                {!isAuth && <Redirect from='/favs' to='/login' />}
                {!isAuth && <Redirect from='/user' to='/login' />}
                {isAuth && <Redirect from='/login' to='/' />}
                <Favs path='/favs' />
                <User path='/user' />
            </Router>
            <NavBar />
        </Suspense>
    )
};