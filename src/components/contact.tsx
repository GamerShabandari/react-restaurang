import { useState } from "react"
import { text } from "stream/consumers";

export function Contact(){

    interface INewContact {
        firstname: string;
        lastname: string;
        email: string;
        message: string;
    }

    const [newContact, setNewContact] = useState<INewContact>({
        firstname: '',
        lastname: '',
        email: '',
        message: '',
    });



    return (<>
        <h2>Kontakta oss</h2>
        <form>
            <label>Förnamn:</label>
            <input type="text" value={newContact.firstname}></input>
            <label>Efternamn:</label>
            <input type="text" value={newContact.lastname}></input>
            <label>E-post:</label>
            <input type="email" value={newContact.email}></input>
            <label>Meddelande:</label>
            <input type="text" value={newContact.message}></input>
            <button type="submit" >Skicka meddelande!</button>
        </form>
    </>)
}