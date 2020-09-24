import React from 'react';
import Validation from './Validation';
import Char from './Char';
import './App.css';

class App extends React.Component{
 constructor(props){
     super(props);
     this.state={message:'',type:"password"};
 }
 Test=(value)=>{
     let y=this.state.message+value;
     console.log(typeof(this.state.message));
    this.setState({message:y})
 };
Test1=()=>{
    let x=[1,2,3,4,5,6,7,8,9];
    let a=x.map(item=>{
    return <button className="grid-item" onClick={()=>this.Test(item)}>{item}</button>
    });
    return a;
};
Delete=()=> {
    let b = this.state.message.split('');
    b.pop();
    this.setState({message:b.join('')})
    //console.log(b.join(''));

};
Show=()=>{
   if(this.state.type==='password'){
       this.setState({type:'text'})
   }
   else{
       this.setState({type:'password'})
   }
};
 render(){
     return(
             <div>
             <input type={this.state.type} value={this.state.message}/><br/>

                 <div className="grid-container">{this.Test1()}</div>
                 <button onClick={()=>this.Delete()}>Delete</button>
                 <button onClick={()=>this.Show()}>Show</button>

         </div>
     )
 }
}
export default App;
