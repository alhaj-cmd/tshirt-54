
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './component/Home/Home';
import Oders from './component/Orders/Oders';
import Grandpa from './component/Grandpa/Grandpa';

function App() {
  
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:()=>fetch('t-shirt.json'),
          element:<Home></Home>
        },
        {
          path:'/oders',
          element:<Oders></Oders>

        },
        {
          path:'/grandpa',
          element:<Grandpa></Grandpa>
        }
      ]
    }

  ])
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
