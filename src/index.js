import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Blog from "./components/blog";
import './blog.css';
import './aboutus.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Production from './components/production';
import Interview from './components/interview';
import AboutUs from './components/aboutus';
const rame= {color: 'red'}
const router = createBrowserRouter([
  {
    path: "/",
    element: <App prop={{color:'main'}} />
  },
  {
    path: "/interview",
    element: <Interview />
  },
  {
    path: "/production",
    element: <Production prop={{color:'rediko'}} />
  },
  {
    path: "/aboutus",
    element: <AboutUs />
  },
  {
    path: "/blogs",
    element: <Blog prop={{color:'rediko'}} />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
