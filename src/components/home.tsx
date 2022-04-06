import './home.css';
import { Fragment } from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export function Home(){

    {/*Google map karta*/} 
    const Map = () => {
        const mapStyles = {
        height: "60%",
        width: "50%"
    };

    const defaultCenter = {
        lat: 59.3255, lng: 17.8887,
    };

    const locations = [
        {
            name: "Location 1",
            location: {
                lat: 59.3255,
                lng: 17.8887,
            },
        },
    ];

    return (
        <LoadScript googleMapsApiKey='AIzaSyDyGEW9BNtdNTTs9dTsjDT1PJGmdb4e0lM'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}>
                {
                    locations.map(item => {
                        return (
                            <Marker key={item.name} position={item.location} />
                        )
                    })
                }
            </GoogleMap>
        </LoadScript>
    )
}


    return (
     <Fragment>
      <body>
      {/*background image*/}
      <section style={{ backgroundImage: "url(images/blackwall.png)" }}>
     
      {/*Link to Booking*/}
      <a href='/booking' className='button-a' ><p className='button'>BOKA BOARD</p></a>

      <section className='container-layout'>
        <div className='container-food'>
        <h2 className='food-title'>MENY</h2>
        <article className='container-menu'>
           <div>
           <img src='images/räka.png' alt='menu picture' />
           <p>Räka</p>
           </div>

           <div>
           <img src='images/sardin .png' alt='menu picture' />
           <p>Sardin </p>
           </div>

           <div>
           <img src='images/tonfisk.png' alt='menu picture' />
           <p>Tonfisk</p>
           </div>

           <div>
           <img src='images/sill.png' alt='menu picture' width="150" height="150" />
           <p>Sill</p>
           </div>

           <div>
           <img src='images/makrill.png' alt='menu picture' />
           <p>Makrill</p>
           </div>

           <div>
           <img src='images/flundra.png' alt='menu picture' />
           <p>Flundra </p>
           </div>

           <div>
           <img src='images/kai.png' alt='menu picture' />
           <p>Ark shell</p>
           </div>

           <div>
           <img src='images/skal.png' alt='menu picture' width="150" height="150" />
           <p>Skal </p>
           </div>

           <div>
           <img src='images/temari.png' alt='menu picture' />
           <p>Temari sushi</p>
           </div>

           <div>
           <img src='images/rollsushi.png' alt='menu picture' />
           <p>Roll sushi</p>
           </div>

           <div>
           <img src='images/flowersushi.png' alt='menu picture' />
           <p>Deco sushi</p>
           </div>

           <div>
           <img src='images/bento.png' alt='menu picture' />
           <p>Teishoku</p>
           </div>
        </article>{/*container-menu*/}

        <h2 className='food-title'>DRYCK</h2>
        <article className='container-drink'>
        <div>
           <img src='images/sakeHaku2.png' alt='drink picture' />
           <p>Sake Hakutaka</p>
           </div>

           <div>
           <img src='images/saketaru.png' alt='drink picture' />
           <p>Tunna sake</p>
           </div>

           <div>
           <img src='images/beer.png' alt='drink picture' />
           <p>Asahi öl</p>
           </div>

           <div>
           <img src='images/macha.png' alt='drink picture' />
           <p>Macha Te</p>
           </div>
        </article>{/*container-drink*/}

        <h2 className='food-title'>EFTERRÄTT</h2>
        <article className='container-dessert'>
        <div>
           <img src='images/greenteaglass.png' alt='dessert picture' />
           <p>Grönt te glass</p>
           </div>

           <div>
           <img src='images/greencake.png' alt='dessert picture' />
           <p>Macha roll</p>
           </div>

           <div>
           <img src='images/fruits.png' alt='dessert picture' />
           <p>Frukt parfait</p>
           </div>

           <div>
           <img src='images/cherrymochi.png' alt='dessert picture' />
           <p>Sakura mochi</p>
           </div>
        </article>{/*container-dessert*/}
        </div>{/*container-food*/}

        <aside className='container-openhour'>
            <ul>
                <li className='openhour-title'>ÖPPETTIDER</li>
                <li>alla dagar  18-23</li>
                
            </ul>
        </aside>{/*container-openhour*/}
      </section>{/*container-layout*/}
      </section>{/*background image*/}

      <section className='google-map'>
          <h1>Katana sushi karta </h1>
          {Map()}
      </section>

      </body>
    </Fragment>
    )
}