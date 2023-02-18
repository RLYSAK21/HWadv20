import React from 'react';
import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';

import Nav from '../components/Nav';
import ContactsPage from '../pages/contacts/Contacts.page';
import HomePage from '../pages/home/Home.page';
import PhotosPage from '../pages/photos/Photos.page';
import PostsPage from '../pages/posts/Posts.page';

export const appRoutes = {
   home: {
        path: "/HWadv20/",
        element: <HomePage />,
    },
    photos: {
        path: "/photos",
        element: <PhotosPage />,
    },
   posts: {
        path: "/posts",
        element: <PostsPage />,
    },
    contacts: {
        path: "/contacts",
        element: <ContactsPage />,
    },

};
   
const Routes = () => {
    return (
        <div>
            <Nav />
            <ReactRouterRoutes>
            {Object.values(appRoutes).map(({path, element})=> (<Route path={path} element={element}/>))}
            </ReactRouterRoutes>
        </div>
    );
};

export default Routes;