import Bookingitem from "./Bookingitem"
interface bookingListprops {
booking: any
}


function BookingList({booking}: bookingListprops) {
 if(booking.length === 0) {
 return <p>no bookings yet</p>
 }

  return (
    <div className='booking-list'>
    {booking.map( (item: any) => (
    <Bookingitem key={item.id} item={item}/>

    ))}
    </div>
  )
}

export default BookingList
