import { ChangeEvent, useEffect, useState } from "react"
import { INewUser } from "./models/INewUser";
import { User } from "./models/User";
import { Bookings } from "./models/Bookings";

import "./booking.css"
import axios from "axios";
import { IBooking } from "./models/IBooking";

export function Booking() {

    let restaurantID = "624db995d80b65d5c561f68d"

    let katanaSushi = {
        name: "Katana Sushi",
        address: {
            street: "Kungsgatan 1",
            zip: "753 16",
            city: "Uppsala"
        }
    };

    const [bookingsFromApi, setBookingsFromApi] = useState<IBooking[]>([])

    const [tablesAt6oClock, SetTablesAt6oClock] = useState<number>(-1);
    const [tablesAt9oClock, SetTablesAt9oClock] = useState<number>(-1);

    const [chosenDate, setChosenDate] = useState<string>("");
    const [chosenTime, setChosenTime] = useState<string>("");
    const [chosenAmountOfGuests, setChosenAmountOfGuests] = useState<string>("");

    const [newUser, setNewUser] = useState<INewUser>({
        name: "",
        lastname: "",
        email: "",
        phone: ""
    })



    const [showError, setShowError] = useState(false);
    const [showRequiredError, setShowRequiredError] = useState(false);
    const [showEmailError, setShowEmailError] = useState(false);
    const [showPhoneError, setShowPhoneError] = useState(false);

    const [showUserForm, setShowUserForm] = useState(false);
    const [showBookingDone, setShowBookingDone] = useState(false);

    const [GDPRstatus, setGDPRstatus] = useState(false)


    useEffect(() => {
        axios.get<IBooking[]>("https://school-restaurant-api.azurewebsites.net/booking/restaurant/624db995d80b65d5c561f68d")
            .then(response => {
                setBookingsFromApi([...response.data])
            })
    }, [])


    function checkIfOpenTable() {

        if (chosenDate === "" || chosenAmountOfGuests === "") {

            setShowRequiredError(true)
            return
        }

        let checkDate: string = chosenDate

        let numberOfTablesAt6Left: number = 15
        let numberOfTablesAt9Left: number = 15

        for (let i = 0; i < bookingsFromApi.length; i++) {
            const order = bookingsFromApi[i];

            if (order.date === checkDate && order.time === "18:00") {
                numberOfTablesAt6Left--

            } else if (order.date === checkDate && order.time === "21:00") {
                numberOfTablesAt9Left--

            }
        }

        SetTablesAt6oClock(numberOfTablesAt6Left)
        SetTablesAt9oClock(numberOfTablesAt9Left)
        setShowRequiredError(false)

    }

    function choseTimeForDinner(time: string) {
        setChosenTime(time)
        setShowUserForm(true)
    }

    function handleChosenDate(e: ChangeEvent<HTMLInputElement>) {
        setChosenDate(e.target.value)
    }

    function handleChosenAmountOfGuests(e: ChangeEvent<HTMLSelectElement>) {
        setChosenAmountOfGuests(e.target.value)
    }

    function cancelBooking() {
        setShowUserForm(false)
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        let name = e.target.name;

        setNewUser({ ...newUser, [name]: e.target.value })
    }

    function handleGDPR(e: ChangeEvent<HTMLInputElement>) {
        console.log(e.target.checked);
        setGDPRstatus(e.target.checked)
    }

    function makeBooking() {

        setShowError(false)
        setShowEmailError(false)
        setShowPhoneError(false)

        if (newUser.name === "" || newUser.lastname === "" || newUser.email === "" || newUser.phone === "") {

            setShowError(true)

            return
        }

        if (!/\S+@\S+\.\S+/.test(newUser.email)) {

            setShowEmailError(true)

            return
        }

        if (!/^\d+$/.test(newUser.phone)) {

            setShowPhoneError(true)

            return

        }

        let user = new User(newUser.name, newUser.lastname, newUser.email, newUser.phone)

        let booking = new Bookings(restaurantID, chosenDate, chosenTime, parseInt(chosenAmountOfGuests), user)

        setShowError(false)

        setShowUserForm(false)

        axios.post("https://school-restaurant-api.azurewebsites.net/booking/create", booking, { headers: { "content-type": "application/json" } })
            .then(response => {
                setShowBookingDone(true)
            })
            .catch(error => {
                console.log(error);
                alert("något gick tyvärr fel, försök igen senare.")
            })
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (<main className="bookingContainer animate__animated animate__fadeIn">

        {!showBookingDone && <div className="inputContainer animate__animated animate__backInDown">

            <h3>Vänligen välj datum och antal gäster.</h3>
            <input type="date" onChange={handleChosenDate} />

            <select name="amountOfGuests" onChange={handleChosenAmountOfGuests}>
                <option value="1">1 pers</option>
                <option value="2">2 pers</option>
                <option value="3">3 pers</option>
                <option value="4">4 pers</option>
                <option value="5">5 pers</option>
                <option value="6">6 pers</option>
            </select>
            {showRequiredError && <div className="warning animate__animated animate__headShake">Du måste ange ett datum och antal gäster</div>}
            <button className="Btn" onClick={checkIfOpenTable}>sök ledigt bord</button>

            {tablesAt6oClock > 0 && <div className="animate__animated animate__fadeIn">Det finns {tablesAt6oClock} lediga bord kl 18.<button className="Btn" onClick={() => { choseTimeForDinner("18:00") }}>Välj denna tid</button> </div>}
            {tablesAt9oClock > 0 && <div className="animate__animated animate__fadeIn">Det finns {tablesAt9oClock} lediga bord kl 21.<button className="Btn" onClick={() => { choseTimeForDinner("21:00") }}>Välj denna tid</button></div>}
            {tablesAt6oClock === 0 && tablesAt9oClock === 0 && <div className="warning animate__animated animate__headShake">Det fanns tyvärr inga lediga bord det datumet, vänligen prova ett annat datum.</div>}


        </div>}

        {showUserForm && <div className="formContainer animate__animated animate__backInDown">
            <div>
                <h3>Fyll i resterande uppgifter för att slutföra bokning</h3>
                <div>
                    <p>Dina val: bord för {chosenAmountOfGuests} personer klockan {chosenTime} - {chosenDate}</p>
                </div>
                <div className="GDPRContainer">
                    <label htmlFor="GDPR" className="GDPR">Jag godkänner att ni lagrar mina uppgifter enligt GDPR</label>
                    <input type="checkbox" id="GDPR" onChange={handleGDPR} />
                </div>
                <form>
                    <input type="text" name="name" value={newUser.name} onChange={handleChange} placeholder="förnamn" disabled={!GDPRstatus} />
                    <input type="text" name="lastname" value={newUser.lastname} onChange={handleChange} placeholder="efternamn" disabled={!GDPRstatus} />
                    <input type="email" name="email" value={newUser.email} onChange={handleChange} placeholder="epost" disabled={!GDPRstatus} />
                    <input type="tel" name="phone" value={newUser.phone} onChange={handleChange} placeholder="telefon" disabled={!GDPRstatus} />
                    {/* <button onClick={test}>spara bokning</button> av någon anledning strular koden om jag kör med denna knapp men om jag kör samma funktion med nedan div så fungerar det bra (!!???) */}
                    <div className="choiceContainer">
                        <button className="cancelBtn" onClick={cancelBooking}>avbryt</button>
                        <div className="Btn" onClick={makeBooking} >spara bokning</div>
                    </div>
                </form>
            </div>
            {showError && <div className="warning animate__animated animate__headShake">Alla fällt är obligatoriska</div>}
            {showEmailError && <div className="warning animate__animated animate__headShake">Vänligen ange en giltig email</div>}
            {showPhoneError && <div className="warning animate__animated animate__headShake">Telefonnummer får bara bestå utav siffor</div>}
        </div>}
        {showBookingDone && <div className="animate__animated animate__backInDown">Din bokning är nu klar, vi ses!</div>}
    </main>)
}