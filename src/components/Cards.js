import React from 'react'
import "./Cards.css"
const customStyle={
    width: "15rem",
    display:"flex",
    flex:"wrap",
    gap:"5px"}
export default function Cards(props) {
  return (
    
<div className='pricing'>
  <div class="row">
   <div class="pricing-column col-lg-4 col-sm-12 col-md-6 ">
    <div className="card card-sizing" style={customStyle}>
        <div class="card-body card-body-styling ">
          <h2 class="price-text">{props.value}</h2>
          <p>{props.Cardstext}</p>
          <button class={`btn btn-lg btn-block btn-${props.buttonColor}`} type="button" >{props.text1}</button>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}
