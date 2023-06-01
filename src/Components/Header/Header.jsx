import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import NavigationBar from '../NavigationBar/NavigationBar';

const Header = () => {

    const {user} = useContext(AuthContext);

    return (
        <div>
            <NavigationBar/>
        </div>
    );
};

export default Header;