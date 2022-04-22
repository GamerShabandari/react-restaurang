

import React, {useEffect, useState} from "react"




interface bookingusers {

_id: string;
restaurantId: string;
date: string;
time: string;
numberOfGuests: number;
customerId: string


}

export function Admin() {

const [userData, setUserData] = useState<bookingusers[]>([])
const [guest, setGuest]= useState("");
const [date, setDate]= useState("");
const [time, setTime]= useState("18:00");
const [id, setId]= useState("");
const [customerId, setCustomerId]= useState("");
const [showUpdateForm, setShowUpdateForm]= useState(false)
 
useEffect(() => {
  fetch('https://school-restaurant-api.azurewebsites.net/booking/restaurant/624db995d80b65d5c561f68d')
  .then(response => response.json())
  .then(res => setUserData(res))
  .catch(err => console.log(err))
  },[])



function DeleteUser(_id: string){
  fetch(`https://school-restaurant-api.azurewebsites.net/booking/delete/${_id}`, 
      { method:"DELETE"}
  )
  .then(data=> {console.log(data)})
  .catch(err=> {
    console.log(err)
  })

}


function Change(){
     fetch(`https://school-restaurant-api.azurewebsites.net/booking/update/${id}`, {
       method: "PUT",
       headers:{
           "content-type": "application/json",
         // Accept: "application/json"
       },
       body: JSON.stringify({
        id: `${id}`,
        restaurantId: "624db995d80b65d5c561f68d",
        date: date,
        time: time,
        numberOfGuests: guest,
        customerId: customerId
       }) 
        }
     )
     .then(data=> {
       if(data){
         
         window.location.reload();
       }
     })
     .catch(err=> console.log(err));
}
const updateGuest=(id: any, customerId:any)=> {
     setShowUpdateForm(true);
     setId(id);
     setCustomerId(customerId)
}



return (
  <div>
    <h1>ADMIN</h1>
    {showUpdateForm &&(
     <div>
      <p><label>No of Guests:</label><input type="Number" value={guest} onChange={(e)=> setGuest(e.target.value)}/></p>
      <p><label>Date:</label><input type="date" value={date} onChange={(e)=> setDate(e.target.value)}/></p>
      <p><select value={time} onChange={(e)=> setTime(e.target.value)}>
           <option value="18:00">18:00</option>
           <option value="21:00">21:00</option>
        </select></p>
      <p><button onClick={Change}>Submit</button></p>
     </div>
    )
}
      <table>
        <tbody>
        <tr>
           <td><br/>id</td>
           <td><br/>date</td>
           <td><br/>time</td>
           <td><br/>guests</td>
           <td><br/>*Delete</td>
           <td><br/>*Update</td>
        </tr>
        {
          userData.map((item,i)=>
          <tr key={i}>
            <td><br/>{item._id}</td>
            <td><br/>{item.date}</td>
            <td><br/>{item.time}</td>
            <td><br/>{item.numberOfGuests}</td>
            <td><br/><button onClick={()=>DeleteUser(item._id)}>Delete</button></td>
            <td><br/><button onClick={()=>updateGuest(item._id, item.customerId)}>Update</button></td>
            
          </tr>
          )
        }

        </tbody>
        
      </table>
    
    </div>
  )

  
}

