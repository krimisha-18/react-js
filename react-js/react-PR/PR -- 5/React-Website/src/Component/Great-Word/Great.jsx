import { CgOverflow } from 'react-icons/cg';
import './Great.css'
import { CiStar } from "react-icons/ci";
const  People = () => {
    const textTitle = {
        fontFamily :  "Manrope, sans-serif",
        fontSize : "32px",
        fontWeight :"bold",
        color : "#2b2b2d"
    }
    return(
        <>
            <div className="container"style={{marginTop:"120px"}}>
                <div className="row">
                    <div className="col-12 d-flex align-items-center text-center flex-column">
                        <h2 style={textTitle}>Great Words From People</h2>
                        <p style={{fontSize: "14px", lineHeight: "22px",color:"#7a7a7a"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br></br> incididunt ut labore lacus vel facilisis.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4"style={{marginTop:"70px"}}>
                            <div className="people-box">
                                <div className="people-img">
                                    <img src="../../img/p-1.jpg" alt="" />
                                </div>
                                <div className="people-content">
                                    <span>Co Founder</span>
                                    <h4>Stephen Smith</h4>
                                    <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel
                                            facilisis.”
                                        </p>
                                        <div className="people-star">
                                        <CiStar style={{Color:"#f5885f",fontSize:"20px",}}/>
                                        <CiStar style={{Color:"#f5885f",fontSize:"20px",}}/>
                                        <CiStar style={{Color:"#f5885f",fontSize:"20px",}}/>
                                        <CiStar style={{Color:"#f5885f",fontSize:"20px",}}/>
                                        <CiStar style={{Color:"#f5885f",fontSize:"20px",}}/>
                                        </div>
                                </div>
                            </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4"style={{marginTop:"70px"}}>
                            <div className="people-box">
                                <div className="people-img">
                                    <img src="../../img/p-2.jpg" alt="" />
                                </div>
                                <div className="people-content">
                                    <span>Manager</span>
                                    <h4>Lorem Robinson</h4>
                                    <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel
                                            facilisis.”
                                        </p>
                                        <div className="people-star">
                                        <CiStar style={{Color:"#f5885f",fontSize:"20px",}}/>
                                        <CiStar style={{Color:"#f5885f",fontSize:"20px",}}/>
                                        <CiStar style={{Color:"#f5885f",fontSize:"20px",}}/>
                                        <CiStar style={{Color:"#f5885f",fontSize:"20px",}}/>
                                        <CiStar style={{Color:"#f5885f",fontSize:"20px",}}/>
                                        </div>
                                </div>
                            </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4"style={{marginTop:"70px"}}>
                            <div className="people-box">
                                <div className="people-img">
                                    <img src="../../img/p-3.jpg" alt="" />
                                </div>
                                <div className="people-content">
                                    <span>Team Leader</span>
                                    <h4>Saddika Alard</h4>
                                    <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel
                                            facilisis.”
                                        </p>
                                        <div className="people-star">
                                        <CiStar style={{Color:"#f5885f",fontSize:"20px",}}/>
                                        <CiStar style={{Color:"#f5885f",fontSize:"20px",}}/>
                                        <CiStar style={{Color:"#f5885f",fontSize:"20px",}}/>
                                        <CiStar style={{Color:"#f5885f",fontSize:"20px",}}/>
                                        <CiStar style={{Color:"#f5885f",fontSize:"20px",}}/>
                                        </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default People