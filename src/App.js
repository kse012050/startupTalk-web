import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound';
import Root from './pages/Root';
import Main from './pages/Main';
import Ranking from './pages/Ranking';
import Marketing from './pages/Marketing';
import SignIn from './pages/sign/SignIn';
import Select from './pages/sign/Select';
import SignEmail from './pages/sign/Email';
import SignUp from './pages/sign/SignUp';
import Find from './pages/sign/Find';
import CategoryMain from './pages/category/Main';
import Show from './pages/category/Show';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root /> ,
    errorElement : <NotFound />,
    children : [
      { index : true , element : <Main /> } ,
      { path : '/ranking' , element : <Ranking />},
      { path : '/marketing' , element : <Marketing />},
      { path : '/sign/select' , element : <Select />},
      { path : '/sign/email' , element : <SignEmail />},
      { path : '/sign/signUp' , element : <SignUp />},
      { path : '/sign/signin' , element : <SignIn />},
      // { path : '/sign/Find' , element : <Find />},
      // { path : '/sign/Find/:pageName' , element : <Find />},
      { path : '/sign/Find/email' , element : <Find />},
      { path : '/sign/Find/inquiry' , element : <Find />},
      { path : '/category' , element : <CategoryMain />},
      { path : '/category/show' , element : <Show />},
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
