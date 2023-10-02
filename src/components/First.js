import React from 'react'
import "./first.css"
import img from"../components/GYM/Fitness.png"
export default function First() {
  return (
    <div className="first-sec">
    <div class="row">
    <div class="col-lg-6 div-margin">
      <h1 class="big-heading">Make movement a part of your daily life with mini workouts and easy exercises</h1>
      <button type="button" class="btn btn-dark btn-lg  download-btn"> <i class="fab fa-apple"></i> Download</button>
      <button type="button" class="btn btn-outline-light btn-lg  download-btn"> <i class="fab fa-google-play"></i> Download</button>
    </div>
    <div class="col-lg-6 div-margin">
      <img class="title-image" src={img} alt="iphone-mockup"/>
    </div>
  </div>
    </div>
  )
}
