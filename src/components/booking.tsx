import { ChangeEvent, useEffect, useState } from "react"
import { INewUser } from "./models/INewUser";
import { User } from "./models/User";
import { Bookings } from "./models/Bookings";

import "./booking.css"
import axios from "axios";
import { IBooking } from "./models/IBooking";
import { GiConfirmed, GiCancel, GiHotMeal, GiMeal } from 'react-icons/gi';
import { MdPersonAddAlt1, MdEmail, MdPhoneIphone } from "react-icons/md";
import { FaGlassCheers } from "react-icons/fa";


export function Booking() {

    ////////////// restaurang uppgifter /////////////////
    const restaurantID = "624db995d80b65d5c561f68d"

    // let katanaSushi = {
    //     name: "Katana Sushi",
    //     address: {
    //         street: "Kungsgatan 1",
    //         zip: "753 16",
    //         city: "Uppsala"
    //     }
    // };

    //////////////////////////// alla state variabler ////////////////////////////////////////
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

    //////////////////////////// useEffect som hämtar alla bokningar från API ////////////////////////////////////////
    useEffect(() => {
        axios.get<IBooking[]>("https://school-restaurant-api.azurewebsites.net/booking/restaurant/624db995d80b65d5c561f68d")
            .then(response => {
                setBookingsFromApi([...response.data])
            })
    }, [])

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //funktion som kollar om det finns lediga bord det datum gästen har valt, presenterar resultat via state variabler, validerar också alla val som gjorts//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function checkIfOpenTable() {


        // validerar att inget fält är tomt samt att vald antal gäster ej överstiger 90st då max antal gäster per sittning är 90 st (15bord) 

        if (chosenDate === "" || chosenAmountOfGuests === "" || Number(chosenAmountOfGuests) > 90) {

            setShowRequiredError(true)
            return
        }


        ////////////////////// räknar ut hur många bord som behövs för att få plats med vald antal gäster, om det finns tillräckligt med lediga bord eller ej

        let amountOfTablesThisBookingWillNeed = Math.ceil(Number(chosenAmountOfGuests) / 6)

        let checkDate: string = chosenDate

        let numberOfTablesAt6Left: number = 15
        let numberOfTablesAt9Left: number = 15

        for (let i = 0; i < bookingsFromApi.length; i++) {
            const order = bookingsFromApi[i];


            if (order.date === checkDate && order.time === "18:00") {

                let tablesNeededForThisBooking: number = 1;
                let assesInTheChairs: number = 0
                let numberOfGuests: number = order.numberOfGuests

                for (let i = 0; i < numberOfGuests; i++) {

                    assesInTheChairs++
                    if (assesInTheChairs === 7) {
                        tablesNeededForThisBooking++
                        assesInTheChairs = 1
                    }

                }

                numberOfTablesAt6Left -= tablesNeededForThisBooking

                if (amountOfTablesThisBookingWillNeed > numberOfTablesAt6Left) {
                    numberOfTablesAt6Left = 0
                }



            } else if (order.date === checkDate && order.time === "21:00") {

                let tablesNeededForThisBooking: number = 1;
                let assesInTheChairs: number = 0
                let numberOfGuests: number = order.numberOfGuests

                for (let i = 0; i < numberOfGuests; i++) {

                    assesInTheChairs++
                    if (assesInTheChairs === 7) {
                        tablesNeededForThisBooking++
                        assesInTheChairs = 1
                    }

                }

                numberOfTablesAt9Left -= tablesNeededForThisBooking

                if (amountOfTablesThisBookingWillNeed > numberOfTablesAt9Left) {
                    numberOfTablesAt9Left = 0
                }

            }
        }



        SetTablesAt6oClock(numberOfTablesAt6Left)
        SetTablesAt9oClock(numberOfTablesAt9Left)
        setShowRequiredError(false)


    }

    //////////////////////////// lagrar vald datum och tid ////////////////////////////////////////
    function choseTimeForDinner(time: string) {
        setChosenTime(time)
        setShowUserForm(true)
    }

    //////////////////////////// hanterar vald datum och uppdaterar statevariabel ////////////////////////////////////////
    function handleChosenDate(e: ChangeEvent<HTMLInputElement>) {
        setChosenDate(e.target.value)
    }

    //////////////////////////// hanterar vald antal gäster och uppdaterar statevariabel ////////////////////////////////////////
    function handleChosenAmountOfGuests(e: ChangeEvent<HTMLInputElement>) {
        setChosenAmountOfGuests(e.target.value)
    }

    //////////////////////////// avbryter bokningen ////////////////////////////////////////
    function cancelBooking() {
        setShowUserForm(false)
        setShowError(false)
        setShowRequiredError(false)
        setShowEmailError(false);
        setShowPhoneError(false);
        setGDPRstatus(false)
                setNewUser({
                    name: "",
                    lastname: "",
                    email: "",
                    phone: ""
                })
    }

    //////////////////////////// hanterar formulär för alla kunduppgifter, uppdaterar statevariabel ////////////////////////////////////////
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        let name = e.target.name;

        setNewUser({ ...newUser, [name]: e.target.value })
    }

    //////////////////////////// håller koll på om kund godkänt GDPR checkbox eller ej, uppdaterar statevariabel ////////////////////////////////////////
    function handleGDPR(e: ChangeEvent<HTMLInputElement>) {

        setGDPRstatus(e.target.checked)
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //skapar bokning, validrerar först kunduppgifter. skapar sedan objekt som pushas till API, uppdaterar statevariabler samt varnar om något går snett med bokningen //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

        if (newUser.phone.length < 10 || newUser.phone.length > 10) {
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

                setChosenDate("")
                setChosenTime("")
                setChosenAmountOfGuests("")
                SetTablesAt6oClock(-1)
                SetTablesAt9oClock(-1)
                setGDPRstatus(false)
                setNewUser({
                    name: "",
                    lastname: "",
                    email: "",
                    phone: ""
                })
            

                setTimeout(() => {
                    setShowBookingDone(false)
                }, 5000)
            })
            .catch(error => {
                console.log(error);
                alert("något gick tyvärr fel, försök igen senare.")
            })
    }

    //////////////////////////////// JSX RETURN - växlar olika delar av UI baserat på olika statevariabler///////////////////////////////////////////////////////
    return (<main className="bookingContainer animate__animated animate__fadeIn">


        {/* denna del visar första delen av bokningsprocessen input av datum och antal gäster följt av eventuell varning sam sedan  val av tid för sittning */}

        {!showBookingDone && <div className="inputContainer animate__animated animate__flipInX">
            <h3>Vänligen välj datum och antal gäster.</h3>
            <input type="date" onChange={handleChosenDate} />
            <input type="text" onChange={handleChosenAmountOfGuests} value={chosenAmountOfGuests} placeholder="antal gäster max 90" />

            {showRequiredError && <div className="warning animate__animated animate__headShake">Du måste ange ett datum och antal gäster</div>}
            <button className="Btn" onClick={checkIfOpenTable}>sök ledigt bord <GiMeal></GiMeal> </button>




            {(tablesAt6oClock > 0 || tablesAt9oClock > 0) && <div className="tablesContainer animate__animated animate__fadeIn">
                <div className="decorationLine"></div>
                {tablesAt6oClock > 0 && <div className="tablesLeft animate__animated animate__fadeIn">Det finns {tablesAt6oClock} lediga bord kl 18.<button className="Btn" onClick={() => { choseTimeForDinner("18:00") }}>Välj denna tid <GiHotMeal></GiHotMeal> </button> </div>}
                {tablesAt9oClock > 0 && <div className="tablesLeft animate__animated animate__fadeIn">Det finns {tablesAt9oClock} lediga bord kl 21.<button className="Btn" onClick={() => { choseTimeForDinner("21:00") }}>Välj denna tid <GiHotMeal></GiHotMeal> </button></div>}
            </div>}
            {tablesAt6oClock === 0 && tablesAt9oClock === 0 && <div className="warning animate__animated animate__headShake">Det fanns tyvärr inga lediga bord det datumet, vänligen prova ett annat datum.</div>}

        </div>}


        {/* denna del visar andra delen av bokningsprocessen, kund får fylla i sina uppgifter och bekräfta eller avbryta bokningen */}

        {showUserForm && <div className="formContainer animate__animated animate__flipInX">
            <div>
                <h3>Fyll i resterande uppgifter för att slutföra bokning</h3>
                <div>
                    <p>Dina val: bord för {chosenAmountOfGuests} personer klockan {chosenTime} - {chosenDate}</p>
                </div>
                <div className="GDPRContainer">
                    <label htmlFor="GDPR" className="GDPR">Jag godkänner att ni lagrar mina uppgifter enligt <a href="https://www.imy.se/verksamhet/dataskydd/det-har-galler-enligt-gdpr/" target="_blank" rel="noreferrer">GDPR</a></label>
                    <input type="checkbox" id="GDPR" onChange={handleGDPR} />
                </div>
                <form>

                    <div className="formInputContainer">
                        <MdPersonAddAlt1></MdPersonAddAlt1>
                        <input type="text" name="name" value={newUser.name} onChange={handleChange} placeholder="förnamn" disabled={!GDPRstatus} />
                    </div>

                    <div className="formInputContainer">
                        <MdPersonAddAlt1></MdPersonAddAlt1>
                        <input type="text" name="lastname" value={newUser.lastname} onChange={handleChange} placeholder="efternamn" disabled={!GDPRstatus} />
                    </div>

                    <div className="formInputContainer">
                        <MdEmail></MdEmail>
                        <input type="email" name="email" value={newUser.email} onChange={handleChange} placeholder="epost" disabled={!GDPRstatus} />
                    </div>

                    <div className="formInputContainer">
                        <MdPhoneIphone></MdPhoneIphone>
                        <input type="tel" name="phone" value={newUser.phone} onChange={handleChange} placeholder="telefon" disabled={!GDPRstatus} />

                    </div>

                    <div className="choiceContainer">
                        <button type="button" className="cancelBtn" onClick={cancelBooking}>avbryt <GiCancel></GiCancel> </button>
                        <button type="button" className="Btn" onClick={makeBooking}>boka <GiConfirmed></GiConfirmed> </button>
                    </div>

                </form>
            </div>
            {showError && <div className="warning animate__animated animate__headShake">Alla fällt är obligatoriska</div>}
            {showEmailError && <div className="warning animate__animated animate__headShake">Vänligen ange en giltig email</div>}
            {showPhoneError && <div className="warning animate__animated animate__headShake">Telefonnummer får bara bestå utav 10 siffor</div>}
        </div>}
        {/* nedan visar när bokning gjorts och försvinner sedan efter 5 sekunder*/}
        {showBookingDone && <div className="bookingDone animate__animated animate__fadeInDown">Din bokning är nu klar, vi ses! <FaGlassCheers></FaGlassCheers> </div>}
    </main>)
}