import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { appRoutes } from '../routes/Routes';

const Nav = () => {
    return (
        <header className='header-nav'>
            <Link to={appRoutes.home.path}>Home</Link>
            <Link to={appRoutes.posts.path}>Posts</Link>
            <Link to={appRoutes.photos.path}>Photos</Link>
            <Link to={appRoutes.contacts.path}>Contacts</Link>
        </header>
    );
};

export default Nav;