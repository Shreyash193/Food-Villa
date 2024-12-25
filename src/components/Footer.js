import React from "react";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () =>{

    const {user}=useContext(UserContext);
    return(
        <>  
        <h4>this is footer</h4>
        <h5 className="text-bold text-red-900 p-10 m-10">This site is developed by {user.name}-{user.email}</h5>
        </>
    );
  };

  export default Footer;


 