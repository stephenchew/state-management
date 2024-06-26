import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { FC } from 'react';
import PropDrillingPage from './pages/prop-drilling';
import ReactContextPage from './pages/react-context';
import ReduxPage from './pages/redux';
import UseStatePage from './pages/use-state';
import ZustandPage from './pages/zustand';

const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/use-state" /> },
  { path: '/use-state', element: <UseStatePage /> },
  { path: '/prop-drilling', element: <PropDrillingPage /> },
  { path: '/react-context', element: <ReactContextPage /> },
  { path: '/redux', element: <ReduxPage /> },
  { path: '/zustand', element: <ZustandPage /> },
]);

const Router: FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
