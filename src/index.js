import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './App';
import Main from './components/Main';
import Artists from './components/Artists';
import SingleArtist from './components/SingleArtist';
import Tickets from './components/Tickets';
import FoodAndDrinks from './components/FoodAndDrinks';
import FoodDetail from './components/FoodDetail';
import Ad from './components/Ad';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FoodGrid from './components/FoodGrid';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/artisterne',
        element: <Artists />,
      },
      {
        path: '/:artist',
        element: <SingleArtist />,
      },
      {
        path: '/billetter',
        element: <Tickets />,
      },
      {
        path: '/mad&drikke',
        element: <FoodAndDrinks />,
        children: [
          {
            path: '/mad&drikke',
            element: <FoodGrid />,
          },
          {
            path: '/mad&drikke/:food',
            element: <FoodDetail />,
          },
        ],
      },
      {
        path: '/info',
        element: <Ad />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
