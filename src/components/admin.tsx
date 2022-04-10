import axios from "axios"
import { useEffect, useState } from "react"
import { IBooking } from "./models/IBooking"

import "./admin.css"
import { INewUser } from "./models/INewUser"
import { Bookings } from "./models/Bookings"

export function Admin() {


    const [bookingsFromApi, setBookingsFromApi] = useState<IBooking[]>([])
    const [showDetailsSection, setShowDetailsSection] = useState(false);
    const [customer, setCustomer] = useState<INewUser>({
        name: "",
        lastname: "",
        email: "",
        phone: ""
    })

    const [detailedBooking, setDetailedBooking] = useState<Bookings>({
        restaurantId: "",
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


    useEffect(() => {

        axios.get<IBooking[]>("https://school-restaurant-api.azurewebsites.net/booking/restaurant/624db995d80b65d5c561f68d")
            .then(response => {
                setBookingsFromApi([...response.data])
            })

    }, [])

    function showDetails(bookingIndex: number) {

        let chosenBooking = bookingsFromApi[bookingIndex];

        axios.get<INewUser[]>("https://school-restaurant-api.azurewebsites.net/customer/" + chosenBooking.customerId)
            .then(response => {

                let user: INewUser = {
                    name: response.data[0].name,
                    lastname: response.data[0].lastname,
                    email: response.data[0].email,
                    phone: response.data[0].phone
                }
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

    function closeDetailsSection() {
        setShowDetailsSection(false)
    }

    let bookingsHtml = bookingsFromApi.map((booking, i) => {
        return (<div className="bookingBox" key={i}>
            <h5>Bokningsnr: {booking._id}</h5>
            <h3>Datum: {booking.date}</h3>
            <h4>Tid: {booking.time}</h4>
            <h4>Antal gäster:{booking.numberOfGuests}</h4>
            <button onClick={() => { showDetails(i) }}>se detailjer</button>
            <button onClick={() => { deleteBooking(booking._id, i) }}>ta bort bokning</button>
        </div>)
    })

    let detailsHtml = (
        <div className="detailsBox">
            <button onClick={closeDetailsSection}>stäng</button>
            <h2>Kund: {customer.name} {customer.lastname}</h2>
            <h3>Epost: {customer.email}</h3>
            <h3>Telefon: {customer.phone}</h3>
            <h5>Antal gäster: {detailedBooking.numberOfGuests}</h5>
            <h5>Datum: {detailedBooking.date}</h5>
            <h5>Tid: {detailedBooking.time}</h5>
        </div>)

    return (<>
        <main className="adminMain">
            {showDetailsSection && <section className="adminDetailsContainer">{detailsHtml}</section>}

            {bookingsFromApi.length < 1 && <div>laddar...</div>}
            {bookingsFromApi.length > 0 && <section className="adminBookingsContainer">{bookingsHtml}</section>}
        </main>
    </>)
}