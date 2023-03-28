import React from 'react'
import { useState } from 'react'
import howToUse from './API/howTOUse'

export default function Aboutus() {

    const [aboutData, setAboutData] = useState(howToUse)
    return (
        <>
            <section className='common-section our-services'>
                <div className='container mb-5'>
                    <div className='row'>
                        <div className="col-12 col-lg-5 text-center our-services-leftside-img">
                            <img src='https://www.shutterstock.com/image-photo/successful-data-center-specialist-using-600w-2147805393.jpg' alt='aboutusimg' />
                        </div>
                        {/* 1sction right side data */}
                        <div className="col-12 col-lg-7 our-services-list">
                            <h3 className="mini-title">-- AVAILABLE GOOGLE AND IOS APP STORE ONLY?</h3>
                            <h1 className="mimi-heading">HOW TO USE THE APP?</h1>
                            {
                                aboutData.map((curElem) => {
                                    const { id, title, info } = curElem;
                                    return (
                                        <div className="row our-services-info" key={id}>
                                            <div className="col-1 our-services-number">{id}</div>
                                            <div className="col-10 our-services-data">
                                                <h2>{title}</h2>
                                                <p className="main-hero-para">{info}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            <button className="btn-style btn-style-border">Learn more</button>
                        </div>
                    </div>
                </div>
            </section>


            {/* 2ndsction of abbout us */}


            <section className='common-section our-services our-services-rightside'>
                <div className='container mb-5'>
                    <div className='row'>
                        
                        {/* 1sction left side data */}
                        <div className="col-12 col-lg-7 our-services-rightside-content">
                        <h3 className="mini-title">--SUPPORT IN ANY LANGUAGES</h3>
                            <h1 className="mimi-heading">World class support is <br /> available 24/7</h1>
                            {
                                aboutData.map((curElem) => {
                                    const { id, title, info } = curElem;
                                    return (
                                        <div className="row our-services-info" key={id}>
                                            <div className="col-1 our-services-number">{id}</div>
                                            <div className="col-10 our-services-data">
                                                <h2>{title}</h2>
                                                <p className="main-hero-para">{info}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            <button className="btn-style btn-style-border">Learn more</button>
                        </div>
                        <div className="col-12 col-lg-5 our-services-rightside-img">
                            <img src='https://media.istockphoto.com/photos/entrepreneur-calling-on-phone-checking-laptop-in-the-night-picture-id1303761381?k=20&m=1303761381&s=612x612&w=0&h=SxnU6r2N3cP8_FPOeStCudnZtb1oABhtjEs05d5BE58=' alt='aboutusimg' />
                        </div>
                    </div>
                </div>
            </section>





        </>
    )
}
