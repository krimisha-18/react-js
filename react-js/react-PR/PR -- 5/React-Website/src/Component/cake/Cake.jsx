import React from 'react'
import './Cake.css'
import { ProductList,proImg } from './Cake-Data'
import { useState,useEffect } from 'react'

const Cake = () => {
    const [cate,setcate] = useState(proImg)
    
    
    useEffect(()=>{
        let initialFilteredCards = []
        cate.map((val,index)=>{
            if(index<=1)
            {
                    initialFilteredCards.push(val)
            }
        })
        setcate(initialFilteredCards)
    },[])
    
    const fliterpro = (name) => {
        let data = proImg.filter((val)=>{
            return val.cate === name;
        })
        setcate(data)
    }

    return(
        <>
          <div className="container" style={{marginTop:"20px"}}>
            <div className="row" >
                <div className="col-4">
                   {
                    ProductList.map((val)=>{
                        return(
                        <div className="pro-box mt-2" onClick={() => fliterpro(val.name)}>
                            <h3 >{val.name}</h3>
                            <span>{val.items}</span>
                        </div>
                        )
                    })
                   }
                </div>
                <div className="col-8">
                    <div className="row">
                        {
                            cate.map((val)=>{
                                return(
                        <div className="col-6"style={{position:"relative"}}>
                            <h3 className='per1'>{val.percentage}<br></br>OFF</h3>
                            <div className="pro-img" style={{
                                background : `url('${val.img}')`,
                                height:"500px",
                                borderRadius:"5px",
                                position:"relative",
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"flex-end"
                            }}>
                                
                                 <div className='pro-text d-flex align-items-center flex-column mb-5'>
                                    <h3>{val.name}</h3>
                                    <button>
                                        <a href="" className='shop-btn-pro'>Shop Now</a>
                                    </button>
                                </div>
                            </div>
                           
                        </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}
  


export default Cake