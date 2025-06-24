import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {

  const isLoggedIn = localStorage.getItem("token");

  return isLoggedIn ? element : <Navigate to="/home" />;

  // const token = useSelector((state) => state.auth.token);

  // if (token) {
  //   return element;
  // } else {
  //   return <Navigate to="/login" replace />;
  // }
};

export default PrivateRoute;