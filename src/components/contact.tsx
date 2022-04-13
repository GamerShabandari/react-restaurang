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
    const [FormError, setFormError] = useState(false)

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        let name = e.target.name;
        setNewContact({...newContact, [name]: e.target.value})
    }

    function handleSubmit() {
        setFormError(false)

        if (newContact.name === "" || newContact.lastname === "" || newContact.email === "" || newContact.phone === "") {

            setFormError(true)

            return
        }

        let customercontact = new User(newContact.name, newContact.lastname, newContact.email, newContact.phone)

        axios.post("https://school-restaurant-api.azurewebsites.net/customer/create", customercontact, { headers: {"content-type": "application/json"}})
        .then(response => {
            setMessageSend(true)
                
        })
        .catch(error => {
            alert("Det gick tyvärr inte att skicka!")
        })

    }


    return (
        <main className="ContactContainer">
            <div className="ContactformContainer animate__animated animate__fadeInDown">
                <h3>Kontakta oss</h3>
                <form>
                    <div className="formInputDiv">
                    <input type="text" name="name" value={newContact.name} onChange={handleChange} placeholder="Förnamn"></input>
                    </div>
                    <div className="formInputDiv">
                    <input type="text" name="lastname" value={newContact.lastname} onChange={handleChange} placeholder="Efternamn"></input><br></br>
                    </div>
                    <div className="formInputDiv">
                    <input type="email" name="email" value={newContact.email} onChange={handleChange} placeholder="E-post" ></input>
                    </div>
                    <div className="formInputDiv">
                    <input type="text" name="phone" value={newContact.phone} onChange={handleChange} placeholder="Telefon"></input>
                    </div>
                    <button type="button" className="sendBtn" onClick={handleSubmit} >SKICKA</button>
                </form>
                <div>
                {messageSend && <div className="contactDone animate__animated animate__fadeInDown">Ditt meddelande är skickat!</div>}
                {FormError && <div className="error animate__animated animate__headShake">Alla fällt är obligatoriska</div>}
                </div>
                </div>
        </main>)
}