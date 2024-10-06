import { Outlet } from "react-router-dom";
import ScrollToTop from "../global/ScrollToTop";
import { GoToTop } from "go-to-top-react";
import Footer from "../global/Footer";

const PrivateLayout = () => {
  return (
    <ScrollToTop>
    <div className="max-w-md mx-auto ">
      
        <Outlet />
      <Footer />
      <GoToTop />
    </div>
  </ScrollToTop>
  );
};

export default PrivateLayout;