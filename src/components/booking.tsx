import { ChangeEvent, useState } from "react"
import { INewUser } from "./models/INewUser";
import { User } from "./models/User";
import { Bookings } from "./models/Bookings";

export function Booking() {

    let mockData = [
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "18:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "18:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "18:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "18:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "18:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "18:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "18:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "18:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "18:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "18:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "18:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "18:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "18:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "18:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },

        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "18:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },

        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "21:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "21:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "21:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "21:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "21:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "21:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "21:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "21:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "21:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "21:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "21:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "21:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "21:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "21:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        },
        {
            "id": "623b85d54396b96c57bde7c3",
            "restaurantId": "623b85d54396b96c57bde7c3",
            "date": "2022-01-01",
            "time": "21:00",
            "numberOfGuests": 4,
            "customerId": "623b85d54396b96c57bde7c3"
        }


    ]

    const [tablesAt6oClock, SetTablesAt6oClock] = useState<number>(-1);
    const [tablesAt9oClock, SetTablesAt9oClock] = useState<number>(-1);

    const [chosenDate, setChosenDate] = useState<string>("");
    const [chosenTime, setChosenTime] = useState<string>("");
    const [chosenAmountOfGuests, setChosenAmountOfGuests] = useState<string>("");

    const [newUser, setNewUser] = useState<INewUser>({
        firstname: "",
        lastname: "",
        email: "",
        phone: ""
    })

    const [showUserForm, setShowUserForm] = useState(false);
    const [showError, setShowError] = useState(false)
    const [showRequiredError, setShowRequiredError] = useState(false)
    const [showEmailError, setShowEmailError] = useState(false)
    const [showBookingDone, setShowBookingDone] = useState(false)

    function checkIfOpenTable() {

        if (chosenDate === "" || chosenAmountOfGuests === "") {
          
            setShowRequiredError(true)
            return
        }

        let checkDate: string = chosenDate

        let numberOfTablesAt6Left: number = 15
        let numberOfTablesAt9Left: number = 15

        for (let i = 0; i < mockData.length; i++) {
            const order = mockData[i];

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

    function makeBooking() {


        if (newUser.firstname === "" || newUser.lastname === "" || newUser.email === "" || newUser.phone === "") {

            setShowError(true)
            
            return
        }

        if (!/\S+@\S+\.\S+/.test(newUser.email)) {
            
            setShowEmailError(true)

            return
        }

       

        let user = new User(newUser.firstname, newUser.lastname, newUser.email, newUser.phone)

        let booking = new Bookings("testId", chosenDate, chosenTime, parseInt(chosenAmountOfGuests), user)

        setShowError(false)

        setShowUserForm(false)

        setShowBookingDone(true)

        console.log(booking);
        

    }

    return (<>
        <div>Booking Works</div>
        {!showBookingDone && <div>

            <p>välj datum och antal personer som ska äta</p>
            <input type="date" onChange={handleChosenDate} />

            <select name="amountOfGuests" onChange={handleChosenAmountOfGuests}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            <br />
            {showRequiredError && <div>Vänligen välj datum och antal gäster</div> }
            <button onClick={checkIfOpenTable}>testa boka</button>
            {tablesAt6oClock > 0 && <div>finns {tablesAt6oClock} lediga bord kl 18 <button onClick={() => { choseTimeForDinner("18:00") }}>Välj denna tid</button> </div>}
            {tablesAt9oClock > 0 && <div>finns {tablesAt9oClock} lediga bord kl 21 <button onClick={() => { choseTimeForDinner("21:00") }}>Välj denna tid</button></div>}
            {tablesAt6oClock === 0 && tablesAt9oClock === 0 && <div>Det fanns inga lediga bord det datumet, vänligen prova ett annat datum</div> }


        </div>}

        {showUserForm && <div>
            <div>
                <h1>Fyll i resterande uppgifter för att slutföra bokning</h1>
                <div>
                    <p>dina val: bord för {chosenAmountOfGuests} personer klockan {chosenTime} - {chosenDate}</p>
                </div>
                <form>
                    <input type="text" name="firstname" value={newUser.firstname} onChange={handleChange} placeholder="förnamn" />
                    <input type="text" name="lastname" value={newUser.lastname} onChange={handleChange} placeholder="efternamn" />
                    <input type="email" name="email" value={newUser.email} onChange={handleChange} placeholder="epost" />
                    <input type="tel" name="phone" value={newUser.phone} onChange={handleChange} placeholder="telefon" />
                </form>
                <button onClick={makeBooking}>spara bokning</button>
                <button onClick={cancelBooking}>avbryt</button>
            </div>
            {showError && <div>alla fällt är obligatoriska</div> }
            {showEmailError && <div>vänligen ange en giltig email</div> }
        </div>}
        {showBookingDone && <div>Bokning klar, tack!</div> }
    </>)
}