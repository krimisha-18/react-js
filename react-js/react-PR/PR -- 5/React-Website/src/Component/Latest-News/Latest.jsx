import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import "./Latest.css"
const Latest = () => {
    const textTitle = {
        fontFamily :  "Manrope, sans-serif",
        fontSize : "32px",
        fontWeight :"bold",
        color : "#2b2b2d"
    }
  return (
    <>
    <div className="container"style={{marginTop:"120px"}}>
            <div className="row">
                <div className="col-12 d-flex align-items-center text-center flex-column">
                    <h2 style={textTitle}>Latest News</h2>
                    <p style={{fontSize: "14px", lineHeight: "22px",color:"#7a7a7a"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br></br> incididunt ut labore lacus vel facilisis.</p>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 mt-5 col-lg-4">
                    <div className="testi-box">
                        <div className="box-content-testi">
                            <span>By Admin | Snacks</span>
                            <h5>Urna pretium elit mauris cursus at elit Vestibulum.</h5>
                            <a href="">Read More <span><FaArrowRightLong /></span></a>
                        </div>
                        <div className="box-image-testi">
                            <img src="../../img/test-1.jpg"className="w-100" alt="" />
                            <div className="date-testi-box">
                                <span>10 <code>Oct</code></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 mt-5 col-lg-4">
                    <div className="testi-box">
                        <div className="box-content-testi">
                            <span>By Admin | Food</span>
                            <h5>Urna pretium elit mauris cursus at elit Vestibulum.</h5>
                            <a href="">Read More <span><FaArrowRightLong /></span></a>
                        </div>
                        <div className="box-image-testi">
                            <img src="../../img/test-2.jpg"className="w-100" alt="" />
                            <div className="date-testi-box">
                                <span>9<code>Sep</code></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 mt-5 col-lg-4">
                    <div className="testi-box">
                        <div className="box-content-testi">
                            <span>By Admin | Snacks</span>
                            <h5>Urna pretium elit mauris cursus at elit Vestibulum.</h5>
                            <a href="">Read More <span><FaArrowRightLong /></span></a>
                        </div>
                        <div className="box-image-testi">
                            <img src="../../img/test-3.jpg"className="w-100" alt="" />
                            <div className="date-testi-box">
                                <span>12<code>Oct</code></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
  )
}

export default Latest