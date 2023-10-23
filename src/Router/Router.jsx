import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import EventDetails from "../component/EventDetails/EventDetails";
import Login from "../Pages/Login/Login";
import ErrorComponent from "../component/ErrorComponent/ErrorComponent";
import Register from "../Pages/Login/Register";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorComponent></ErrorComponent>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("/events.json")
        },
        {
            path: "/event/:id",
            element: <PrivetRoute><EventDetails></EventDetails></PrivetRoute>,
            loader: () => fetch("/events.json")
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        }
      ]
    },
  ]);

export default router;
