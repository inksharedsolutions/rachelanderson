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
                                    Dr. Anderson ran a private clinical practice in Springfield, Illinois from 1974 until she retired in July, 2008. In the practice, she provided Individual, Marriage and Family Therapy and Psychological Education programs to people with mental illnesses and emotional pain. She is credentialed by the National Register of Health Service Providers in Psychology.
									</p>
                                    <p className={style.paramsBio}>
                                    For twenty years, Dr. Anderson taught clinical courses to graduate students in the Department of Human Services (HMS) at the University of Illinois at Springfield (UIS). She spearheaded the  re-development and accreditation of the HMS program and served as its chair from 1999 until 2006. Before joining the faculty at UIS, Dr. Anderson taught at several community colleges in Rockford and Springfield, Illinois and worked as a juvenile probation counselor in Oklahoma, an intake and placement counselor in East Saint Louis, Illinois and a school counselor in an adult education center.
                                    </p>
                                    <p className={style.paramsBio}>
                                    She received her doctorate of psychology in Clinical Psychology from the Adler School of Professional Psychology in Chicago, Master’s degrees from Northern Illinois University and from the University of Illinois at Springfield, and a Bachelor’s degree from Philander Smith College in Little Rock, Arkansas.
                                    </p>
                                    <p className={style.paramsBio}>
                                    Throughout her career, she lectured widely and served as vice president and later chair of the publications committee for the North American Society of Adlerian Psychology. She founded the Central Illinois Society of Adlerian Psychology, served as Co-President of the Central Illinois Psychological Society. She is a member of the American Association of Black Psychologists, the National Organization of Human Services and the American Psychological Association and North American Society of Adlerian Psychology.
                                    </p>
                                    <p className={style.paramsBio}>
                                    Dr. Anderson has received many awards for learning, teaching, healing and serving in her field. She was honored with awards from The Committee For Children for 25 years of dedicated services on the Family Stress Consultation Team. She was selected by her peers to received the University's Pearson Faculty Award for sustained excellence in Teaching in 2006. This honor carried a substantial monetary award of which Dr. Anderson used a portion to donate books “Responsible Children in Today’s world” to 50 daycare centers in her home state of Mississippi. Who’s Who Among America’s Teachers, and Who’s Who Among Outstanding Americans and Who Among Outstanding Executives are among the many.
                                    </p>
                                    <p className={style.paramsBio}>
                                    Dr. Anderson has authored twelve books. Her most recent publications are: "The Intervention: Six Generations of Family Life", "Before Our Eyes," a chronicle of the healing advantages of watching psychotherapy between a client and a therapist in an open forum, "The Legacy Continues: Writing Healing Stories,"“Run Turkeys, Run: Fifty Years of Celebrating Family” A Memoir.
                                    </p>
                                    <p className={style.paramsBio}>
                                    Since retirement, Dr. Anderson has: served on the boards of Trustees for Northwest Mississippi Community College and The Mississippi Writers Guild; volunteered clinical hours weekly at Church Health in Memphis; taught the Writer’s Workshop for the Mississippi Writers Guild at the Tunica Museum; Co led “The Poetry Connection, a poetry writing group at the Unitarian Church in Memphis and served as president of the Alliance group at her church. She continues to study, write and publish.  
                                    </p>
                                    <p className={style.paramsBio}>
                                    Dr. Anderson grew up in Tunica, Mississippi. She has a very large extended family in Tunica County. She is the mother of three grown children, and has four grand children.
                                    </p>


                                    <p className={style.paramsBio}>
                                        <span>Adress: 1015 Emma Williams Rd. Tunica, MS 38676</span>
                                    </p>


                                    <div className={style.authorContainerName}>
                                        <h2 className={style.authorName}>Dr. Rachell N. Anderson</h2>
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