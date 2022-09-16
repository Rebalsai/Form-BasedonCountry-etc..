import './App.css';
// import Rest from './reactTask/task';
import Parent from './reactTask/child';
// import Parent1 from './reactTask/classParent';
// import Parent2 from './reactTask/classParent1';
import Form from './reactTask/form';
 import Content from './reactTask/classForm';
 import Calculators from './reactTask/calculator';
  import Sum from './reactTask/add';
  import Registor from './reactTask/registorForm';
import Google from './reactTask/google';
 import DropDown from './reactTask/country';
 import Greet from './reactTask/react';
 import Count from './reactTask/states';
// import show from './reactTask/react';
import './reactTask/add'
function App() {
  return (
    <div className="App">
      let num=5
      console.log(num);
      {global.appname}
     <p>world</p>
      {/* <Rest/><br/><br/> */}
      <Parent/>
      <Form/>
      <Content/>
      {/* <Parent1/> 
       <Parent2/> */}
      <Calculators/>
      <Sum/>
      < Registor/>
      <Count/>
      <Google/>
      <DropDown/>
      <Greet/>
      <show/>
    </div>
  );
}

export default App;
