import React from 'react'

function Slider() {
    return (
        <>
            {/* <!-- SLider --> */}
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1" ></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://www.fbise.edu.pk/image/main2.jpg" class="d-block w-100" alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="slider-heading"> </h5>
                            <p class="slider-body"> <br /> <a href=""></a></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.fbise.edu.pk/image/main5.jpg" class="d-block w-100" alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="slider-heading"></h5>
                            <p class="slider-body"></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.fbise.edu.pk/image/main4.jpg" class="d-block w-100" alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="slider-heading"></h5>
                            <p class="slider-body"></p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" >
                    <div class="slider_btn">

                        <span class="carousel-control-prev-icon" aria-hidden="true" ></span>
                        <span class="visually-hidden" >Previous</span>
                    </div>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <div class="slider_btn">

                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </div>

                </button>
            </div>

        </>
    )
}

export default Slider
