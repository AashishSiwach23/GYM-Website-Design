import React from 'react'
import './Activity.js'

export default function Activity() {
  return (
    <div>

      <section id="features" class="container-fluid ">
        <div class="row ">
          <div class="feature-box col-lg-4 outter-activity">
            <i class="fas fa-check-circle fa-4x icon "></i>
            <h3 class="feature-title">Easy to use.</h3>
            <p style={{color:'#521933'}}><b>Welcome to our state-of-the-art gym, where fitness meets ease! We pride ourselves
              on providing a user-friendly environment that makes your fitness journey enjoyable
              and hassle-free.</b></p></div>
          <div class="feature-box col-lg-4 ">
            <i class="fas fa-bullseye fa-4x icon "></i>
            <h3 class="feature-title">What we are:</h3>
            <p style={{color:'#521933'}}> <b> At our gym, we believe in the power of technology to enhance your fitness experience.
              With our user-friendly mobile app, you can conveniently schedule classes, track your progress,
              and receive personalized workout recommendations. Staying connected with our community and achieving
              your fitness goals has never been easier.</b></p></div>
          <div class="feature-box col-lg-4 outter-activity">
            <i class="fas fa-heart fa-4x icon "></i>
            <h3 class="feature-title">
              Guaranteed to work.</h3>
            <p style={{color:'#521933'}}><b>Experience guaranteed results at our gym! Our expert trainers will create personalized plans,
              utilizing top-notch facilities and equipment to help you achieve your fitness goals efficiently.
              Join our supportive community and enjoy regular progress assessments, nutritional guidance, and a
              satisfaction guarantee. Take the first step towards a fitter, healthier you today!</b></p></div>
        </div>

      </section>
    </div>
  )
}
