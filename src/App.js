import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound';
import Root from './pages/Root';
import Main from './pages/Main';
import Category from './pages/Category';
import Ranking from './pages/Ranking';
import Marketing from './pages/Marketing';
import SignIn from './pages/sign/SignIn';
import Select from './pages/sign/Select';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root /> ,
    errorElement : <NotFound />,
    children : [
      { index : true , element : <Main /> } ,
      { path : '/category' , element : <Category />},
      { path : '/ranking' , element : <Ranking />},
      { path : '/marketing' , element : <Marketing />},
      { path : '/sign/select' , element : <Select />},
      { path : '/sign/signin' , element : <SignIn />},
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
