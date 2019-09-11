import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { GlobalStyle } from './styles/GlobalStyles';
import { ListOfPhotoCards } from './container/ListOfPhotoCards';
import { Logo } from './components/Logo';

export const App = () => (
    <React.Fragment>
        <GlobalStyle />
        <Logo />
        <ListOfCategories />
        <ListOfPhotoCards categoryId={3} />
    </React.Fragment>
);