import "./Slider.css";
const Slider = () => {
  return (
    <>
      {/* slider start */}
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="banner-1">
            <div className="w-50">
                <h3 className="fs-4 fw-bolder">
                  <span className="organic fw-bolder fs-4 text-green pe-2 ">100% </span>Organic Vegetables
                </h3>
                <h1 className="fs-58 fw-bolder">The best way to <br></br>stuff your wallet. </h1>
                <p className="lorem pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. amet <br></br>reiciendis beatae consectetur .</p>
                <button className=" px-3 py-2 bg-green border-0 text-white rounded-2">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="banner-2 position-relative">
              <img src="./img/4.png" className="top-0 end-50 opacity-50 pt-3 position-absolute swing" alt="" />
              <div className="w-50">
                <h3 className="fs-4 fw-bolder">
                  <span className="organic fw-bolder fs-4 text-green pe-2">100% </span>Organic Fruits
                </h3>
                <h1 className="fs-58 fw-bolder">Explore fresh & <br></br>juicy fruits.</h1>
                <p className="lorem pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. amet <br></br>reiciendis beatae consectetur .</p>
                <button className="bg-green px-3 py-2 border-0 text-white rounded-2">Shop Now</button>
                <img src="img/5.png" className="start-0 position-absolute swing" />
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* slider end */}
    </>
  )
}

export default Slider

