
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import ProtectedRoutes from "./utiles/ProtectedRoutes";
function App() {
   const router = createBrowserRouter([
       { path: "/", element: (<ProtectedRoutes><Home /></ProtectedRoutes> )},
       { path: "/login", element: <Login /> },
       { path: "/signUp", element: <SignUp /> },
     ]
   )
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
