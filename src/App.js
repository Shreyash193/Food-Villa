import React,{lazy,Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import Header  from "./components/Header";//default import 
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter , RouterProvider,Outlet} from "react-router-dom";
//import About from "./components/About";
import Error from "./components/Error";
import Contact  from "./components/contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
//import Instamart from "./components/Instamart";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const Instamart=lazy(()=>import("./components/Instamart"));
const About=lazy(()=>import("./components/About"));




const AppLayout = () => {
  const [user,setUser]=useState({
    name:"Shreyash Gore",
    email:"shreyashgore193@gmail.com",
  })
  return (
    <Provider store={store}>
    <UserContext.Provider 
    value={{
      user:user,
      setUser:setUser,
    }}
    >
      <Header />
      {/* {outlet} */}
      <Outlet/>
      <Footer />
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>,
        
      },
      {
        path:"/about",
        element:<Suspense fallback={<h1>Loading...</h1>}>
          <About/>
        </Suspense>,
        children:[
          {
            path:"profile",
            element:<Profile/>,
          }
        ]
      },
      {
        path:"/contact",
        element:<Contact/>, 
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>,
      },
      {
        path:"/instamart",
        element:<Suspense fallback={<Shimmer/>}>
          <Instamart/>
        </Suspense>,
      },
      {
        path:"/cart",
        element:<Cart/>,
      },
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
