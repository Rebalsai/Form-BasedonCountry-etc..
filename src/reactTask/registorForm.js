import React, { useState } from 'react'
const Registor = () => {
    const [info, setInfo] = useState({ Name: "", PhoneNumber:"",EmailId:"",Password:"",Address:"",Gender:"",hobbies:""})

    const handleKeyUp = (e) => {

        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
        // console.log(e.target.value);
    }
    const saveData = (e) => {

        e.preventDefault();
        console.log(info)
    }
    return (
        <>
        
            <form>
                <h1> Registration Form</h1>
           
                Name:<input type="text" name="Name" placeholder='name' onChange={(e) => handleKeyUp(e)}/><br />

                Phone Number:<input type="number" name="PhoneNumber" placeholder='phone number' onChange={(e) => handleKeyUp(e)}/><br />
                Email Id:<input type="text" name="EmailId" placeholder='email id' onChange={(e) => handleKeyUp(e)} /><br />
                Password:<input type='Password'name="Password" placeholder='password' onChange={(e) => handleKeyUp(e)}/><br />
                Gender:
                <input type='radio' name='Gender' value="Male" onChange={(e) => handleKeyUp(e)}/>Male
                <input type='radio' name='Gender'  value = "Female" onChange={(e) => handleKeyUp(e)}/>Female
                <br />
                Date Of Birth:<input type="date" name="bday"  onChange={(e) => handleKeyUp(e)}/><br />
                Education Qualification:
                <select name='Education' onChange={(e) => handleKeyUp(e)}>
                    <option>B.TECH</option>
                    <option>DEGREE</option>
                    <option>POLY</option>
                    <option>PHARMACY</option>
                </select>   <br />
                Hobbies:<input type='checkbox' name='hobbies' value ="Dance" placeholder='hobbies' onChange={(e) => handleKeyUp(e)}/>Dance
                <input type='checkbox' name='hobbies' value="BikeRide" onChange={(e) => handleKeyUp(e)}/>BikeRide
                <input type='checkbox' name='hobbies' value="Playing online games" onChange={(e) => handleKeyUp(e)}/>Playing online games
                <input type='checkbox' name='hobbies' value="Reading" onChange={(e) => handleKeyUp(e)}/>Reading<br />
                Address:<textarea name ="Address" placeholder='enter address' onChange={(e) => handleKeyUp(e)}/><br />

                <button onClick={(e) => saveData(e)}>Submit</button>&emsp;
                <button>Reset</button>




            </form>

        </>

    )
}
export default Registor;