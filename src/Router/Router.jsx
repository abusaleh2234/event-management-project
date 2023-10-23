import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import EventDetails from "../component/EventDetails/EventDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("/events.json")
        },
        {
            path: "/event/:id",
            element: <EventDetails></EventDetails>,
            loader: () => fetch("/events.json")
        }
      ]
    },
  ]);

export default router;
