import React from 'react'
import { Outlet } from 'react-router-dom';
import ProfileClassComponent from './ProfileClass';
import ProfileFunctionalComponent from './Profile';
import { Component} from "react";
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
        <p>This is Namaste React Course about Routing</p>
        <ProfileClassComponent name={'Iam a class'}/>
        <ProfileFunctionalComponent name={'Iam a function'} />
      </div>
    );
  }

}

export default About;