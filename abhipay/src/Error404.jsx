import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Error404() {
  return (
    <>
    <div id='notfound'>
        <div className="notfound">
            <div className=" col-12 notfound-404">
                <h1>404</h1>
            </div>
            <h2>WE ARE SORRY, PAGE NOT FOUND!</h2>
            <p className='main-hero-para'>THE PAGE YOU ARE LOOKING MIGHT HAVE BEEN REMOVED HAD ITS
                NAME
                CHANGED OR ITS TEMPORARILY UNAVAILABLE</p>
                <NavLink to="/" className="btn btn-style">HOMEPAGE</NavLink>
        </div>
    </div>
    </>
  )
}
