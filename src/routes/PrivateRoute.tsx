import Loader from "@/components/ui/Loader";
import { callApi } from "@/utils/functions";
import { ReactNode, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [isValidToken, setIsValidToken] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await callApi("GET", "/verify-token", null, {
            Authorization: `Bearer ${token}`,
          });

          // If the token is valid, set the state accordingly
          if (response && response.status === 200) {
            setIsValidToken(true);
          } else {
            setIsValidToken(false);
          }
        } catch (error) {
          console.error("Token validation error:", error);
          setIsValidToken(false);
        }
      } else {
        setIsValidToken(false); // Token not found, set to false
      }
      setLoading(false); // Set loading to false after the check is done
    };

    checkToken();
  }, [location]); // Dependency on location to check on route change

  if (loading) {
    return <Loader />;
  }

  // If token is valid, render the children
  if (isValidToken) {
    return children;
  }

  // If not valid, redirect to login
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
