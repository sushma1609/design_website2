import React from 'react'
 const Testimonials = () => {
    return (
        <div>
           <section id="testimonials">
        <h2 class ="testimonial-title">What our Customers Say</h2>
        <div class="testimonial-container container">
            <div class="testimonial-box">
                <div class="star-rating">
                    <span className="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>

                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quas vero sunt, molestias corrupti fugit.</p>
                <div class="customer-detail">
                    <div class="customer-photo">
                        <img src="./img/male-photo1.jpg"/>
                    </div>
                    <p class="customer-name">John Doe</p>
                </div>
            </div>
            <div class="testimonial-box">
                <div class="star-rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>

                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quas vero sunt, molestias corrupti fugit.</p>
                <div class="customer-detail">
                    <div class="customer-photo">
                        <img src="./img/male-photo2 (1).jpg"/>
                    </div>
                    <p class="customer-name">Jay Doe</p>
                </div>
            </div>
            <div class="testimonial-box">
                <div class="star-rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>

                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quas vero sunt, molestias corrupti fugit.</p>
                <div class="customer-detail">
                    <div class="customer-photo">
                        <img src="./img/male-photo3.jpg"/>
                    </div>
                    <p class="customer-name">Jolly Doe</p>
                </div>
            </div>
        </div>
    </section> 
        </div>
    )
}
export default Testimonials;