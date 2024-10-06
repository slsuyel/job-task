import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import Errorpage from '@/components/global/Errorpage';
import Login from '@/pages/Login/Login';
import Home from '@/pages/Home/Home';
import Register from '@/pages/Login/Register';
import Profile from '@/pages/Profile/Profile';
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
      },
      {
        path: '/profile',
        element: <Profile />,
      }
    ],
  },
]);

export default router;
