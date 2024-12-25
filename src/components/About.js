import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import React from "react";
import UserContext from "../utils/UserContext";

// const About2=()=>{
//     return(
//         <div>
//             <h1>About Us Page</h1>
//             <p>This is namaste react live course</p>
//             <ProfileFunctionalComponent name={"Shreyash"}/>
//             <Profile name={"shreyash Class"}/>
            
//             {/* <Outlet/> */}
//         </div>
//     )
// }

class About extends React.Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
            <h1>About Us Page</h1>
            <p>This is namaste react live course</p>
            <UserContext.Consumer>
                {({user})=>(
                    <h4 className="font-bold text-xl p-10">{user.name}- {user.email}</h4>
                )}
            </UserContext.Consumer>
            <Profile name={"First Child"}/>
            
            {/* <Outlet/> */}
        </div>

        )
    }
}

export default About;