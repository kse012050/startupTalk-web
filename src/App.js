import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound';
import Root from './pages/Root';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Category from './pages/Category';
import Ranking from './pages/Ranking';
import Marketing from './pages/Marketing';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root /> ,
    errorElement : <NotFound />,
    children : [
      { index : true , element : <Home /> } ,
      { path : '/category' , element : <Category />},
      { path : '/ranking' , element : <Ranking />},
      { path : '/marketing' , element : <Marketing />},
      { path : '/singin' , element : <SignIn />},
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
