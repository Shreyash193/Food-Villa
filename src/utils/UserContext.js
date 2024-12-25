import { createContext } from "react";

const UserContext=createContext({
    user:{
    name:"Dumpy Name",
    email:"dummu@gmail.com",
    }
});

export default UserContext;