import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import QabulPage from './pages/QabulPage';
import WebDasPage from './pages/WebDasPage';
import WebDisPage from './pages/WebDisPage';
import GraficPage from './pages/GraficPage';
import EnglishPage from './pages/EnglishPage';
import Courses from './pages/Courses';


import UsersPage from './pages/UsersPage';
import CoursesPage from './pages/CoursesPage';


const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<App/>,
      errorElement:<ErrorPage/>,
      children: [
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/about",
          element:<AboutPage/>
        },
        {
          path:"/register",
          element:<QabulPage/>
        },
        {
          path:"/web/:userID",
          element:<WebDasPage/>
        },
        {
          path:"/webs/:userID",
          element:<CoursesPage/>
        },
        {
          path:"/webdesigner/:userID",
          element:<WebDisPage/>
        },
        {
          path:"/grafic/:userID",
          element:<GraficPage/>
        },
        {
          path:"/english/:userID",
          element:<EnglishPage/>
        },
        {
          path:"/create-course",
          element:<Courses/>
        },
        {
          path:"/users",
          element:<UsersPage/>
        }
      ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={appRouter} />
  // </React.StrictMode>
);


