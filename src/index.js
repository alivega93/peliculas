import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Movies from "./Movies/Movies";
import DetailsMovie from "./Movies/DetailsMovie/DetailsMovie.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <p> Not Found </p>,
    children: [
      {
        path: "/",
        element: <p>Estrenos 2023</p>
      },
      {
        path: "/comedia",
        element: <Movies genero="comedia" key={"comedia"} />,
      },
      {
        path: "/Independientes",
        element: <Movies genero="Independientes" key={"Independientes"} />,
        children: [
          {
            path: "Independientes/:pelicula",
            element: <DetailsMovie key={1} />
          }
        ]
      }
    ],

  },
  {
    path: ":genero/:pelicula",
    element: <DetailsMovie key={2} />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
