import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddaProduct from "../../Pages/AddaProduct/AddaProduct";
import Men from "../../Pages/Categories/Category/Category";
import AllBuyer from "../../Pages/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import MyOrder from "../../Pages/Dashboard/MyOrder/MyOrder";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import MyWishlist from "../../Pages/Dashboard/MyWishlist/MyWishlist";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/LoginAndRegister/Login/Login";
import Register from "../../Pages/LoginAndRegister/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/sign-up",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/category/:id",
        element: <Men></Men>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard/all-users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/my-order",
        element: <MyOrder></MyOrder>,
      },
      {
        path: "/dashboard/add-product",
        element: <AddaProduct></AddaProduct>,
      },
      {
        path: "/dashboard/all-seller",
        element: <AllSeller></AllSeller>,
      },
      {
        path: "/dashboard/my-wishlist",
        element: <MyWishlist></MyWishlist>,
      },
      {
        path: "/dashboard/my-product",
        element: <MyProduct></MyProduct>,
      },
      {
        path: "/dashboard/all-buyer",
        element: <AllBuyer></AllBuyer>,
      },
    ],
  },
]);
export default router;
