import { useEffect, useState } from "react";
import Logo from "../assets/img/foodvilla.png"
import { Link } from "react-router-dom";

const loggedInUser = () => {
  //API Call to cheek authentication
  return true;
}


const Title =() => (
  <a href="/">
  <img className="logo" alt="logo" src={Logo} />
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
  
  useEffect(() => {
    console.log("useEffect")

  },[])

  console.log("render");

  return (
      <div className="header">
          <Title/>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            
            <li>
              <Link to="/about">About Us</Link>
            </li>
            
            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>Cart</li>
          </ul>
        </div>
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


