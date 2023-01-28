    import React from "react";
    import ReactDOM  from "react-dom/client";
		import  Header from "./components/Header";	
    import Body from "./components/Body";
		import Footer from "./components/Footer";
    import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
    import About from "./components/About"
    import Error from "./components/Error"
    import Contact from "./components/Contact";
    import RestaurentMenu from "./components/RestaurentMenu";


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

    const AppLayout = () => {
        return(
            <>
            <Header/>
            {/* Outlet given by react-router-dom is filled by children configuration */} 
            <Outlet/>
            <Footer/>
            </>
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
            element: <About />,
          },
          {
            path: "/",
            element: <Body />,
          },
          {
            path:"/contact",
            element:<Contact />,
          },
          {
            path:"/restaurent/:resId",
            element: <RestaurentMenu />,
          },
    ]
      },
      

    ])

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<RouterProvider router={appRouter} />); 

