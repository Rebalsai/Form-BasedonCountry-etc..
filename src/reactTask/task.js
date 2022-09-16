// const { useState } = require("react");
import React,{ useState } from "react";
const Rest = () =>{
    const a=10;
    const b=20;
    const c=30;
    
   const[value,setValue] = useState();
   

    return(
        <>
        {/* <Component  value={a}/>
        <Component1 value={b}/>
        <Component2 value={c}/>
        <Component3 value={d}/> */}
         {/* {value}  */}
         <Component update={a}/>
         <Component1 update1={b}/>
         <Component2 update2={c}/>
        
        </>
        
    );


}



const Component =(props) =>{
   //  const[value,setvalue] = useState();
    // const a=10;
    return (
        <>
        <h1> display 1st value:{props.update}</h1>
          {/* {value}<br/>   */}
        {/* <button onClick={()=>setValue(a)}>add1</button><br/> */}
        
        </>
    )
}

const Component1 = props=>{
    
    // const b=20;
    return (
        <>
      <h1>  display 2nd value:{props.update1} </h1><br/>
         {/* <button onClick={()=>setValue(b)}>add2</button> <br/> */}
        </>
    )
}
const Component2 = (props)=>{
    // const c=30;
    return (
        <>
       <h1> display 3rd value:{props.update2} </h1><br/>
        {/* <button onClick={()=>setValue(c)}>add3</button>  */}
        </>
    )
}
// const Component3 = (props)=>{
//     const d=40;
//     return (
//         <>
//        <h1> display 4th value:{props.value}</h1>
//          {/* <button onClick={()=>setValue(d)}>add4</button>  */}
//         </>
//     )
// }
export default Rest;