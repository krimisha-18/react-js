import './Counter.css'
const Counter = () => {
    return(
        <>
            <div className="container-fluid" style={{marginTop:"100px"}}    >
                <div className="row">
                    <div className="col-12">
                        <div className="banner-counter">
                            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                                <div className="counter-box">
                                    <span className='d-flex align-items-center'>
                                        <span className='per-12'>35%</span>
                                        <p>Off</p>
                                    </span>
                                    <h4>Great deal on organic food.</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br></br> do maecenas accumsan
                                    lacus
                                    vel facilisis. </p>
                                    <div className="counter-inner-box">
                                        <h4>
                                            <span>217</span>
                                            <p>Days</p>
                                        </h4>
                                        :
                                        <h4>
                                            <span>15</span>
                                            <p>Hrs</p>
                                        </h4>
                                        :
                                        <h4>
                                            <span>37</span>
                                            <p>Min</p>
                                        </h4>
                                        :
                                        <h4>
                                            <span>19</span>
                                            <p>sec</p>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Counter