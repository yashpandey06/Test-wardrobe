import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from './components/Home/home.js'
import AboutUS from './components/AboutUS/AboutUS.js';
import ContactUs from './components/Contactus/ContactUs';
import OurSerices from './components/OurServices/OurServices.js';
import ErrorPage from './components/ErrorPage/ErrorPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './custom.scss';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
            index:true,
            path: "/",
            element: <HomePage/>,
          },
        {
            path: "/About-us",
            element: <AboutUS/>,
          },
        {
            path: "/our-services/:id",
            element: <OurSerices/>,
          },
        {
          path: "contact-us",
          element:<ContactUs/>
        }
        ]
    },
    
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
