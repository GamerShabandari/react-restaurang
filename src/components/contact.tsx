import { ChangeEvent, useState } from "react"
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

    const [messageSend, setMessageSend] = useState(false)

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        let name = e.target.name;
        setNewContact({...newContact, [name]: e.target.value})
    }

    function handleSubmit(e: any) {
        setMessageSend(true)
        e.preventDefault()
        
    }


    return (<>
        <h2>Kontakta oss</h2>
        <form onSubmit={handleSubmit}> 
            <label>Förnamn:</label>
            <input type="text" name="firstname" value={newContact.firstname} onChange={handleChange}></input>
            <label>Efternamn:</label>
            <input type="text" name="lastname" value={newContact.lastname} onChange={handleChange}></input>
            <label>E-post:</label>
            <input type="email" name="email" value={newContact.email} onChange={handleChange}></input>
            <label>Meddelande:</label>
            <input type="text" name="message" value={newContact.message} onChange={handleChange}></input>
            <button type="submit" >Skicka meddelande!</button>
            {messageSend && <h3>Ditt meddelande är skickat!</h3>}
        </form>
    </>)
}