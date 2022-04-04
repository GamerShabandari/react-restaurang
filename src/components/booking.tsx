import { ChangeEvent, useState } from "react"

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

    const [tablesAt6oClock, SetTablesAt6oClock] = useState<number>(0);
    const [tablesAt9oClock, SetTablesAt9oClock] = useState<number>(0);

    const [chosenDate, setChosenDate] = useState<string>("");
    const [chosenTime, setChosenTime] = useState<string>("");
    const [chosenAmountOfGuests, setChosenAmountOfGuests] = useState<string>("");

    const [showUserForm, setShowUserForm] = useState(false);

    function checkIfOpenTable() {

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

    function cancelBooking(){
        setShowUserForm(false)
    }

    function makeBooking(){

        console.log("här");
        
        // validera att alla uppgiter är ifyllda i form !!!!!

       // skapa en ny user med färdiga klassen som finns. 
       //skapa sedan en ny booking innehållandes ovan user också
       // kör allt till api
        
    }


    return (<>
        <div>Booking Works</div>
        {!showUserForm && <div>

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
            
            <button onClick={checkIfOpenTable}>testa boka</button>
            {tablesAt6oClock > 0 && <div>finns {tablesAt6oClock} lediga bord kl 18 <button onClick={() => { choseTimeForDinner("18:00") }}>Välj denna tid</button> </div>}
            {tablesAt9oClock > 0 && <div>finns {tablesAt9oClock} lediga bord kl 21 <button onClick={() => { choseTimeForDinner("21:00") }}>Välj denna tid</button></div>}
           

        </div>}

        {showUserForm && <div>
            <div>
                <h1>Fyll i resterande uppgifter för att slutföra bokning</h1>
                <div>
                    <p>dina val: bord för {chosenAmountOfGuests} personer klockan {chosenTime} - {chosenDate}</p>
                </div>
                <form>
                    <input type="text" placeholder="förnamn" />
                    <input type="text" placeholder="efternamn" />
                    <input type="email" placeholder="epost" />
                    <input type="tel" placeholder="telefon" />
                </form>
                <button onClick={makeBooking}>spara bokning</button>
                <button onClick={cancelBooking}>avbryt</button>
            </div>
        </div>}
    </>)
}