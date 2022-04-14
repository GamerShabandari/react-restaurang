
import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"
import { IBooking } from "./models/IBooking"

import "./admin.css"
import { INewUser } from "./models/INewUser"
import { Bookings } from "./models/Bookings"
import { GiCancel, GiConfirmed, GiHotMeal, GiMeal, GiPassport } from "react-icons/gi"
import { MdEmail, MdPersonAddAlt1, MdPhoneIphone, MdInfoOutline, MdLibraryAdd, MdOutlineEditNote, MdPersonPin, MdGroups, MdOutlineDateRange, MdAccessTime, MdSearch, MdOutlineUpdate } from "react-icons/md"
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
    const [showBookingInputRequired, setShowBookingInputRequired] = useState(false);
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


    const [showSearchField, setShowSearchField] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState<IBooking[]>([])
    //////////////////////////////////////////////////////////////////////////////

    useEffect(() => {

        axios.get<IBooking[]>("https://school-restaurant-api.azurewebsites.net/booking/restaurant/624db995d80b65d5c561f68d")
            .then(response => {
                setBookingsFromApi([...response.data])
            })

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
                setSearchResults([...[]])
                setSearchValue("")
                setShowSearchField(false);
                setShowBooking(true)
                setShowBookingDone(true)

                setTimeout(() => {
                    setShowBookingDone(false)
                }, 5000)




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

    function handleChosenAmountOfGuests(e: ChangeEvent<HTMLInputElement>) {
        setChosenAmountOfGuests(e.target.value)
    }

    function handleChosenDate(e: ChangeEvent<HTMLInputElement>) {
        setChosenDate(e.target.value)
    }

    function checkIfOpenTable() {

        if (chosenDate === "" || chosenAmountOfGuests === "" || Number(chosenAmountOfGuests) > 90) {

            setShowRequiredError(true)
            return
        }

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
                setTimeout(() => {
                    setShowBookingDone(false)
                }, 5000)
            })
            .catch(error => {
                console.log(error);
                alert("något gick tyvärr fel, försök igen senare.")
            })
    }

    function cancelUpdateBooking() {
        setShowBooking(true)
        setShowEditBookingForm(false)
        setShowBookingInputRequired(false)
    }

    function saveUpdatedBooking() {

        if (updatedBooking.date === "" || updatedBooking.time === "" || updatedBooking.numberOfGuests === 0) {
            setShowBookingInputRequired(true)
            return
        }

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
                setShowBooking(true)
                setShowEditBookingForm(false)
                setShowBookingDone(true)

                setTimeout(() => {
                    setShowBookingDone(false)
                }, 5000)
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

    function searchBookings() {

        setSearchValue("")
        let searchResultsArray: IBooking[] = [];

        for (let i = 0; i < bookingsFromApi.length; i++) {
            const booking = bookingsFromApi[i];

            if (booking._id === searchValue) {
                searchResultsArray.push(booking)
            }
        }
        setSearchResults([...searchResultsArray])
    }

    function handleSearch(e: ChangeEvent<HTMLInputElement>) {
        setSearchValue(e.target.value)
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let bookingsHtml = bookingsFromApi.map((booking, i) => {
        return (<div className="bookingBox animate__animated animate__fadeIn" key={i}>

            <div className="bookingBoxDetailsField"><GiPassport></GiPassport> Bokningsnr : {booking._id}</div>
            <div className="bookingBoxDetailsField"><MdGroups></MdGroups>Antal gäster : {booking.numberOfGuests}</div>
            <div className="bookingBoxDetailsField"><MdOutlineDateRange></MdOutlineDateRange>Datum : {booking.date}</div>
            <div className="bookingBoxDetailsField"><MdAccessTime></MdAccessTime>Tid : {booking.time}</div>
            <button className="Btn" onClick={() => { showDetails(i) }}>se detailjer <MdInfoOutline></MdInfoOutline> </button>
            <button className="deleteBtn" onClick={() => { deleteBooking(booking._id, i) }}>radera bokning<GiCancel></GiCancel></button>
        </div>)
    })

    let detailsHtml = (
        <div className="detailsBox animate__animated animate__flipInX">
            <button className="deleteBtn" onClick={closeDetailsSection}>stäng <GiCancel></GiCancel></button>
            <button className="Btn" onClick={editBooking}>ändra bokning <MdOutlineEditNote></MdOutlineEditNote> </button>
            <div className="customerDetailsField"><MdPersonPin></MdPersonPin>Kund : {customer.name} {customer.lastname}</div>
            <div className="customerDetailsField"><MdEmail></MdEmail>Epost : {customer.email}</div>
            <div className="customerDetailsField"><MdPhoneIphone></MdPhoneIphone>Tel : {customer.phone}</div>
            <div className="customerDetailsField"><MdGroups></MdGroups>Antal gäster : {detailedBooking.numberOfGuests}</div>
            <div className="customerDetailsField"><MdOutlineDateRange></MdOutlineDateRange>Datum : {detailedBooking.date}</div>
            <div className="customerDetailsField"><MdAccessTime></MdAccessTime>Tid : {detailedBooking.time}</div>

        </div>)

    let searchResultsHtml = searchResults.map((searchResult, index) => {
        return (<div className="bookingBox animate__animated animate__flipInX" key={index}>
            <div className="bookingBoxDetailsField"><GiPassport></GiPassport> Bokningsnr : {searchResult._id}</div>
            <div className="bookingBoxDetailsField"><MdGroups></MdGroups>Antal gäster : {searchResult.numberOfGuests}</div>
            <div className="bookingBoxDetailsField"><MdOutlineDateRange></MdOutlineDateRange>Datum : {searchResult.date}</div>
            <div className="bookingBoxDetailsField"><MdAccessTime></MdAccessTime>Tid : {searchResult.time}</div>
            <button className="deleteBtn" onClick={() => { deleteBooking(searchResult._id, index) }}>radera bokning<GiCancel></GiCancel></button>
        </div>)
    })

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (<>

        <section className="adminBookingSection">
            <div className="adminMainBtns">
                <button className="Btn" onClick={showBookingField}>skapa bokning <MdLibraryAdd></MdLibraryAdd> </button>
                <button className="Btn" onClick={() => { setShowBooking(!showBooking); setShowSearchField(!showSearchField) }}>sök bokning <MdSearch></MdSearch> </button>
            </div>

            {showBookingDone && <div className="bookingDone animate__animated animate__fadeInDown">Uppdaterat <MdOutlineUpdate></MdOutlineUpdate> </div>}
            {showBookingForm && <div className="adminBookingForm animate__animated animate__flipInX">

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
                                <button type="button" className="deleteBtn" onClick={cancelBooking}>avbryt <GiCancel></GiCancel> </button>
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

            {showSearchField && <section className="adminSearchContainer animate__animated animate__flipInX">

                <input className="searchInput" type="text" placeholder="bokningsnummer" value={searchValue} onChange={handleSearch} />
                <button className="Btn" onClick={searchBookings}>sök<MdSearch></MdSearch> </button>

                <div>
                    {searchResultsHtml}
                </div>
            </section>}

            {showEditBookingForm && <div className="adminUpdateBookingContainer animate__animated animate__flipInX">

                <h3>Vänligen välj ny tid,datum och antal gäster.</h3>

                <input type="date" name="date" onChange={handleEditFormDateChange} />

                <select name="time" onChange={handleEditFormTimeAndGuestsChange}>
                    <option value="18:00">18:00</option>
                    <option value="21:00">21:00</option>
                </select>

                <input name="numberOfGuests" type="text" onChange={handleEditFormDateChange} placeholder="antal gäster max 90" />

                {showBookingInputRequired && <div className="warning animate__animated animate__headShake">Alla fällt är obligatoriska</div>}
                <button className="Btn" onClick={saveUpdatedBooking} >Uppdatera bokning <GiConfirmed></GiConfirmed> </button>
                <button className="deleteBtn" onClick={cancelUpdateBooking}>Avbryt <GiCancel></GiCancel></button>
            </div>}

            {bookingsFromApi.length < 1 && <section className="loading"> <img src="../../images/rocket.gif" alt="loading animation" /> laddar...</section>}

            {showBooking && bookingsFromApi.length > 0 && <section className="adminBookingsContainer">{bookingsHtml}</section>}
        </main>
    </>)
}