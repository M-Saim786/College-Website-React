import React from 'react'

function Services() {
  return (
    <>
       {/* <!-- Service --> */}
  <div id="service"><h2>Services</h2></div>
  <br /><br />
  {/* <!-- Services --> */}
  <div class="container text-center" id="services">
    <div class="row">
      <div class="col col-lg-3 col-md-3 col-sm-6 col-12">
        <div class="cards">
          <div class="service">
            <i class="fa fa-file-text document"></i>
          </div>
          <div class="card-body">
            <h5 class="card-title"><a href="#" class="Services">Download PDF's</a></h5>
          </div>
        </div>
      </div>

      <div class="col col-lg-3 col-md-3 col-sm-6 col-12">
        <div class="cards">
          <div class="service">
            <i class="fa-solid fa-stamp document"></i>
          </div>
          <div class="card-body">
            <h5 class="card-title"><a href="#" class="Services">Certificate</a></h5>
          </div>
        </div>
      </div>

      <div class="col col-lg-3 col-md-3 col-sm-6 col-12">
        <div class="cards">
          <div class="service">
            <i class="fa-solid fa-graduation-cap  document"></i>
          </div>
          <div class="card-body">
            <h5 class="card-title"><a href="#" class="Services">ScholarShips</a></h5>
          </div>
        </div>
      </div>
      <div class="col col-lg-3 col-md-3 col-sm-6 col-12">
        <div class="cards">
          <div class="service">
            <i class="fa-solid fa-landmark-dome document"></i>
          </div>
          <div class="card-body">
            <h5 class="card-title"><a href="#" class="Services">Board Annoucements</a></h5>
          </div>
        </div>
      </div>
    </div>
  </div>
 
    </>
  )
}

export default Services
