import './footer.css';
import { Fragment } from "react";
import { render } from "react-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillPhone, AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineMail} from "react-icons/hi";
import { GiSamuraiHelmet, GiSushis } from "react-icons/gi";

export function Footer(){

    return(
    <Fragment>
        <section className='footer' style={{ backgroundImage: "url(images/whitewall.png)" }}>
            <section className='footer-flex'>
            <article className='address'>
                <p><FaMapMarkerAlt/> Kungsgatan 1 </p>
                <p>Uppsala 753 16</p>
                <p><AiFillPhone/> +46 18-123-4567</p>
                <p><HiOutlineMail/> info@katanasushi.comcom</p>
            </article>
            <article className='katana'>
            <GiSamuraiHelmet className='samurai-icon'></GiSamuraiHelmet>
            </article>
            <article>
            <ul className='openhour-title'>
                <li><AiOutlineCalendar/> ÖPPETTIDER</li>
                <li>Alla dagar  18-23</li>
            </ul>
            </article>
            </section>

            <p className='copyright'>Katana Sushi AB | All rights reserved 2022</p>
        </section>
    </Fragment>
    )
}