import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './home/Home';
import ContactMe from './components/ContactMe';
import AdminMessage from './admin/AdminMessage';
import Work from './components/Work'
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <ContactMe />
      },
      {
        path: "/admin/messages", // ✅ Add route
        element: <AdminMessage />
      },
      {
        path: "/work",
        element: <Work/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);