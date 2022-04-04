import { useState } from "react"

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

    function checkIfOpenTable() {


        let chosenDate: string = "2022-01-01"

        let numberOfTablesAt6Left: number = 15
        let numberOfTablesAt9Left: number = 15

        for (let i = 0; i < mockData.length; i++) {
            const order = mockData[i];

            if (order.date === chosenDate && order.time === "18:00") {
                numberOfTablesAt6Left--


            } else if (order.date === chosenDate && order.time === "21:00") {
                numberOfTablesAt9Left--


            }

        }

        console.log("här fanns det " + numberOfTablesAt6Left + " bord kvar kl 18 och " + numberOfTablesAt9Left + " bord kvar kl 21");

        SetTablesAt6oClock(numberOfTablesAt6Left)
        SetTablesAt9oClock(numberOfTablesAt9Left)

    }

    function choseTimeForDinner(chosenTime:string) {

        console.log("du valde: " + chosenTime);
        

    }


    return (<>
        <div>Booking Works</div>
        <button onClick={checkIfOpenTable}>testa boka</button>
        {tablesAt6oClock > 0 && <div>finns {tablesAt6oClock} lediga bord kl 18 <button onClick={()=>{choseTimeForDinner("18:00")}}>Välj denna tid</button> </div>}
        {tablesAt9oClock > 0 && <div>finns {tablesAt9oClock} lediga bord kl 21 <button onClick={()=>{choseTimeForDinner("21:00")}}>Välj denna tid</button></div>}
    </>)
}