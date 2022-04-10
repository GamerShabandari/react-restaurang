import axios from "axios"
import { useEffect, useState } from "react"
import { IBooking } from "./models/IBooking"

import "./admin.css"
import { INewUser } from "./models/INewUser"

export function Admin() {


    const [bookingsFromApi, setBookingsFromApi] = useState<IBooking[]>([])
    const [testUser, setTestuser] = useState<INewUser>({
        name: "hallo",
        lastname: "",
        email: "",
        phone: ""
    })


    useEffect(() => {

        axios.get<IBooking[]>("https://school-restaurant-api.azurewebsites.net/booking/restaurant/624db995d80b65d5c561f68d")
            .then(response => {
                setBookingsFromApi([...response.data])
            })

    }, [])

    function showDetails(bookingIndex: number) {

        let chosenBooking = bookingsFromApi[bookingIndex];

        axios.get<INewUser>("https://school-restaurant-api.azurewebsites.net/customer/" + chosenBooking.customerId)
            .then(response => {
                console.log(response.data);

                let user: INewUser = {
                    name: response.data.name,
                    lastname: response.data.lastname,
                    email: response.data.email,
                    phone: response.data.phone
                }
                //     console.log(user);

                //   setTestuser(user) 
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

    let bookingsHtml = bookingsFromApi.map((booking, i) => {
        return (<div className="bookingBox" key={i}>
            <h3>{booking.date}</h3>
            <h4>{booking.time}</h4>
            <h4>{booking.numberOfGuests}</h4>
            <h5>{booking._id}</h5>
            <button onClick={() => { showDetails(i) }}>se detailjer</button>
            <button onClick={() => { deleteBooking(booking._id, i) }}>ta bort bokning</button>
        </div>)
    })

    return (<>
        <main className="adminMain">
            <h1>{testUser.name}</h1>
            {bookingsFromApi.length < 1 && <div>laddar...</div>}
            {bookingsFromApi.length > 0 && <section className="adminBookingsContainer">{bookingsHtml}</section>}
        </main>
    </>)
}