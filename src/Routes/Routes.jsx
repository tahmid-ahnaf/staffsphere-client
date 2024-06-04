import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
// import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
          path: '/',
          element: <Home></Home>
      }, 
      {
        path: 'login',
        // element: <Login></Login>
      },
      {
        path: 'signup',
        // element: <SignUp></SignUp>
      },
      {
        path: 'secret',
        // element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }
    ]
  },
  {
    path: 'dashboard',
    // element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'cart',
        // element: <Cart></Cart>
      },

      // admin routes
      {
        path: 'users',
        // element: <AllUsers></AllUsers>
      }

    ]
  }
]);