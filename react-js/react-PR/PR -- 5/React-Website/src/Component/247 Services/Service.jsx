import { RiRedPacketLine } from "react-icons/ri";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaTruck } from "react-icons/fa";
import { RiExchangeDollarLine } from "react-icons/ri";
import './Service.css'
const Service  = () => {
    return(
        <>
          <section style={{marginTop:"60px"}}>
             <div className="container">
                <div className="row">
                    <div className="col-6 mt-5 col-lg-3">
                        <div className="service-box">
                       <span>
                       <RiRedPacketLine />
                       </span>
                       <h4>Product Packing</h4>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>
                    </div>
                    <div className="col-6 mt-5 col-lg-3">
                        <div className="service-box">
                       <span>
                       <RiCustomerService2Line />
                       </span>
                       <h4>24X7 Support</h4>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>
                    </div>
                    <div className="col-6 mt-5 col-lg-3">
                        <div className="service-box">
                       <span>
                       <FaTruck />
                       </span>
                       <h4>Delivery in 5 Days</h4>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>
                    </div>
                    <div className="col-6 mt-5 col-lg-3">
                        <div className="service-box">
                       <span>
                       <RiExchangeDollarLine />
                       </span>
                       <h4>Paymeny Secure</h4>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>
                    </div>
                </div>
             </div>
          </section>
        </>
    )
}
export default Service