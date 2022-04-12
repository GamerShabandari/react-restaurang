
import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"
import { IBooking } from "./models/IBooking"

import "./admin.css"
import { INewUser } from "./models/INewUser"
import { Bookings } from "./models/Bookings"
import { GiCancel, GiConfirmed, GiHotMeal, GiMeal } from "react-icons/gi"
import { MdEmail, MdPersonAddAlt1, MdPhoneIphone, MdInfoOutline, MdLibraryAdd, MdOutlineEditNote } from "react-icons/md"
import { FaGlassCheers } from "react-icons/fa"
import { User } from "./models/User"

export function Admin() {

    const restaurantID = "624db995d80b65d5c561f68d"

    const [bookingsFromApi, setBookingsFromApi] = useState<IBooking[]>([])
    const [showDetailsSection, setShowDetailsSection] = useState(false);
    const [customer, setCustomer] = useState<INewUser>({
        name: "",
        lastname: "",
        email: "",
        phone: ""
    })

    const [detailedBooking, setDetailedBooking] = useState<Bookings>({
        restaurantId: "624db995d80b65d5c561f68d",
        date: "",
        time: "",
        numberOfGuests: 0,
        customer: {
            name: "",
            lastname: "",
            email: "",
            phone: ""
        }
    })

    const [newUser, setNewUser] = useState<INewUser>({
        name: "",
        lastname: "",
        email: "",
        phone: ""
    })

    const [tablesAt6oClock, SetTablesAt6oClock] = useState<number>(-1);
    const [tablesAt9oClock, SetTablesAt9oClock] = useState<number>(-1);

    const [chosenDate, setChosenDate] = useState<string>("");
    const [chosenTime, setChosenTime] = useState<string>("");
    const [chosenAmountOfGuests, setChosenAmountOfGuests] = useState<string>("");

    const [showError, setShowError] = useState(false);
    const [showRequiredError, setShowRequiredError] = useState(false);
    const [showEmailError, setShowEmailError] = useState(false);
    const [showPhoneError, setShowPhoneError] = useState(false);

    const [showUserForm, setShowUserForm] = useState(false);
    const [showBooking, setShowBooking] = useState(true)
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [showBookingDone, setShowBookingDone] = useState(false);

    const [GDPRstatus, setGDPRstatus] = useState(false)

    const [showEditBookingForm, setShowEditBookingForm] = useState(false);
    const [bookingToEditId, setBookingToEditId] = useState("")
    const [bookingToEditCustomerId, setBookingToEditCustomerId] = useState("")
    const [bookingToEdit, setBookingToEdit] = useState<IBooking>({
        _id: "",
        restaurantId: "624db995d80b65d5c561f68d",
        date: "",
        time: "",
        numberOfGuests: 0,
        customerId: ""
    })

    const [updatedBooking, setUpdatedBooking] = useState<IBooking>({
        _id: "",
        restaurantId: "624db995d80b65d5c561f68d",
        date: "",
        time: "",
        numberOfGuests: 0,
        customerId: ""
    })
    //////////////////////////////////////////////////////////////////////////////

    useEffect(() => {

        axios.get<IBooking[]>("https://school-restaurant-api.azurewebsites.net/booking/restaurant/624db995d80b65d5c561f68d")
            .then(response => {
                setBookingsFromApi([...response.data])
            })

        console.log("körde en api get for booking");


    }, [showBookingDone])

    function showDetails(bookingIndex: number) {

        let chosenBooking = bookingsFromApi[bookingIndex];

        setBookingToEditId(chosenBooking._id)

        axios.get<INewUser[]>("https://school-restaurant-api.azurewebsites.net/customer/" + chosenBooking.customerId)
            .then(response => {

                let user: INewUser = {
                    name: response.data[0].name,
                    lastname: response.data[0].lastname,
                    email: response.data[0].email,
                    phone: response.data[0].phone
                }

                setBookingToEditCustomerId(chosenBooking.customerId)

                setShowBooking(false)

                setCustomer(user)
                let completeBooking = new Bookings(chosenBooking.restaurantId, chosenBooking.date, chosenBooking.time, chosenBooking.numberOfGuests, user);
                setDetailedBooking(completeBooking)
                setShowDetailsSection(true)
            })
    }

    function deleteBooking(bookingId: string, index: number) {

        axios.delete("https://school-restaurant-api.azurewebsites.net/booking/delete/" + bookingId)
            .then(response => {

                let updatedBookings: IBooking[] = bookingsFromApi;
                updatedBookings.splice(index, 1);
                setBookingsFromApi([...updatedBookings])

            })
    }

    function editBooking() {

        let ToEdit = detailedBooking;
        setBookingToEdit({
            _id: bookingToEditId,
            restaurantId: ToEdit.restaurantId,
            date: ToEdit.date,
            time: ToEdit.time,
            numberOfGuests: ToEdit.numberOfGuests,
            customerId: bookingToEditCustomerId
        })
        setShowDetailsSection(false)
        setShowEditBookingForm(true)
    }

    function closeDetailsSection() {
        setShowDetailsSection(false)
        setShowBooking(true)
    }

    function showBookingField() {
        setShowBookingForm(!showBookingForm)
        setShowBookingDone(false)

        setNewUser({
            name: "",
            lastname: "",
            email: "",
            phone: ""
        })

        SetTablesAt6oClock(-1)
        SetTablesAt9oClock(-1)
        setChosenDate("")
        setChosenTime("")
        setChosenAmountOfGuests("")
        setShowError(false)
        setShowRequiredError(false)
        setShowEmailError(false)
        setShowPhoneError(false)
        setShowUserForm(false)
        setGDPRstatus(false)
    }

    function handleChosenAmountOfGuests(e: ChangeEvent<HTMLSelectElement>) {
        setChosenAmountOfGuests(e.target.value)
    }

    function handleChosenDate(e: ChangeEvent<HTMLInputElement>) {
        setChosenDate(e.target.value)
    }

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

    //////////////////////////// avbryter bokningen ////////////////////////////////////////
    function cancelBooking() {
        setShowUserForm(false)
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

        setShowBookingForm(false)

        axios.post("https://school-restaurant-api.azurewebsites.net/booking/create", booking, { headers: { "content-type": "application/json" } })
            .then(response => {
                setShowBookingDone(true)
            })
            .catch(error => {
                console.log(error);
                alert("något gick tyvärr fel, försök igen senare.")
            })
    }

    function saveUpdatedBooking() {

        setUpdatedBooking({ ...updatedBooking, _id: bookingToEdit._id, customerId: bookingToEdit.customerId })

        let updatedBookingToPutToAPI = {
            id: bookingToEdit._id,
            restaurantId: "624db995d80b65d5c561f68d",
            date: updatedBooking.date,
            time: updatedBooking.time,
            numberOfGuests: Number(updatedBooking.numberOfGuests),
            customerId: bookingToEdit.customerId
        }

        axios.put<IBooking>("https://school-restaurant-api.azurewebsites.net/booking/update/" + updatedBookingToPutToAPI.id, updatedBookingToPutToAPI, { headers: { "content-type": "application/json" } })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
                alert("något gick tyvärr fel, försök igen senare.")
            })
    }

    function handleEditFormTimeAndGuestsChange(e: ChangeEvent<HTMLSelectElement>) {
        let name = e.target.name;

        setUpdatedBooking({ ...updatedBooking, [name]: e.target.value })
    }

    function handleEditFormDateChange(e: ChangeEvent<HTMLInputElement>) {
        let name = e.target.name;
        setUpdatedBooking({ ...updatedBooking, [name]: e.target.value })
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let bookingsHtml = bookingsFromApi.map((booking, i) => {
        return (<div className="bookingBox animate__animated animate__fadeIn" key={i}>
            <h5>Bokningsnr: {booking._id}</h5>
            <h3>Datum: {booking.date}</h3>
            <h4>Tid: {booking.time}</h4>
            <h4>Antal gäster:{booking.numberOfGuests}</h4>
            <button className="Btn" onClick={() => { showDetails(i) }}>se detailjer <MdInfoOutline></MdInfoOutline> </button>
            <button className="deleteBtn" onClick={() => { deleteBooking(booking._id, i) }}>radera bokning<GiCancel></GiCancel></button>
        </div>)
    })

    let detailsHtml = (
        <div className="detailsBox animate__animated animate__flipInX">
            <button className="deleteBtn" onClick={closeDetailsSection}>stäng <GiCancel></GiCancel></button>
            <button className="Btn" onClick={editBooking}>ändra bokning <MdOutlineEditNote></MdOutlineEditNote> </button>
            <h2>Kund: {customer.name} {customer.lastname}</h2>
            <h3>Epost: {customer.email}</h3>
            <h3>Telefon: {customer.phone}</h3>
            <h5>Antal gäster: {detailedBooking.numberOfGuests}</h5>
            <h5>Datum: {detailedBooking.date}</h5>
            <h5>Tid: {detailedBooking.time}</h5>
        </div>)

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (<>

        <section className="adminBookingSection">
            <button className="Btn" onClick={showBookingField}>skapa bokning <MdLibraryAdd></MdLibraryAdd> </button>
            {showBookingDone && <div className="bookingDone animate__animated animate__fadeInDown">Bokning klar! <FaGlassCheers></FaGlassCheers> </div>}
            {showBookingForm && <div className="adminBookingForm animate__animated animate__flipInX">

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
                <button type="button" className="Btn" onClick={checkIfOpenTable}>sök ledigt bord <GiMeal></GiMeal> </button>

                {tablesAt6oClock > 0 && <div className="tablesContainer animate__animated animate__fadeIn">
                    <div className="decorationLine"></div>
                    {tablesAt6oClock > 0 && <div className="animate__animated animate__fadeIn">Det finns {tablesAt6oClock} lediga bord kl 18.<button className="Btn" onClick={() => { choseTimeForDinner("18:00") }}>Välj denna tid <GiHotMeal></GiHotMeal> </button> </div>}
                    {tablesAt9oClock > 0 && <div className="animate__animated animate__fadeIn">Det finns {tablesAt9oClock} lediga bord kl 21.<button className="Btn" onClick={() => { choseTimeForDinner("21:00") }}>Välj denna tid <GiHotMeal></GiHotMeal> </button></div>}
                    {tablesAt6oClock === 0 && tablesAt9oClock === 0 && <div className="warning animate__animated animate__headShake">Det fanns tyvärr inga lediga bord det datumet, vänligen prova ett annat datum.</div>}
                </div>}

                {showUserForm && <div className="formContainer animate__animated animate__flipInX">

                    <div>
                        <h3>Fyll i resterande uppgifter för att slutföra bokning</h3>
                        <div>
                            <p>Dina val: bord för {chosenAmountOfGuests} personer klockan {chosenTime} - {chosenDate}</p>
                        </div>
                        <div className="GDPRContainer">
                            <label htmlFor="GDPR" className="GDPR">Jag har informerat kunden om GDPR och fått ett godkännande</label>
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
            </div>}

        </section>
        <main className="adminMain">

            {showDetailsSection && <section className="adminDetailsContainer">{detailsHtml}</section>}


            {showEditBookingForm && <div>
                här ska vi uppdatera bokning {bookingToEdit._id} {bookingToEdit.customerId} {bookingToEdit.numberOfGuests} {bookingToEdit.date} {bookingToEdit.time}
                <h3>Vänligen välj datum och antal gäster.</h3>

                <input type="date" name="date" onChange={handleEditFormDateChange} />

                <select name="time" onChange={handleEditFormTimeAndGuestsChange}>
                    <option value="18:00">18:00</option>
                    <option value="21:00">21:00</option>
                </select>

                <select name="numberOfGuests" onChange={handleEditFormTimeAndGuestsChange}>
                    <option value="1">1 pers</option>
                    <option value="2">2 pers</option>
                    <option value="3">3 pers</option>
                    <option value="4">4 pers</option>
                    <option value="5">5 pers</option>
                    <option value="6">6 pers</option>
                </select>
                <button onClick={saveUpdatedBooking} >Uppdatera bokning</button>
                <button onClick={() => { setShowEditBookingForm(false); setShowBooking(true) }}>Avbryt</button>

                {updatedBooking._id} {updatedBooking.customerId}
            </div>}



            {bookingsFromApi.length < 1 && <section className="loading">laddar...</section>}

            {showBooking && bookingsFromApi.length > 0 && <section className="adminBookingsContainer">{bookingsHtml}</section>}
        </main>
    </>)
}