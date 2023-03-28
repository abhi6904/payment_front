import React from 'react'
import Aboutus from './Aboutus'
import Contactus from './Contactus'
import Footer from './Footer'
import Header from './Header'
import Howitworks from './Howitworks'
import Navbar from './Navbar'
import Services from './Services'

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <Howitworks />
    <Aboutus />
    <Services />
    <Contactus />
    <Footer />
    </>
  )
}