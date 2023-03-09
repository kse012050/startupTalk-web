import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound';
import Root from './pages/Root';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root /> ,
    errorElement : <NotFound />,
    children : [
      { index : true , element : <Home /> } ,
      { path : '/test' , element : <NotFound />}
    ]
  }
])

function App() {
  return (
    <div >
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
