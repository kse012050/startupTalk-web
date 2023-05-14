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
import MarketingDetail from './pages/marketing/Detail';
import MarketingCounsel from './pages/marketing/Counsel';
import SimpleReceipt from './pages/SimpleReceipt';
import Detail from './pages/detail/Detail';
import MyMain from './pages/my/Main';
import MyNotice from './pages/my/Notice';
import MyAccount from './pages/my/Account';
import MyService from './pages/my/Service';
import MobileSetting from './pages/my/MobileSetting';

import { ResponsiveContext } from './context/Responsive';
import { useEffect, useState } from 'react';

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
      { path : '/category/search/:search' , element : <CategoryMain />},
      { path : '/category/show' , element : <Show />},
      { path : '/category/show/id/:id' , element : <Show />},
      { path : '/category/show/name/:name' , element : <Show />},
      { path : '/marketing' , element : <MarketingMain />},
      { path : '/marketing/detail' , element : <MarketingDetail />},
      { path : '/marketing/detail/:id' , element : <MarketingDetail />},
      { path : '/marketing/counsel' , element : <MarketingCounsel />},
      { path : '/detail/:id' , element : <Detail />},
      { path : '/receipt' , element : <SimpleReceipt />},
      { path : '/my' , element : <MyMain />},
      { path : '/my/notice' , element : <MyNotice />},
      { path : '/my/account' , element : <MyAccount />},
      { path : '/my/service' , element : <MyService />},
      { path : '/my/mobileSetting' , element : <MobileSetting />},
    ]
  },
])

function App() {
  const [responsive , setResponsive] = useState(true);
  useEffect(()=>{
    resizeEvent();
    window.addEventListener('resize',()=>{
      resizeEvent();
    })
  },[])

  const resizeEvent = () =>{
    window.innerWidth > 780 ? setResponsive(true) : setResponsive(false);
  }

  return (
    <ResponsiveContext.Provider value={responsive}>
      <RouterProvider router={router} />
    </ResponsiveContext.Provider>
  );
}

export default App;
