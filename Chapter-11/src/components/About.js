import React from 'react'
import { Outlet } from 'react-router-dom';
import ProfileClassComponent from './ProfileClass';
import ProfileFunctionalComponent from './Profile';
import { Component} from "react";
import UserContext from '../utils/UserContext';

class About extends Component{
  constructor(props){
    super(props);
    
    console.log("constructor");
  }

    componentDidMount(){

    console.log("componentdidmount is called");
  }

  render(){
    return (
      <div>
        <h1>About Us page</h1> 

        <UserContext.Consumer>
          {/* {(value)=> console.log(value)} */}
          {({user}) => <h4 className='font-bold text-xl p-10'>{user.name}-{user.email}</h4>}
        </UserContext.Consumer>

        <p>This is Namaste React Course about Routing</p>
        <ProfileClassComponent name={'Iam a class'}/>
        <ProfileFunctionalComponent name={'Iam a function'} />
      </div>
    );
  }

}

export default About;