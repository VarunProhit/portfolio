import React from 'react'
import Profile from './Profile/Profile'
import Footer from './footer/Footer'
import Header from './header/Header'
import './Home.css'
export default function Home() {
    return (
        <div className='home-container'>
        <Header></Header>
        <Profile></Profile>
        <Footer></Footer>
            
        </div>
    )
}
