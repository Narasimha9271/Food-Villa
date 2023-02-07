    import React ,{lazy , Suspense, useState} from "react";
    import ReactDOM  from "react-dom/client";
		import  Header from "./components/Header";	
    import Body from "./components/Body";
		import Footer from "./components/Footer";
    import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
    
    import Error from "./components/Error"
    import Contact from "./components/Contact";
    import RestaurentMenu from "./components/RestaurentMenu";
    import Profile from "./components/ProfileClass";
    import Shimmer from "./components/Shimmer";
    import UserContext from "./utils/UserContext";
    //dynamic import for Instamart
    const Instamart = lazy(() => import("./components/Instamart"));
		
    /*     Header 
              -Logo(Title)
              -nav items(navbar)
              -Cart
          Body  
              -search bar
              -Restarunt List 
                  -RestrauntCard(many cards)
                    -Image
										-Name
										-rating
										-cusins
          Footer
							-links
							-copyright
										
            
            */

    const About = lazy(() => import("./components/About"));

    const AppLayout = () => {
        const[user,SetUser] = useState({
          name:"Namste React",
          email:"suppoer@namastedev.com"
        });
        return(
            <UserContext.Provider value={{
              user: user,
            }}>
            <Header/>
           {/* Outlet given by react-router-dom is filled by children configuration */} 
            <Outlet/>
            <Footer/>
            </UserContext.Provider>
        );
    };
  
    const appRouter = createBrowserRouter ([
      {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children:[ 
          {
            path: "/about",
            element: ( <Suspense fallback={ <h1>Loading...</h1>} >
              <About />
              </Suspense>
            ),
            children:[
              {
                path: "profile", //localhost:1234/about/profile
                element: <Profile />,
              }
            ]
          }, 
          {
            path: "/",
            element: <Body user={ 
              {
                name:"Narasimha",
                email:"suppoer@namastedev.com"
              }
            }/>,
          },
          {
            path:"/contact",
            element:<Contact />,
          },
          {
            path:"/restaurent/:resId",
            element: <RestaurentMenu />,
          },
          {
            path:"/instamart",
            element: <Suspense fallback={<Shimmer />}>
              <Instamart />
            </Suspense>,
          },
    ],
  },
]);

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<RouterProvider router={appRouter} />); 

