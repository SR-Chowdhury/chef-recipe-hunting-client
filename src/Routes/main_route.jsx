import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import ChecfRecipe from "../Pages/ChecfRecipe/ChecfRecipe";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home/>,
          loader: () => fetch(`https://chef-recipe-hunting-server-sr-chowdhury.vercel.app/chef-info`)
        },
        {
          path: '/blog',
          element: <Blog/>
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/register",
          element: <Register/>,
        },
        {
          path: '/chef-recipe/:id',
          element: <PrivateRoute><ChecfRecipe/></PrivateRoute>,
          loader: ({params}) => fetch(`https://chef-recipe-hunting-server-sr-chowdhury.vercel.app/dishes/${params.id}`)
        }
      ],
    },
  ]);

  export default router;