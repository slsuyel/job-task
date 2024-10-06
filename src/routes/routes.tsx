import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import Errorpage from '@/components/global/Errorpage';
import Login from '@/pages/Login/Login';
import Home from '@/pages/Home/Home';
import Register from '@/pages/Login/Register';
import Profile from '@/pages/Profile/Profile';
import Orders from '@/pages/Orders/Orders';
import Withdraw from '@/pages/Withdraw/Withdraw';
import Team from '@/pages/Team/Team';
import AddBank from '@/pages/Withdraw/AddBank';
import BalanceRecord from '@/pages/Orders/BalanceRecord';
import PaymentRecords from '@/pages/Orders/PaymentRecords';
import About from '@/pages/Home/About';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      }
      ,
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/orders',
        element: <Orders />,
      }
      , {
        path: '/withdraw',
        element: <Withdraw />,
      }
      , {
        path: '/team',
        element: <Team />,
      }
      , {
        path: '/add-card',
        element: <AddBank />,
      }
      , {
        path: '/balance-record',
        element: <BalanceRecord />,
      }
      , {
        path: '/payment-record',
        element: <PaymentRecords />,
      }
      , {
        path: '/about-us',
        element: <About />,
      }
    ],
  },
]);

export default router;
