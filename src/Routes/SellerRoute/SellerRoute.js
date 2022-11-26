import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useSeller from "../../hooks/useSeller";
import Loading from "../../Pages/Shared/Loading/Loading";

const SellerRoute = ({ children }) => {
  const { user, loading, logOut } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();

  if (loading || isSellerLoading) {
    return <Loading></Loading>;
  }

  if (user && isSeller) {
    return children;
  }
  logOut();
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
