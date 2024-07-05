import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Suspense, useEffect } from 'react';
import Home from './pages/home/Home';
import Loader from './components/loader/Loader';
import onStartup from './utils/onStartup';

const router = createBrowserRouter([
  {
    index: true,
    element: <Suspense fallback={<Loader />}><Home /></Suspense>,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />
  }
]);

function App() {
  useEffect(() => {
    onStartup(); 
  }, []);

  return (
    <RouterProvider router={router} />
  )
}

export default App
