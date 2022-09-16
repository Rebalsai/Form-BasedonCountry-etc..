import React, { useState } from 'react'

const Form = () => {
    //const [info, setInfo] = useState({ pname: "", age: "", email: "", phone: "", address: " ", gender: "" })
    const [info, setInfo] = useState()
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [gender, setGender] = useState("")
    const handleKeyUp = (e) => {

        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
        console.log(e.target.value);
    }
    
    
 const handleChange =(e,type)=>{
    let obj={
        name:"PNAME " ,                                                                       
        age:"AGE ",
        email:"EMAIL ",
        phone:"PHONE ",
        address:"ADDRESS",
        gender:"GENDER"
     
    }
   if(type=="PNAME"){
    obj.name=e.target.value
    setName(name)
    console.log(obj)
   }
   else if(type=="AGE"){
    obj.age=e.target.value
    setName(age)
   }
   else if(type=="EMAIL"){
    obj.email=e.target.value
    setName(email)
}
else if(type=="PHONE"){
    obj.phone=e.target.value
    setName(phone)
}
else if(type=="ADDRESS"){
    obj.address=e.target.value
    setName(address)
}
else if(type=="GENDER"){
    obj.gender=e.target.value
    setName(gender)
}
console.log(obj)
 }

    const saveData = (e) => {

         e.preventDefault();
        console.log(info)
    }
    return (
        <>
            <div>
                Name: <input name="pname" onChange={(e) => handleChange(e,"PNAME")} />   </div>
            <div> Age:<input name="age" onChange={(e) => handleChange(e,"AGE")} /> </div>
            <div> Email:<input name="email" onChange={(e) => handleChange(e,"EMAIL")} /></div>
            <div> Gender:<select name="gender" onChange={(e) => handleChange(e,"GENDER")}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select></div>
            <div> Phone:<input name="phone" onChange={(e) => handleChange(e,"PHONE")} /> </div>
            <div> Address:<input name="address"onChange={(e) => handleChange(e,"ADDRESS")} /> </div>
            <div>
                <button onClick={() => saveData()}>submit</button>
            </div>
        </>

    )

}

export default Form;