import { useEffect, useState } from "react";

const Profile=(props)=>{

    const [Count,setCount]=useState(0);

    useEffect(()=>{

    }); 
    
    return(
        <div>
            <h1>Profile Component</h1>
            <h3>Name:{props.name}</h3>
            <h3>Count:{Count}</h3>
            <button onClick={()=>setCount(1)}>Click</button>
        </div>
    )
}

export default Profile;