import './home.css';
import { Fragment } from "react";
import 'animate.css';

export function Home(){
    return (
     <Fragment>
      {/*background image*/}
      <section className='menu-bg' style={{ backgroundImage: "url(images/greywall.png)" }}>

      <section className='container-layout'>
        <div className='container-food'>
        <h2 className='food-title'>MENY</h2>
        <article className='container-menu'>
           <div>
           <img src='images/ebi.png' alt='menu' />
           <p>Räka</p>
           </div>

           <div>
           <img src='images/sardin.png' alt='menu' />
           <p>Sardin </p>
           </div>

           <div>
           <img src='images/tonfisk.png' alt='menu' />
           <p>Tonfisk</p>
           </div>

           <div>
           <img src='images/sill.png' alt='menu' width="150" height="150" />
           <p>Sill</p>
           </div>

           <div>
           <img src='images/makrill.png' alt='menu' />
           <p>Makrill</p>
           </div>

           <div>
           <img src='images/flundra.png' alt='menu' />
           <p>Flundra </p>
           </div>

           <div>
           <img src='images/kai.png' alt='menu' />
           <p>Ark shell</p>
           </div>

           <div>
           <img src='images/skal.png' alt='menu' width="150" height="150" />
           <p>Skal </p>
           </div>

           <div>
           <img src='images/temari.png' alt='menu' />
           <p>Temari sushi</p>
           </div>

           <div>
           <img src='images/rollsushi.png' alt='menu' />
           <p>Roll sushi</p>
           </div>

           <div>
           <img src='images/flowersushi.png' alt='menu' />
           <p>Deco sushi</p>
           </div>

           <div>
           <img src='images/bento.png' alt='menu' />
           <p>Teishoku</p>
           </div>
        </article>{/*container-menu*/}

        <h2 className='food-title'>DRYCK</h2>
        <article className='container-drink'>
        <div>
           <img src='images/sakeHaku2.png' alt='drink' />
           <p>Sake Hakutaka</p>
           </div>

           <div>
           <img src='images/saketaru.png' alt='drink' />
           <p>Tunna sake</p>
           </div>

           <div>
           <img src='images/beer.png' alt='drink' />
           <p>Asahi öl</p>
           </div>

           <div>
           <img src='images/macha.png' alt='drink' />
           <p>Macha Te</p>
           </div>
        </article>{/*container-drink*/}

        <h2 className='food-title'>EFTERRÄTT</h2>
        <article className='container-dessert'>
        <div>
           <img src='images/greenteaglass.png' alt='dessert' />
           <p>Grönt te glass</p>
           </div>

           <div>
           <img src='images/greencake.png' alt='dessert' />
           <p>Macha roll</p>
           </div>

           <div>
           <img src='images/fruits.png' alt='dessert' />
           <p>Frukt parfait</p>
           </div>

           <div>
           <img src='images/cherrymochi.png' alt='dessert' />
           <p>Sakura mochi</p>
           </div>
        </article>{/*container-dessert*/}
        </div>{/*container-food*/}
      </section>{/*container-layout*/}
      </section>{/*background image*/}
    </Fragment>
    )
}