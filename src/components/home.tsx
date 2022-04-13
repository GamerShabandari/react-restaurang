import './home.css';
import 'animate.css';

export function Home() {
   return (
      <>

         <section className='container-layout'>
            <div className='container-food animate__animated animate__fadeIn'>

               <div className='title'>
                  <h2 className='food-title animate__animated animate__fadeIn animate__delay-2s'>MENY</h2>
                  <img src="../../images/food_animation.gif" alt="animated food icon" className='animatedIcon animate__animated animate__fadeIn animate__delay-2s' />
               </div>

               <article className='container-menu  animate__animated animate__fadeIn animate__delay-1s'>

                  <div className='foodCard'>
                     <img src='images/ebi.png' alt='menu' />
                     <p>Räka</p>
                  </div>

                  <div className='foodCard'>
                     <img src='images/sardin.png' alt='menu' />
                     <p>Sardin </p>
                  </div>

                  <div className='foodCard'>
                     <img src='images/tonfisk.png' alt='menu' />
                     <p>Tonfisk</p>
                  </div>

                  <div className='foodCard'>
                     <img src='images/sill.png' alt='menu' width="150" height="150" />
                     <p>Sill</p>
                  </div>

                  <div className='foodCard'>
                     <img src='images/makrill.png' alt='menu' />
                     <p>Makrill</p>
                  </div>

                  <div className='foodCard'>
                     <img src='images/flundra.png' alt='menu' />
                     <p>Flundra </p>
                  </div>

                  <div className='foodCard'>
                     <img src='images/kai.png' alt='menu' />
                     <p>Ark shell</p>
                  </div>

                  <div className='foodCard'>
                     <img src='images/skal.png' alt='menu' width="150" height="150" />
                     <p>Skal </p>
                  </div>

                  <div className='foodCard'>
                     <img src='images/temari.png' alt='menu' />
                     <p>Temari sushi</p>
                  </div>

                  <div className='foodCard'>
                     <img src='images/rollsushi.png' alt='menu' />
                     <p>Roll sushi</p>
                  </div>

                  <div className='foodCard'>
                     <img src='images/flowersushi.png' alt='menu' />
                     <p>Deco sushi</p>
                  </div>

                  <div className='foodCard'>
                     <img src='images/bento.png' alt='menu' />
                     <p>Teishoku</p>
                  </div>
               </article>


               <div className='title'>
                  <h2 className='food-title animate__animated animate__fadeIn animate__delay-2s'>DRYCK</h2>
                  <img src="../../images/drinks_animation.gif" alt="animated drinks icon" className='animatedIcon animate__animated animate__fadeIn animate__delay-2s' />
               </div>
               

               <article className='container-drink'>
         
                  <div className='foodCard'>
                     <img src='images/sakeHaku2.png' alt='drink' />
                     <p>Sake Hakutaka</p>
                  </div>

                  <div className='foodCard'>
                     <img src='images/saketaru.png' alt='drink' />
                     <p>Tunna sake</p>
                  </div>

                  <div className='foodCard'>
                     <img src='images/beer.png' alt='drink' />
                     <p>Asahi öl</p>
                  </div>

                  <div className='foodCard'>
                     <img src='images/macha.png' alt='drink' />
                     <p>Macha Te</p>
                  </div>
               </article>


               <div className='title'>
                  <h2 className='food-title animate__animated animate__fadeIn animate__delay-2s'>EFTERRÄTT</h2>
                  <img src="../../images/cake_animation.gif" alt="animated cake icon" className='animatedIcon animate__animated animate__fadeIn animate__delay-2s' />
               </div>
               

               <article className='container-dessert'>

                  <div className='foodCard'>
                     <img src='images/greenteaglass.png' alt='dessert' />
                     <p>Grönt te glass</p>
                  </div>

                  <div className='foodCard'>
                     <img src='images/greencake.png' alt='dessert' />
                     <p>Macha roll</p>
                  </div>

                  <div className='foodCard'>
                     <img src='images/fruits.png' alt='dessert' />
                     <p>Frukt parfait</p>
                  </div>

                  <div className='foodCard'>
                     <img src='images/cherrymochi.png' alt='dessert' />
                     <p>Sakura mochi</p>
                  </div>
               </article>
            </div>
         </section>

      </>
   )
}