import React, { Route } from 'react';
import Aux from '../hoc/Auxiliary';
import style from '../styles/pages.module.scss';
import Header from '../components/header';
import BookLinks from '../components/Links/links';
import OtherLinks from '../components/Links/otherlinks'
import Footer from '../components/Footer/Footer';
import mainBook from '../asset/Books/main_book.png'
import secondBook from '../asset/Books/main_book-family-secret.png'
import { DiscussionEmbed } from "disqus-react"

class aboutTheBook extends React.Component {


    render() {

        const row = ['row', style.rowMarginBottom];
        const slug = (this.props.location.href);

        const disqusConfig = {
            shortname: 'dr-rachel-anderson',
            config: { identifier: 12, slug }
        }

        return (
            <Aux>

                <div className={style.flexWrapper}>
                    <Header currLocation={this.props.location} />
                    <main className={style.wrapperMain}>
                        <div className='container'>
                            <div className={row.join(' ')}>

                                <div className='col l6 m12 s12'>
                                    <div className={style.bookImgContainer}>
                                        <img src={mainBook} />
                                    </div>
                                </div>

                                <div className='col l6 m12 s12'>
                                    <section className={style.contentBook}>
                                        <h2 className={style.headingBookIntro}>AMERICAN MADE</h2>
                                        <p className={style.subCatsParagph}>The Heart of A Healer</p>
                                        <p>In an effort to help with the care of her aging mother, Dr. Anderson retired from her professorship and closed her forty-year-old clinical psychological practice in a northern city and returned to live in her hometown on her family’s rural farm in the Mississippi Delta.</p>
                                        <p>Culture shock and struggles to overcome forced her to reflect on her Southern roots and accept America’s ideals and gifts she received from her parents that helped her become a successful person in spite of difficult conditions. Crossing the color line of her youth, her love for helping others, involvement in the women’s struggles for equal pay and black people’s struggles for a decent education, and teaching students to live better lives are contained in the mix.</p>
                                        <p>This memoir shares stories by Dr. Anderson and her youngest son, Steven. His are about the effects of her struggles on her growing family. </p>
                                    </section>

                                    <BookLinks />
                                </div>

                            </div>
                            <div className={row.join(' ')}>

                                <div className='col l6 m12 s12'>
                                    <div className={style.bookImgContainer}>
                                        <img src={secondBook} />
                                    </div>
                                </div>

                                <div className='col l6 m12 s12'>
                                    <section className={style.contentBook}>
                                        <h2 className={style.headingBookIntro}>THE INTERVENTION</h2>
                                        <p className={style.subCatsParagph}>Six Generation of Family Life</p>
                                        <p>Life can be hard on all of us and this highly talented family is no exception. Faced  with situations often beyond their control, they resort to the love and comfort of family and used their talents to make the world a better place. They demonstrate that no matter how heavy the load, it’ll be okay in the end.</p>
                                    </section>

                                    <OtherLinks />
                                </div>

                            </div>

                            <div className={style.commentSection}>
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>

            </Aux>
        );
    }
}

export default aboutTheBook;