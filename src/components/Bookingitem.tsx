import "./bookingitem.css"
interface bookingitemprops {
item: any
}



function Bookingitem({item}: bookingitemprops) {
  

  return (
    <div className="card">
      <div className="num-display"> table:{item.table}</div>
      <div className="text-display">Food: {item.text}</div>
      <div className="id-display">ID: {item.id}</div>
    </div>
  )
}

export default Bookingitem
