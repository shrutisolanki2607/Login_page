import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Welcome from './components/Welcome';
import Home from './components/Home';


const route = createBrowserRouter([
  {
    path: "/",
    element: <Welcome /> 
  },
  {
    path: "/SignIn",
    element: <SignIn /> 
  },
  {
    path: "/Signup",
    element: <SignUp /> 
  },
  {
    path : "/Home",
    element : <Home/>
  }
])

function App() {

  return (
    <div className="App">
         <RouterProvider router={route} />
      </div>
  );
}

export default App;
