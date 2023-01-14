    import React from "react";
    import ReactDOM  from "react-dom/client";
		import  Header from "./components/Header";	
    import Body from "./components/Body";
		import Footer from "./components/Footer";

    
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
							<Body/>
							<Footer/>
            </>
        );

    };

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<AppLayout />); 

