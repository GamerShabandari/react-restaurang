import './footer.css';
import { Fragment } from "react";
import { render } from "react-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillPhone, AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineMail} from "react-icons/hi";

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
                <p><ruby>刀<rt>katana</rt></ruby></p>
            </article>
            <article>
            <ul className='openhour-title'>
                <li><AiOutlineCalendar/> ÖPPETTIDER</li>
                <li>Alla dagar  18-23</li>
            </ul>
            </article>
            </section>

            {/*Wave*/}
            <p className='copyright'>Katana Sushi AB | All rights reserved 2022
            <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a9a2a8" fill-opacity="1" d="M0,128L34.3,128C68.6,128,137,128,206,106.7C274.3,85,343,43,411,32C480,21,549,43,617,80C685.7,117,754,171,823,181.3C891.4,192,960,160,1029,122.7C1097.1,85,1166,43,1234,42.7C1302.9,43,1371,85,1406,106.7L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"  preserveAspectRatio="none"></path></svg></p>
        </section>
    </Fragment>
    )
}