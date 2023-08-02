import React from 'react'
import './api.css'

export const Api = () => {
   
    const Javascript = () => {
     
        let x =  async function() {

            try {
                let data = await fetch('https://api.github.com/users');
                let finalData = await data.json();
                console.log(finalData);   

                finalData.map( (x) => {
                  let body = document.body
                  let section= document.createElement("section");
                  section.innerHTML += ` <div class="cards">
                     <img src=${x.avatar_url}>      
                     <h4>ID : ${x.id} </h4>
                     <p>${x.login}</p>  
                  </div>`
                  body.appendChild(section);      

                })


            } 
            catch (err) {
                console.log('error');
            }

       }
       x();
    }
    

  return (
    <div>Api</div>
    
  )
}
