import { useEffect, useState } from "react";
import Logo from "../assets/img/foodvilla.png"
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";


const loggedInUser = () => {
  //API Call to cheek authentication
  return true;
}


const Title =() => (
  <a href="/">
  <img className="h-28 p-2" alt="logo" src={Logo} />
  </a>
);



const Header =  () => {

  {/*To make a functionality:
  On clicking Log In button ,It should become Log Out button
  On clicking Log Out button ,It should become Log in button
  That is Toggle

  For this we use " useState()"
   */

  }
  const [isloggedIn,setIsLoggedIn] = useState(false);

  const isOnline = useOnline(false);
  
  useEffect(() => {
    console.log("useEffect")

  },[])

  console.log("render");

  return (
      <div className="flex justify-between bg-pink-50 shadow-lg ">
          <Title/>
        <div className="nav-items">
          <ul className="flex  py-10 " >
            <li className="px-2">
              <Link to="/">Home</Link>
            </li>
            
            <li className="px-2">
              <Link to="/about">About Us</Link>
            </li>
            
            <li className="px-2">
              <Link to="/contact">Contact</Link>
            </li>

            <li className="px-2">
              <Link to="/instamart">Instamart</Link>
            </li>

            <li className="px-2">Cart</li>
          </ul>
        </div>
        <h1>{isOnline? '🟩' : '🔴'}</h1>
        {
          // Any JavaScript Expression works inside curly Brackets
          isloggedIn ? (<button onClick={() => setIsLoggedIn(false) }>Log out</button>
          ):( 
          <button onClick={() => setIsLoggedIn(true) }>Log In</button>)
        }
      </div>
  );
};
export default Header;


