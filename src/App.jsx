import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./component/AppLayout";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Achievement from "./pages/Achievement";
import MoreAboutMe from "./pages/MoreAboutMe";
import ContactPage from "./pages/Contactpage";
import Pricing from "./pages/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutMe />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "achievement",
        element: <Achievement />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },

    ],
  },
  {
    path: "more-about-me",
    element: <MoreAboutMe />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
