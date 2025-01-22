import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import About from './components/About';
import Contactus from './components/contactus';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

const styleCard = {
  backgroundColor: '#f0f0f0',
};

//not using the key(not acceptable)<<<<<<<<<<<index as key<<<<<<<<<<<<<unique id(best practice);

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contactus />,
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />); //Rendering
