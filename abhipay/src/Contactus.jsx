import React, { useState } from 'react'

export default function contactus() {
    const [formData, setFormdata] = useState();
    const handleInputChange = (e) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData) {
            alert("Please fill data...");
        } else{
            const { firstName, lastName, phone, email, address, message } = formData;
            const res = fetch(
                "https://abhipay-faridabad-default-rtdb.firebaseio.com/user.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ firstName, lastName, phone, email, address, message }),
                }
            );
            alert("Data stored");
        }
      };
    return (
        <div className="contactus-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto">
                        <div className="row">
                            <div className="contactus-leftside col-12 col-lg-5">
                                <h1 className="main-heading fw-bold">Connect With Our <br /> Sales Team</h1>
                                <p className="main-hero-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum delectus accusantium velit ratione ipsam recusandae.</p>
                                <figure>
                                    <img src="https://images.unsplash.com/photo-1499914485622-a88fac536970?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className='img-fluid' />
                                </figure>
                            </div>

                            {/* right side contact form */}

                            <div className="contact-rightside col-12 col-lg-7">
                                <form method='POST' onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-12 col-lg-6 contact-input-feild">
                                            <input type="text" name="firstName" id="" className='form-control' placeholder='First Name' onChange={handleInputChange} />
                                        </div>
                                        <div className="col-12 col-lg-6 contact-input-feild">
                                            <input type="text" name="lastName" id="" className='form-control' placeholder='Last Name' onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-lg-6 contact-input-feild">
                                            <input type="text" name="phone" id="" className='form-control' placeholder='Phone Number' onChange={handleInputChange} />
                                        </div>
                                        <div className="col-12 col-lg-6 contact-input-feild">
                                            <input type="text" name="email" id="" className='form-control' placeholder='Email id' onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <input type="text" name="address" id="" className='form-control contact-input-feild' placeholder='Add Address' onChange={handleInputChange} />
                                        </div>
                                        <div className="col-12">
                                            <input type="text" name="message" id="" className='form-control' placeholder='Enter Your Message' onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="form-check form-checkbox-style">
                                        <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
                                        <label className="form-check-label main-hero-para">
                                            I agree that the Abhipay may contact me at the email address or phone numberr above
                                        </label>
                                    </div>
                                    <button type='submit' className='btn btn-style w-100'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
