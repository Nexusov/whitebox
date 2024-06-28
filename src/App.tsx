import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Suspense, useEffect } from 'react';
import Home from './pages/home/Home';
import Loader from './components/loader/Loader';
import { useStore }  from './store/store' ;
import { getCountryByIP } from './utils/getCountryByIp';

const router = createBrowserRouter([
  {
    index: true,
    element: <Suspense fallback={<Loader />}><Home /></Suspense>,
  }
]);

function App() {
  const setCountryCode = useStore(state => state.setCountryCode);

  useEffect(() => {
    const fetchCountryCode = async () => {
      const countryCode = await getCountryByIP();
      setCountryCode(countryCode);
    };

    fetchCountryCode();
  }, [setCountryCode]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
