import React, { Component, Route } from 'react'
import Aux from '../hoc/Auxiliary'
import style from '../styles/pages.module.scss'
import Header from '../components/header'
import Footer from '../components/Footer/Footer'
import authorImage from '../asset/author/main_author.png'

const abouttheAuthor = (props) => {
    return (
        <Aux>
            <div className={style.flexWrapper}>
                <Header currLocation={props.location} />
                <main className={style.wrapperMain}>
                    <div className='container'>
                        <div className='row' id={style.flexWrapper}>
                            <div className='col l6 m12 s12'>
                                <div className={style.authorContainerImage}>
                                    <img src={authorImage} />
                                </div>
                            </div>

                            <div className='col l6 m12 s12'>
                                <section className={style.contentSectionBiography}>

                                    <p className={style.paramsBio}>
                                        Having grown up on the family's cotton farm in the Mississippi Delta, 
                                        Dr. Anderson spent 50 years learning, teaching and healing in the field 
                                        of Clinical Psychology in Illinois. When she returned to the farm after 
                                        retirement to help care for her aging mother, she continued to write and 
                                        help others to do so. In addition, she serves on a number of boards, 
                                        volunteers clinical hours at the Church Health Center in Memphis and write 
                                        Family Matters Articles for a number of publications. The Intervention is her 12th book.
										</p>

                                    <p className={style.paramsBio}>
                                        <span>Adress: 1015 Emma Williams Rd. Tunica, MS 38676</span>
                                    </p>


                                    <div className={style.authorContainerName}>
                                        <h2 className={style.authorName}>Dr. Rachel N. Anderson</h2>
                                        <p className="sub-cats-ff-paragraph"><span className={style.spanFx}>Author</span> | <span className={style.spanFx}>Writer</span></p>
                                    </div>

                                </section>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </Aux>
    );
}

export default abouttheAuthor;