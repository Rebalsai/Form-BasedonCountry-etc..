
import { Component } from "react";

class Content extends Component {
    state = {
        Employee: {
            name: "",
            Email: "",
            Age: "",
            Gender: "",
            Phone: "",
            Address: ""
        }
    }
    myfunction(e){
        const { name, value } = e.target;
        this.setState({ ...this.state, [name]: value });
        console.log(e.target.value);
    }

    saveData = (e) => {
        e.preventDefault();
        console.log(this.state)
    }


    render() {
        return (
            <>
                <div>
                    <h1>Welcome</h1>
                    <label>Name</label>
                    <input type="text" name="Name" onKeyUp={(e) => this.myfunction(e)} /><br />
                    <label>Email</label>
                    <input type="text" name="Email" onKeyUp={(e) => this.myfunction(e)} /><br />
                    <label>Age</label>
                    <input type="text" name="Age" onKeyUp={(e) => this.myfunction(e)} /><br />
                    <label>Gender</label>
                    <select name="Gender" onKeyUp={(e) => this.myfunction(e)}>
                        <option>Male</option>
                        <option>FeMale</option>
                    </select><br />
                    <label>Phone</label>
                    <input type="text" name="Phone" onKeyUp={(e) => this.myfunction(e)} /><br />
                    <label>Address</label>
                    <input type="text" name="Address" onKeyUp={(e) => this.myfunction(e)} /><br />
                    <button onClick={(e) => this.saveData(e)}>submit</button>
                </div>
            </>
        )
    }
}
export default Content;

