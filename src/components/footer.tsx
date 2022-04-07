import './footer.css';
import { Fragment } from "react";
import { render } from "react-dom";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookSquare } from '@fontawesome/free-regular-svg-icons';
// import { faBrands } from '@fortawesome/free-brands-svg-icons'

export function Footer(){

    return(
    <Fragment>
        <section className='footer' style={{ backgroundImage: "url(images/whitewall.png)" }}>
            <section className='footer-flex'>
            <article className='address'>
                <p>Välkommenvägen123 </p>
                <p>Stockholm 111111</p>
                <p>08-123-4567</p>
                <p>info@katanasushi.comcom</p>
                {/*<FontAwesomeIcon icon="fa-brands fa-facebook-square" />*/}
            </article>
            <article className='katana'>
                <span>katana</span>
                <p>刀</p>
            </article>
            <article>
            <ul className='openhour-title'>
                <li>ÖPPETTIDER</li>
                <li>Alla dagar  18-23</li>
            </ul>
            </article>
            </section>

            <article className='copyright'>
                <p>Katana Sushi AB</p>
                <p>All rights reserved 2022</p>
            </article>
        </section>
    </Fragment>
    )
}