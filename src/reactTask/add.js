
import React, { useState } from 'react';
const Sum = () => {
   const [total,setTotal]=useState(0);
   const [input1,setInput1]=useState(0);
   const [input2,setInput2]=useState(0);
   const [total1,setTotal1]=useState(0);
   const [total2,setTotal2]=useState(0);
   const [total3,setTotal3]=useState(0);
   const [total4,setTotal4]=useState(0);
   const[over,setOver]=useState(0);
   const[leave,setLeave]=useState(0);

 const totalSum=(number1,number2)=>{
    const result=parseInt(number1) + parseInt(number2);
   setTotal(result);
}
const handleChange=(e)=>{
    const {name,value}=e.target;
    if(name === 'input1'){
        setInput1(value);
    }else{
        setInput2(value);
    }
}
const blur=(number1)=>{
    const result=parseInt(number1) ;
   setTotal1(result);
}
const focus=(number2)=>{
    const result=parseInt(number2) ;
   setTotal2(result);
}
const onKeyup=(number1)=>{
    const result=parseInt(number1) ;
   setTotal3(result);
}
const onKeydown=(number2)=>{
    const result=parseInt(number2) ;
   setTotal4(result);
}

  return (<>
    <form  onSubmit={(e)=>Sum(e)} >
        Number1: <input name='input1' onChange={(e)=>handleChange(e)} onBlur={()=>blur(input1)} onKeyUp={()=>onKeyup(input1)}/> <br/>
        Number2: <input name='input2' onChange={(e)=>handleChange(e)} onFocus={()=>focus(input2)} onKeyDown={()=>onKeydown(input2)} /> <br/>
        <button type='button' onClick={()=>totalSum(input1,input2)}>show </button> <br/>
        display n1 and n2 value: {total}  <br/>
        display onBlur:{total1}<br/>
        display onFocus:{total2}<br/>
        display onKeyUp:{total3}<br/>
        display onkeydown:{total4}<br/>
 <button onMouseLeave={()=>setLeave(true)} onMouseOver={()=>setOver(true)}>click me</button>  <br/>
 mouse move on button:{over && <> it's me</>}<br/>
        remove on button: {leave && <>10</>}<br/>
    </form>
  </>)
}
export default Sum;

// global.appname = "hello";