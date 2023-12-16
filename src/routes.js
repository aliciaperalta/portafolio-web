import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Chambea from "./pages/Projects/Chambea";
import Gore from "./pages/Projects/Gore";
import Clima from "./pages/Projects/Clima";
import Pacientes from "./pages/Projects/Pacientes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/chambea",
    element: <Chambea />,
  },
  {
    path: "/gore",
    element: <Gore />,
  },
  {
    path: "/clima",
    element: <Clima />,
  },
  {
    path: "/pacientes",
    element: <Pacientes />,
  },
]);

export default router;
