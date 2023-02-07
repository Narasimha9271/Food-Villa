  import React from "react";

  class Profile extends React.Component{
    
    constructor(props){
      super(props)
      //Create State
      this.state = {
        userInfo: {
          name: "Dummy anme",
          location: "Dummy location"
        },
      };
    }

    async  componentDidMount(){
      //API Calls
      //Best place to make an api call
    const data = await fetch("https://api.github.com/users/Narasimha9271");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
      console.log("componentDIdMount is called")
    }

    componentDidUpdate(){
      console.log("Component did update is called")
    }

    componentWillUnmount(){
      console.log("component will unmount")
    }

    render(){
      console.log("render is called");
      return(
        <div>
          <h2>This is Profile class based Component</h2>
          <img src={this.state.userInfo.avatar_url} alt="" />
          <h2>Name:{this.state.userInfo.name} </h2>
          <h2>Location:{this.state.userInfo.location}</h2>
        </div>
      )
    }
  }

  export default Profile;