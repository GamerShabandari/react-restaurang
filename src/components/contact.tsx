import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react"
import './contact.css';
import { INewUser } from "./models/INewUser";
import { User } from "./models/User";

export function Contact(){

    const [newContact, setNewContact] = useState<INewUser>({
        name: '',
        lastname: '',
        email: '',
        phone: '',
    });

    useEffect(() => {
        axios.post("https://school-restaurant-api.azurewebsites.net/customer/create")
        .then(response => {
            setMessageSend(true)
        })
        .catch(error => {
            console.log("Det blev feeeel!!");
            alert("Ditt meddelande kunde tyvärr inte skickas!")
            
        })
    });

    const [messageSend, setMessageSend] = useState(false)

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        let name = e.target.name;
        setNewContact({...newContact, [name]: e.target.value})
    }

    function handleSubmit(e: any) {
        e.preventDefault()

        let customercontact = new User(newContact.name, newContact.lastname, newContact.email, newContact.phone)
        
        console.log(customercontact);
        

    }


    return (<>
        <h2>Kontakta oss</h2>
        <form onSubmit={handleSubmit}> 
            <label>Förnamn:</label>
            <input type="text" name="firstname" value={newContact.name} onChange={handleChange}></input>
            <label>Efternamn:</label>
            <input type="text" name="lastname" value={newContact.lastname} onChange={handleChange}></input><br></br>
            <label>E-post:</label>
            <input type="email" name="email" value={newContact.email} onChange={handleChange}></input>
            <label>Telefon:</label>
            <input type="text" name="phone" value={newContact.phone} onChange={handleChange}></input>
            <button type="submit" >Skicka meddelande!</button>
            {messageSend && <h3>Ditt meddelande är skickat!</h3>}
        </form>
    </>)
}