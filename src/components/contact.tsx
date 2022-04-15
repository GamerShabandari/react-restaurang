import axios from "axios";
import { ChangeEvent, useState } from "react"
import { MdEmail, MdPersonAddAlt1, MdPhoneIphone } from "react-icons/md";
import { GiSamuraiHelmet, GiConfirmed } from "react-icons/gi";
import './contact.css';
import { INewUser } from "./models/INewUser";
import { User } from "./models/User";

export function Contact() {

    const [newContact, setNewContact] = useState<INewUser>({

        name: "",
        lastname: "",
        email: "",
        phone: "",

    });

    const [messageSend, setMessageSend] = useState(false)
    const [FormError, setFormError] = useState(false)
    const [showEmailError, setShowEmailError] = useState(false);
    const [showPhoneError, setShowPhoneError] = useState(false);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        let name = e.target.name;
        setNewContact({ ...newContact, [name]: e.target.value })
    }

    function handleSubmit() {
        setFormError(false)
        setShowEmailError(false)
        setShowPhoneError(false)

        if (newContact.name === "" || newContact.lastname === "" || newContact.email === "" || newContact.phone === "") {

            setFormError(true)

            return
        }

        if (!/\S+@\S+\.\S+/.test(newContact.email)) {


            setShowEmailError(true)

            return
        }

        if (!/^\d+$/.test(newContact.phone)) {

            setShowPhoneError(true)

            return

        }

        if (newContact.phone.length < 10 || newContact.phone.length > 10) {
            setShowPhoneError(true)
            return
        }

        let customercontact = new User(newContact.name, newContact.lastname, newContact.email, newContact.phone)

        axios.post("https://school-restaurant-api.azurewebsites.net/customer/create", customercontact, { headers: { "content-type": "application/json" } })
            .then(response => {
                setMessageSend(true)
                setNewContact({
                    name: "",
                    lastname: "",
                    email: "",
                    phone: "",
                })
                setTimeout(() => {
                    setMessageSend(false)
                }, 5000)


            })
            .catch(error => {
                alert("Det gick tyvärr inte att skicka!")
            })

    }

    return (
        <main className="ContactContainer">
            <div className="ContactformContainer animate__animated animate__fadeIn">
               <img className="animatedContactIcon  animate__animated animate__fadeIn animate__delay-1s" src="../../images/contact_animation.gif" alt="contact animated icon" />
                <h3 className="header">Fyll i dina uppgifter så kontaktar vi dig <GiSamuraiHelmet></GiSamuraiHelmet></h3>
                <form className="formField">
                    <div className="formInputDiv">
                    <MdPersonAddAlt1></MdPersonAddAlt1>
                        <input type="text" name="name" value={newContact.name} onChange={handleChange} placeholder="Förnamn"></input>
                    </div>
                    <div className="formInputDiv">
                    <MdPersonAddAlt1></MdPersonAddAlt1>
                        <input type="text" name="lastname" value={newContact.lastname} onChange={handleChange} placeholder="Efternamn"></input>
                    </div>
                    <div className="formInputDiv">
                    <MdEmail></MdEmail>
                        <input type="email" name="email" value={newContact.email} onChange={handleChange} placeholder="E-post" ></input>
                    </div>
                    <div className="formInputDiv">
                    <MdPhoneIphone></MdPhoneIphone>
                        <input type="text" name="phone" value={newContact.phone} onChange={handleChange} placeholder="Telefon"></input>
                    </div>
                    <button type="button" className="sendBtn" onClick={handleSubmit} >SKICKA <GiConfirmed></GiConfirmed></button>
                </form>
                <div>
                    {FormError && <div className="error animate__animated animate__headShake">Alla fällt är obligatoriska</div>}
                    {showEmailError && <div className="warning animate__animated animate__headShake">Vänligen ange en giltig email</div>}
                    {showPhoneError && <div className="warning animate__animated animate__headShake">Telefonnummer får bara bestå utav 10 siffor</div>}
                </div>
            </div>
            {messageSend && <div className="contactDone animate__animated animate__fadeInDown">Ditt meddelande är skickat!</div>}
        </main>)
}