import { createBrowserRouter } from "react-router-dom";
import Root from "../Layoutes/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import DetailsInfo from "../Components/DetailsInfo/DetailsInfo";
import PrivateRoute from "./PrivateRoute";
import Reviews from "../pages/Reviews/Reviews";
import EventPlaning from "../pages/EventPlaning/EventPlaning";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("/cards.json")
        },

        {
          path: "/reviews",
          element: <PrivateRoute><Reviews></Reviews></PrivateRoute>

        },


        {
          path: "/event",
          element: <PrivateRoute><EventPlaning></EventPlaning></PrivateRoute>

        },

        {
          path: "/card/:id",
          element: <PrivateRoute><DetailsInfo></DetailsInfo></PrivateRoute>,
          loader: () => fetch("/cards.json")
       
        },
        {
            path:"/login",
            element: <Login></Login>
        },
        {
            path:"/register",
            element: <Register></Register>
        }
      ]
    },
  ]);



  export default router;