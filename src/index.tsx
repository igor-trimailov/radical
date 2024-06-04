import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { store } from './store/store';

import './index.css';
import Favorites from './pages/Favorites';
import Settings from './pages/Settings';
import App from './App';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
    ],
  },
]);

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
