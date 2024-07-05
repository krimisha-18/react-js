import React from 'react'
import { useEffect, useState } from 'react'
import './Product.css'
import { OrderList } from './Product.Data'

const Product = () => {
    const [currentIndex,setcurrentIndex] = useState(0);
    
        
    useEffect(()=>{
         setInterval(() => {
            const isLastSlide  = currentIndex === OrderList.length-1;
            const newIndex = isLastSlide?0:currentIndex+1
            setcurrentIndex(newIndex)
        }, 3000);
        
    },[])
  return (
    <>
    <section>
      <div className="container">
          <div className="row justify-content-center">
              {
                  OrderList.map((val,i)=>{
                      return(
                          <div className="col-12 mt-5 col-md-6 col-lg-4">
                  <div className="order-box"style={{backgroundImage:`url(${val.img})`}}>
                      <div className="order-content">
                          <h5>{val.title1} <br></br>{val.title2}</h5>
                          <p>
                              <span className='percentage'>{val.per}</span>
                              <span>{val.p}</span>
                          </p>
                          <div className="order-btn">
                              <a href="">Shop Now</a>
                          </div>
                      </div>
                  </div>
              </div>
                      )
                  })
              }
          </div>
      </div>
    </section>
  </>
  )
}

export default Product