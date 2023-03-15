import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound';
import Root from './pages/Root';
import Home from './pages/Home';
import Ranking from './pages/Ranking';
import SignIn from './pages/sign/SignIn';
import SignEmail from './pages/sign/Email';
import SignUp from './pages/sign/SignUp';
import Find from './pages/sign/Find';
import CategoryMain from './pages/category/Main';
import Show from './pages/category/Show';
import MarketingMain from './pages/marketing/Main';
import Detail from './pages/detail/Detail';
import MarketingCounsel from './pages/detail/Counsel';
import SimpleReceipt from './pages/SimpleReceipt';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root /> ,
    errorElement : <NotFound />,
    children : [
      { index : true , element : <Home /> } ,
      { path : '/sign' , element : <SignIn />},
      { path : '/sign/email' , element : <SignEmail />},
      { path : '/sign/signUp' , element : <SignUp />},
      { path : '/sign/Find' , element : <Find />},
      { path : '/ranking' , element : <Ranking />},
      { path : '/category' , element : <CategoryMain />},
      { path : '/category/show' , element : <Show />},
      { path : '/marketing' , element : <MarketingMain />},
      { path : '/detail/:test' , element : <Detail />},
      { path : '/receipt' , element : <SimpleReceipt />},
      { path : '/marketing/counsel' , element : <MarketingCounsel />},
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
