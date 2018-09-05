import React from 'react';
import './App.css';

class App extends React.Component{

    constructor(props){
        super(props);

        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
        this.reset=this.reset.bind(this);
        this.state={
            counter: 0
        }
    }

    increment(){
        this.setState((prevState)=>{            
            return{
               counter:prevState.counter+1
            }            
         })              
    }

    decrement(){
        this.setState((prevState)=>{
            return{
                counter:prevState.counter-1
            }
        })
    }

    reset(){
        this.setState((prevState)=>{
            return{
                counter:0
            }
        })
    }

render(){
    return(
        <div className='App'>
         <h1>counter:{this.state.counter}</h1>
         <button onClick={this.increment}>+</button>
         <button onClick={this.decrement}>-</button>
         <button onClick={this.reset}>Reset</button>
        </div> 
);
}
}
export default App;