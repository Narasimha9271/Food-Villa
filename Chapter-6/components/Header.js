import { useState } from "react";

const loggedInUser = () => {
  //API Call to cheek authentication
  return true;
}


const Title =() => (
  <a href="/">
  <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgvmm8PsfTUVh3TqxN0vbCjMIsaCX0lpabPA&usqp=CAU" 
  alt="Food Logo" />
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
  
  return (
      <div className="header">
          <Title/>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
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


