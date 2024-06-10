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
import AdminRoute from "./AdminRoute";
import EmployeeRoute from "./EmployeeRoute";
import HrRoute from "./HrRoute";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Progress from "../Pages/Dashboard/Progress/Progress";


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
        element: <EmployeeRoute><Worksheet></Worksheet></EmployeeRoute>
      },

      {
        path: 'payment-history',
        element: <EmployeeRoute><PaymentHistory></PaymentHistory></EmployeeRoute>
      },

      {
        path: 'employee-list',
        element: <HrRoute><EmployeeList></EmployeeList></HrRoute>
      },

      {
        path: '/dashboard/employee-list/payment/:salary/:month/:year/:email',
        element: <HrRoute><Payment></Payment></HrRoute>
      },

      {
        path: '/dashboard/employee-list/details/:email/:name/:designation/:photoURL',
        element: <HrRoute><EmployeeDetails></EmployeeDetails></HrRoute>
      },

      {
        path: 'progress',
        element: <HrRoute><Progress></Progress></HrRoute>
      },

        {
          path: 'all-employee-list',
          element: <AdminRoute><AllEmployeeList></AllEmployeeList></AdminRoute>
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
      //   loader: ({params}) => fetch(`https://b9a12-server-side-tahmid-ahnaf.vercel.app/menu/${params.id}`)
      // },
      // {
      //   path: 'all-employee-list',
      //   element: <AdminRoute><AllEmployees></AllEmployees></AdminRoute>
      // }

    ]
  }
]);