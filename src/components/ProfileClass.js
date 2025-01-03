import React from "react";

class Profile extends React.Component{

    constructor(props){
        super(props);
        //create state
        this.state={
            userInfo:{
                name:"Dummy Name",
                location:"Dummy Location",
            },
        }; 
    }

    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/Shreyash193");
       const json=await data.json();
       this.setState({
        userInfo:json,
       })

    }

    componentDidUpdate(){
         
    }

    componentWillUnmount(){

    }
     
   render(){
    return(
        <div>
            <h1>Profile Class Component</h1>
            <img src={this.state.userInfo.avatar_url}/>
            <h2>Name:{this.state.userInfo.name}</h2>
            <h3>Location:{this.state.userInfo.location}</h3>
        </div>
    ) 
   }
}

export default Profile;