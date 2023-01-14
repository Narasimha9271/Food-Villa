const Title =() => (
  <a href="/">
  <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgvmm8PsfTUVh3TqxN0vbCjMIsaCX0lpabPA&usqp=CAU" 
  alt="Food Logo" />
  </a>
);


const Header =  () => {
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
      </div>
  );
};
export default Header;


