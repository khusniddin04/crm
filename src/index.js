import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import QabulPage from './pages/QabulPage';
import Courses from './pages/Courses';
import UsersPage from './pages/UsersPage';
import UserPage from './pages/UserPage';
import TeachersPage from './pages/TeachersPage';
import FinancePage from './pages/FinancePage';
import CoursesPage from './pages/CoursesPage';
import AboutPage from './pages/AboutPage';
import LidPage from './pages/LidPage';



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
          path:"/user/:userID",
          element:<UserPage/>
        },
        {
          path:"/teachers",
          element:<TeachersPage/>
        },
        {
          path:"/register",
          element:<QabulPage/>
        },
        {
          path:"/webs/:userID",
          element:<CoursesPage/>
        },

        {
          path:"/create-course",
          element:<Courses/>
        },
        {
          path:"/users",
          element:<UsersPage/>
        },
        {
          path:"/finance",
          element:<FinancePage/>
        },
        {
          path:"/about",
          element:<AboutPage/>
        },
        {
          path:"/lids",
          element:<LidPage/>
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


