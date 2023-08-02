// import { Api } from "./components/Api/Api";
// import { Events } from "./components/Events/Events";
import React, { useState } from "react";
import "./App.css"

function App() {

  const[state, setState]=useState(0);

  const handleDecreament=()=> {
      if(state >0){
        setState((prevState)=> prevState - 1);
      }
      else{
        alert("Value cannot be Negative !!");
      }
  }
 
  const handleIncreament=()=> {
      setState((prevState)=> prevState + 1);
}

  return (
    <>
     <section>
     <h1>React Counter Project using useState Hook.</h1>
      <div className="btn-box">
        <div className="main-app">
          <button className="btn1" onClick={handleDecreament}> - </button>
             <span>{state}</span>
          <button className="btn2" onClick={handleIncreament}> + </button>
        </div>
      </div>
      <h1> || Thank You ||</h1>
     </section>
    </>
  );
}

export default App;



{/* <Events />
<Api /> */}