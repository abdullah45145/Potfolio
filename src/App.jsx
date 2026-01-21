import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./component/AppLayout";
import SplashPage from "./component/SplashPage";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
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
    {
        path: "project/:id",
        element: <ProjectDetail />,
      },
]);

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashPage onFinish={handleSplashFinish} />;
  }

  return <RouterProvider router={router} />;
};

export default App;
