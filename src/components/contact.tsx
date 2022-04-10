import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react"
import './contact.css';
import { INewUser } from "./models/INewUser";
import { User } from "./models/User";

export function Contact(){

    const [newContact, setNewContact] = useState<INewUser>({
        name: "",
        lastname: "",
        email: "",
        phone: "",
    });


    const [messageSend, setMessageSend] = useState(false)

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        let name = e.target.name;
        setNewContact({...newContact, [name]: e.target.value})
    }

    function handleSubmit() {

        let customercontact = new User(newContact.name, newContact.lastname, newContact.email, newContact.phone)


        axios.post("https://school-restaurant-api.azurewebsites.net/customer/create", customercontact, { headers: {"content-type": "application/json"}})
        .then(response => {
                console.log(response.data);
                
        })
        .catch(error => {
            alert("Det gick tyvärr inte att skicka!")
        })
        
        setMessageSend(true)

    }


    return (<>
        <h3>Kontakta oss</h3>
        <form onSubmit={handleSubmit}>
            <div className="formInputContainer">
            <input type="text" name="name" value={newContact.name} onChange={handleChange} placeholder="Förnamn"></input>
            </div>
            <div className="formInputContainer">
            <input type="text" name="lastname" value={newContact.lastname} onChange={handleChange} placeholder="Efternamn"></input><br></br>
            </div>
            <div className="formInputContainer">
            <input type="email" name="email" value={newContact.email} onChange={handleChange} placeholder="E-post" ></input>
            </div>
            <div className="formInputContainer">
            <input type="text" name="phone" value={newContact.phone} onChange={handleChange} placeholder="Telefon"></input>
            </div>
            <button type="submit" className="Btn" >SKICKA</button>
        </form>
        <div>
        {messageSend && <h2>Ditt meddelande är skickat!</h2>}
        </div>
    </>)
}