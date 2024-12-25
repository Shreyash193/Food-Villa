import { useState } from "react";


const Section =({title,description,isVisible,setIsVisible})=>{
   
    return(
        <div className="border border-black p-2 m-2">
            <h3 className="text-bold text-xl">{title}</h3>
            { 
            isVisible ? 
            <button onClick={()=>setIsVisible(false)} className="cursor-pointer underline">Hide</button> 
             :
            <button onClick={()=>setIsVisible(true)} className="cursor-pointer underline">Show</button>
            }
            {isVisible && <p>{description}</p>}
        </div>
    )
}

const Instamart=()=>{
    const [visibleSection,setVisibleSection]=useState("about");
    return(
        <div>
            <h1 className="text-3xl font-bold p-2 m-2">Instamart</h1>
            <Section title={"AboutInstaMarat"}
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            isVisible={visibleSection==="about"}
            setIsVisible={()=>
                setVisibleSection("about")
            }
            />

<Section title={"DetailsofInstamert"}
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            isVisible={visibleSection==="detail"}
            setIsVisible={()=>
                setVisibleSection("detail")
            }/>


<Section title={"Teaminstamart"}
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            isVisible={visibleSection==="team"}
            setIsVisible={()=>
                setVisibleSection("team")
            }/>


            {/* <AboutInstaMarat/>
            <DetailsofInstamert/>
            <Teaminstamart/>
            <Products/>
            <Careers/> */}
        </div>
    );
};

export default Instamart;