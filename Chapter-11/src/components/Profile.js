import React, { useState } from 'react';

const Profile = (props) => {
  const [counting,setCounting] = useState(0);
  const [counting2,setCounting2] = useState(0);
  return (
    <div>
      <h2>Profile Functional Component</h2>
      <h3>Name: {props.name}</h3>
      <h3>Counting :{counting} </h3>
      <h3>Couting2 :{counting2} </h3>
      <button onClick={() => {
        
        setCounting2(2);
      }
      } >ChooseAnyNAmeforBtn</button>

      { //toggling 0 or 1
      counting?  (<button onClick={() => setCounting(0) }>click to 0</button>
          ):( 
          <button onClick={() => setCounting(1) }>Click to 1</button>)
      }

    </div>
  );
};

export default Profile;