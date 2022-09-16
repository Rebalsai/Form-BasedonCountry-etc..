import { Component } from "react";

class Calculators extends Component{
    constructor(){
        super()
    }
    state={
        n:0,
        n1:0,
        n2:0
      }
sum(n1,n2){
    const result=parseInt(n1)+parseInt(n2);
    this.setState({...this.state,n:result})
}
handleChange(e){
  
    const {value,name} = e.target
    this.setState({...this.state,[name]:value});
}debugger

    render(){
        return(
       
        <form>
       Number1:<input type="n1" name="n1" onChange={(e)=>this.handleChange(e)}/><br/>
       Number2:<input type="n2"    name="n2" onChange={(e)=>this.handleChange(e)} onBlur={()=>this.sum(this.state.n1,this.state.n2)}/>{this.state.n}<br/>
       <button type="button" onClick={()=>this.sum(this.state.n1,this.state.n2)}>show</button><br/>
       calculate of n1 and n2 is:{this.state.n}

        </form>
        )
       
    }
}
export default Calculators;