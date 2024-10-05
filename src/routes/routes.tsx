import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import Errorpage from '@/components/global/Errorpage';
import Login from '@/pages/Login/Login';
import Home from '@/pages/Home/Home';
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
      }
    ],
  },
]);

export default router;
