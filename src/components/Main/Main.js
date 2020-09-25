import React from "react"
import { Link } from "gatsby"
import Aux from "../../hoc/Auxiliary"
import style from "./Main.module.scss"
import BookImage from '../../asset/Books/main_book.png'
import AuthorImage from '../../asset/author/main_author.png'

const Main = () => {

    const col = 'col l6 m12 s12';
    const sectionWrapper = [col, style.authorBio];
    const bookCont = [col, style.bookContMobile];

    return (
        <Aux>
            <main className={style.mainSection}>
                <div className="container" id={style.mobileContainers}>
                    <div className="row">
                        <section className={col}>
                            <div className={style.boxstylusContainer}>
                                <section className={style.sectioncontentColumn}>

                                    <p className={style.tagline}>
                                        about the book <span className={style.taglineLinear}></span>
                                    </p>

                                    <h1 className={style.headingFrontline}>AMERICAN MADE</h1>
                                    <span className={style.spanTagLeters}><p><span className={style.spanFlex}>The Heart of a Healer</span></p></span>

                                    <p className={style.subcontent}>
                                        In an effort to help with the care of her aging mother, 
                                        Dr. Anderson retired from her professorship and closed her 
                                        forty-year-old clinical psychological practice in a northern 
                                        city and returned to live in her hometown on her family’s rural 
                                        farm in the Mississippi Delta.
									</p>

                                    <div className={style.buttonLayouts}>
                                        <Link to="/about-the-book">Read More</Link>
                                    </div>
                                </section>
                            </div>
                        </section>

                        <section className={bookCont.join(' ')}>
                            <div className={style.bookimageContainer} id={style.bookImageContOff}>
                                <img alt="books" src={BookImage} />
                            </div>
                        </section>

                    </div>
                </div>
            </main>

            <main className={style.lowerMain}>
                <div className="container" id={style.mobileContainers}>
                    <div className='row'>
                        <section className={col}>
                            <div className={style.authorImagecontainer}>
                                <img src={AuthorImage} />
                            </div>
                        </section>

                        <section className={sectionWrapper.join(' ')}>

                            <div className={style.sectioncontentColumn}>
                                <p className={style.tagline}>
                                    about the author<span className={style.taglineLinear}></span>
                                </p>
                                <h1 className={style.headingFrontline}>
                                    Dr. Rachell N.<span className={style.spanTagLetters}>Anderson</span>
                                </h1>

                                <p className={style.subcontent}>
                                    Dr. Anderson ran a private clinical practice in Springfield, 
                                    Illinois from 1974 until she retired in July, 2008. In the practice, 
                                    she provided Individual, Marriage and Family Therapy and Psychological 
                                    Education programs to people with mental illnesses and emotional pain. 
                                    She is credentialed by the National Register of Health Service Providers in Psychology.
								</p>

                                <div className={style.buttonLayouts}>
                                    <Link to="/about-the-author">Read Full Bio</Link>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </Aux>
    )
}

export default Main;
