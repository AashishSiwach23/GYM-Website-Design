import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from "../components/images/img1.jpg";
import img2 from "../components/images/img2.jpg";
import img3 from "../components/images/img3.jpg";

import "./Slider.css";

export default function Slider() {
  return (
    <>
      <Carousel className="main-slide">
        <div>
          <section id="testimonials" class="color">
            <div id={`testimonials-carousel" class="carousel slide data-ride${false}`}>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <p class="testimonial-text">What truly sets this gym apart is its incredible variety of classes. Whether you're
                    into dance, martial arts, or strength training, they've got it all covered! The instructors are incredibly
                    knowledgeable, passionate, and create an uplifting atmosphere that makes working out a joy.</p>
                  <img class="testimonials-image image-class" src={img1} alt="dog-profile" />
                  <em>Review from <u> Delhi branch</u></em>
                </div>

                <div class="carousel-item">
                  <p class="testimonial-text">
                  </p>
                  <img class="testimonial-image image-class" src={img2} alt="lady-profile" />
                  <em></em>
                </div>
              </div>

            </div>

          </section>
        </div>
        <div>
          <section id="testimonials" class="color">
            <div id={`testimonials-carousel" class="carousel slide data-ride${false}`}>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <p class="testimonial-text">Wow, this gym has exceeded my expectations in every way possible! 
                  From the moment I stepped in, I felt welcomed by the warm and friendly staff. They took the time to 
                  understand my fitness goals and provided personalized recommendations for my workout routine.</p>
                  <img class="testimonials-image image-class" src={img3} alt="dog-profile" />
                  <em>Review from <u> Chandigarh branch</u></em>
                </div>

              </div>
            </div>
          </section>
        </div>
        <div id='div3'>
          < section id="testimonials" class="color">
            <div id={`testimonials-carousel" class="carousel slide data-ride${false}`}>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <p class="testimonial-text">What sets this gym apart is its diverse selection of classes. 
                  From high-intensity interval training to yoga and spin classes, there's something for everyone.
                   The instructors are highly skilled and motivate you to push your limits. I've personally seen 
                   significant improvements in my fitness level since joining these classes.</p>
                  <img class="testimonials-image" src={img3} alt="dog-profile" />
                  <em>Review from <u> Noida branch</u></em>
                </div>

              </div>
            </div>

          </section>
        </div>

      </Carousel>

    </>
  );
}
