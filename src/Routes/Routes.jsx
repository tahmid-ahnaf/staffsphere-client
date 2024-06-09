import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Worksheet from "../Pages/Dashboard/Worksheet/Worksheet";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import EmployeeList from "../Pages/Dashboard/EmployeeList/EmployeeList";
import EmployeeDetails from "../Pages/Dashboard/EmployeeDetails/EmployeeDetails";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AllEmployeeList from "../Pages/Dashboard/AllEmployeeList/AllEmployeeList";


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
        path: 'contact-us',
        element: <ContactUs></ContactUs>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'secret',
        // element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // normal user routes
      {
        path: 'work-sheet',
        element: <Worksheet></Worksheet>
      },

      {
        path: 'payment-history',
        element: <PaymentHistory></PaymentHistory>
      },

      {
        path: 'employee-list',
        element: <EmployeeList></EmployeeList>
      },

      {
        path: 'all-employee-list',
        element: <AllEmployeeList></AllEmployeeList>
      },

      {
          path: 'details/:email',
          element: <EmployeeDetails></EmployeeDetails>,
          
        },

      // admin only routes
      // {
      //   path: 'addItems',
      //   element: <AdminRoute><AddItems></AddItems></AdminRoute>
      // },
      // {
      //   path: 'manageItems',
      //   element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      // },
      // {
      //   path: 'updateItem/:id',
      //   element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
      //   loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      // },
      // {
      //   path: 'all-employee-list',
      //   element: <AdminRoute><AllEmployees></AllEmployees></AdminRoute>
      // }

    ]
  }
]);