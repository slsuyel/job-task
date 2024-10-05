import { Outlet } from 'react-router-dom';
import Footer from '../global/Footer';

import { GoToTop } from 'go-to-top-react';
import ScrollToTop from '../global/ScrollToTop';

const MainLayout = () => {
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

export default MainLayout;
