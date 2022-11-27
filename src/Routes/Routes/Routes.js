import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddaProduct from "../../Pages/AddaProduct/AddaProduct";
import Category from "../../Pages/Categories/Category/Category";

import AllBuyer from "../../Pages/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import MyOrder from "../../Pages/Dashboard/MyOrder/MyOrder";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import Payment from "../../Pages/Dashboard/Payment/Payment";

import ReportedProduct from "../../Pages/Dashboard/ReportedProduct/ReportedProduct";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/LoginAndRegister/Login/Login";
import Register from "../../Pages/LoginAndRegister/Register/Register";
import NotFound from "../../Pages/NotFound/NotFound";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";
import DisplayErrorElement from "../../Pages/Shared/DisplayErrorElement/DisplayErrorElement";
import CustomerMessage from "../../Pages/Dashboard/CustomerMessage/CustomerMessage";
import Blog from "../../Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayErrorElement></DisplayErrorElement>,
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
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://recycle-clothes-server.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <DisplayErrorElement></DisplayErrorElement>,
    children: [
      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/my-order",
        element: <MyOrder></MyOrder>,
      },
      {
        path: "/dashboard/add-product",
        element: (
          <SellerRoute>
            <AddaProduct></AddaProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/all-seller",
        element: (
          <AdminRoute>
            <AllSeller></AllSeller>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reported-product",
        element: (
          <AdminRoute>
            <ReportedProduct></ReportedProduct>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/customer-message",
        element: (
          <AdminRoute>
            <CustomerMessage></CustomerMessage>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/my-product",
        element: (
          <SellerRoute>
            <MyProduct></MyProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/all-buyer",
        element: (
          <AdminRoute>
            <AllBuyer></AllBuyer>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            `https://recycle-clothes-server.vercel.app/bookings/${params.id}`
          ),
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
export default router;
