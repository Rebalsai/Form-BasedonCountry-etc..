// import {useState} from 'react';

// import { useState } from "react";

// const Google = () => {
//   const [message, setMessage] = useState('');

//   const handleChange = event => {
//     setMessage(event.target.value);

//     console.log('value is:', event.target.value);
//   };

//   const handleClick = event => {
//     event.preventDefault();

//     // 👇️ value of input field
//     console.log('handleClick 👉️', message);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         id="message"
//         name="message"
//         onChange={handleChange}
//         value={message}
//         autoComplete="off"
//       />

//       <h2>Message: {message}</h2>

//       <button onClick={handleClick}>Click</button>
//     </div>
//   );
// };

// export default Google;

import React, { useState } from 'react'
function Google() { 
    const [info, setInfo]=useState({name:"",phoneNumber:""})

    // function handleClick (e)  { 

    //     const { name, value } = e.target;
    //     setInfo({ ...info, [name]: value });
    //     console.log(info);
    //   console.log("User click","sai") 
      
    //} 
     const details=(values) =>{
        debugger
        let obj=values
        values.name=obj.name
        values.phoneNumber=obj.phoneNumber
        setInfo(obj)
        console.log(info)
     }
     //details();
    
    return ( 
        <>
        <form>
        Name:<input type="text" name= "name" /><br />
        Phone Number:<input type="number" name="phoneNumber" />
      <button onClick={()=>details()}>
        Button 
      </button> 
      </form>
      </>
      
    ); 
    
  }; 
  
  export default Google;