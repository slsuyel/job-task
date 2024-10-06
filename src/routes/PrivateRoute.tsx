import Loader from "@/components/ui/Loader";
import { callApi } from "@/utils/functions";
import { ReactNode, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }:{children:ReactNode}) => {
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

            console.log(response);
            
          if (response && response.status === 200) {
            // Token is valid
            setIsValidToken(true);
          } else {
            // Token is invalid or expired
            setIsValidToken(false);
          }
        } catch (error) {
          console.error("Token validation error:", error);
          setIsValidToken(false);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    checkToken();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (isValidToken) {
    return children; // Token is valid, allow access
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
