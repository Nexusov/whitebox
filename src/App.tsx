import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Suspense } from 'react';
import Home from './pages/home/Home';
import Loader from './components/loader/Loader';

const router = createBrowserRouter([
  {
    index: true,
    element: <Suspense fallback={<Loader />}><Home /></Suspense>,
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
