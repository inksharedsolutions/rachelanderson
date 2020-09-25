import React from 'react';
import style from './Footer.module.scss';
import Aux from '../../hoc/Auxiliary';
import Lists from '../../components/Navigations/List/List';


import { faTwitter, faInstagram, faFacebook, faGoodreads } from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MessengerCustomerChat from 'react-messenger-customer-chat';

const Footer = (props) => {

    const link = [
        'Privacy-policy',
        'Terms-and-conditions'];

    return (
        <Aux>
            <footer className={style.footer}>
                <div className='container'>
                    <div className='row'>

                        <div className='col l6 m12 s12'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.2235231342092!2d-90.27789318476846!3d34.67430768044128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d54871f2ad70e5%3A0x9828492841766c6!2s1015%20Emma%20Williams%20Rd%2C%20Tunica%2C%20MS%2038676%2C%20USA!5e0!3m2!1sen!2sph!4v1600927639156!5m2!1sen!2sph" id={style.iframeMap} frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            <nav id={style.soc_medias}>
                                <a
                                    href="https://www.facebook.com/Dr-Rachell-N-Anderson-694471960984670/"
                                    target="_blank"
                                    rel="noopener noreferrer">

                                    <FontAwesomeIcon
                                        className='font-awesome'
                                        icon={faFacebook} />
                                </a>
                                <a
                                    href="https://twitter.com/strattonpress/"
                                    target="_blank"
                                    rel="noopener noreferrer">

                                    <FontAwesomeIcon
                                        className='font-awesome'
                                        icon={faTwitter} />
                                </a>
                                <a
                                    href="https://www.instagram.com/strattonpress/"
                                    target="_blank"
                                    rel="noopener noreferrer">

                                    <FontAwesomeIcon
                                        className='font-awesome'
                                        icon={faInstagram} />
                                </a>
                                <a
                                    href="https://www.goodreads.com/book/show/49224456-american-made"
                                    target="_blank"
                                    rel="noopener noreferrer">

                                    <FontAwesomeIcon
                                        className='font-awesome'
                                        icon={faGoodreads} />
                                </a>
                            </nav>
                        </div>

                        <div className='col l6 m12 s12' id={style.info}>
                            <div className={style.leftFooternav}>
                                <h5>Get in Touch</h5>
                                <p>Dr. Rachel Anderson loves to hear from readers. You can reach her book via email.
									Feel free to send questions about writing, her works, interviews and other publicity matters.</p>
                            </div>

                            <div className={style.socialMediacontainer}>
                                <div className={style.infoFooter}>
                                    <p className={style.fontAwesomePargh}><span className={style.spanFonts}><i className="far fa-envelope"></i></span>publish@stratton-press.com</p>
                                    <p className={style.fontAwesomePargh}><span className={style.spanFonts}><i className="fas fa-phone"></i></span>888-323-7009</p>
                                    <p className={style.fontAwesomePargh}><span className={style.spanFonts}><i className="fas fa-map-marker-alt"></i></span> 831 N Tatnall Street, Suite M #188 </p>
                                    <p className={style.fontAwesomePargh} id={style.ffInfoCustomize}>Wilmington, DE 19801</p>

                                    <div className={style.footerNav}>
                                        <ul>
                                            <Lists links={link} path={props.location} />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <MessengerCustomerChat pageId="330094504273633" />,

                    	<div className={style.socialMediaContainer}>

                        </div>
                    </div>
                </div>
            </footer>
        </Aux>
    )
}

export default Footer;	