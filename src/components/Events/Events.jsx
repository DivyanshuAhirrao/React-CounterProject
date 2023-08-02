import React from 'react'
import './evemts.css'

export const Events = () => {

    function Clicked(){
          document.body.style.backgroundColor='red';
    }
    function Keyup() {
        document.body.style.backgroundColor='blue';
    }
    function Keydown() {
        document.body.style.backgroundColor='yellow';
    }

    function Capitall() {


    const Capleter =() => {
        var ip=document.getElementById('ip').value.UpperCase();
    }

}
  return (
    <>
        <input type='text' onKeyDown={Keydown}  onKeyUp={Keyup} id='ip1' />
        <input type='text' onKeyUp={Keyup} id='ip2' />
        <input type='text' onBlur={Capitall} id='ip' />
        <button onClick={Clicked}>Click</button>    
    </>
  )
}
