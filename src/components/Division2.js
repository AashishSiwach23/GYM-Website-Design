import React from 'react'
import imagei from '../components/GYM/5.png'
import './Division2.css'
const custumStyleimg={
    width:"100%",
    }
export default function Division() {
  return (
    <section className='section-section'>
        <div className="sec2-text">
            <div className='sec2-text-1'>
       <span className='sec2-text-11'>
           <u> Start Today</u>
            </span>
            </div>
            <div className="">
        <p className='sec2-text-2'>"Train hard, stay focused, and make your sweat worth it. The only bad workout is the one you didn't do."</p>
            </div>
        </div>
        <img src={imagei} alt=".." style={custumStyleimg}/>
    </section>
    
  )
}
