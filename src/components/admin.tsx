import { useState } from "react";
import BookingDataAdmin from "../data/BookingDataAdmin";
import BookingList from "./BookingList"

interface Adminprops{
text: string
bgColor: string
textColor: string
}


export function Admin({ text, bgColor, textColor }: Adminprops) {

  const Adminstyles = {
    backgroundColor: bgColor, color: textColor
  }

  const [booking, setBooking] = useState (BookingDataAdmin)
  return (
    <header style={Adminstyles}>
      
        <h2>{text}</h2>
        <BookingList booking={booking}/>
      
        
      
    </header>
    
  )
}

Admin.defaultProps = {
  text: 'ADMIN',
  bgColor: 'rgba(0,0,0,0.0)',
  textColor: 'rgb(236, 85, 85)',
  }
  





