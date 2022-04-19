import './home.css';
import 'animate.css';

export function Home() {
   return (
      <>

         <section className='container-layout'>
            <div className='container-food animate__animated animate__fadeIn'>

               <div className='title'>
                  <h2 className='food-title animate__animated animate__fadeIn animate__delay-1s'>MENY</h2>
                  <img src="../../images/food_animation.gif" alt="animated food icon" className='animatedIcon animate__animated animate__fadeIn animate__delay-2s' />
               </div>

               <article className='container-menu  animate__animated animate__fadeIn'>

                  <div className='foodCard'>
                     <img src='images/ebi.png' alt='menu' />
                     <div>Räka <p>pris: 100kr</p> </div>
                  </div>

                  <div className='foodCard'>
                     <img src='images/sardin.png' alt='menu' />

                     <div>Sardin <p>pris: 100kr</p> </div>
                  </div>

                  <div className='foodCard'>
                     <img src='images/tonfisk.png' alt='menu' />

                     <div>Tonfisk <p>pris: 100kr</p> </div>
                  </div>

                  <div className='foodCard'>
                     <img src='images/sill.png' alt='menu' width="150" height="150" />

                     <div>Sill <p>pris: 100kr</p> </div>
                  </div>

                  <div className='foodCard'>
                     <img src='images/makrill.png' alt='menu' />

                     <div>Makrill <p>pris: 100kr</p> </div>
                  </div>

                  <div className='foodCard'>
                     <img src='images/flundra.png' alt='menu' />

                     <div>Flundra <p>pris: 100kr</p> </div>
                  </div>

                  <div className='foodCard'>
                     <img src='images/kai.png' alt='menu' />

                     <div>Ark shell <p>pris: 100kr</p> </div>
                  </div>

                  <div className='foodCard'>
                     <img src='images/skal.png' alt='menu' width="150" height="150" />

                     <div>Skal <p>pris: 100kr</p> </div>
                  </div>

                  <div className='foodCard'>
                     <img src='images/temari.png' alt='menu' />

                     <div>Temari sushi <p>pris: 100kr</p> </div>
                  </div>

                  <div className='foodCard'>
                     <img src='images/rollsushi.png' alt='menu' />

                     <div>Roll sushi <p>pris: 100kr</p> </div>
                  </div>

                  <div className='foodCard'>
                     <img src='images/flowersushi.png' alt='menu' />

                     <div>Deco sushi <p>pris: 100kr</p> </div>
                  </div>

                  <div className='foodCard'>
                     <img src='images/bento.png' alt='menu' />

                     <div>Teishoku <p>pris: 100kr</p> </div>
                  </div>
               </article>


               <div className='title'>
                  <h2 className='food-title animate__animated animate__fadeIn animate__delay-1s'>DRYCK</h2>
                  <img src="../../images/drinks_animation.gif" alt="animated drinks icon" className='animatedIcon animate__animated animate__fadeIn animate__delay-2s' />
               </div>


               <article className='container-drink animate__animated animate__fadeIn'>

                  <div className='foodCard'>
                     <img src='images/sakeHaku2.png' alt='drink' />

                     <div>Sake Hakutaka <p>pris: 100kr</p> </div>
                  </div>

                  <div className='foodCard'>
                     <img src='images/saketaru.png' alt='drink' />

                     <div>Tunna sake <p>pris: 100kr</p> </div>
                  </div>

                  <div className='foodCard'>
                     <img src='images/beer.png' alt='drink' />

                     <div>Asahi öl <p>pris: 100kr</p> </div>
                  </div>

                  <div className='foodCard'>
                     <img src='images/macha.png' alt='drink' />

                     <div>Macha te <p>pris: 100kr</p> </div>
                  </div>
               </article>


               <div className='title'>
                  <h2 className='food-title animate__animated animate__fadeIn animate__delay-1s'>EFTERRÄTT</h2>
                  <img src="../../images/cake_animation.gif" alt="animated cake icon" className='animatedIcon animate__animated animate__fadeIn animate__delay-2s' />
               </div>


               <article className='container-dessert animate__animated animate__fadeIn'>

                  <div className='foodCard'>
                     <img src='images/greenteaglass.png' alt='dessert' />

                     <div>Grönt te glas <p>pris: 100kr</p> </div>
                  </div>

                  <div className='foodCard'>
                     <img src='images/greencake.png' alt='dessert' />

                     <div>Macha roll <p>pris: 100kr</p> </div>
                  </div>

                  <div className='foodCard'>
                     <img src='images/fruits.png' alt='dessert' />

                     <div>Frukt parfait <p>pris: 100kr</p> </div>
                  </div>

                  <div className='foodCard'>
                     <img src='images/cherrymochi.png' alt='dessert' />

                     <div>Sakura mochi <p>pris: 100kr</p> </div>
                  </div>
               </article>
            </div>
         </section>

      </>
   )
}