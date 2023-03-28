import React from 'react'

export default function Header() {
  return (
    <>
    <header>
        <section className='container main-hero-container'>
            <div className="row">
                <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-itms-start order-lg-first order-last">
                    <h1 className="display-2">Online Payment Made <br/> Easy For You.</h1>
                    <p className='main-hero-para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae et earum exercitationem magnam, consequatur velit voluptas tempore cumque praesentium! Atque assumenda quia soluta culpa dolorem</p>
                    <h3>Get early access for you</h3>   
                    <div className="input-group mt-3">
                        <input type="text" className='rounded-pill w-75 me-3 p-2 form-control-text'
                        placeholder="Enter your Email" />
                        <div className="input-group-button">Get it now</div>
                    </div>
                </div>
                {/* main headr right side */}
                <div className='col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images order-md-first order-sm-first'>
                    <img src='https://www.shutterstock.com/image-photo/young-woman-typing-on-smartphone-600w-1916600276.jpg' alt="heroimg" className='imag-fluid' />
                    <img src='https://www.shutterstock.com/image-photo/technology-business-concept-man-using-600w-390360028.jpg' alt="heroimg" className='imag-fluid main-herosectionimg2' />
                </div>
            </div>
        </section>
    </header>
    </>
  )
}
