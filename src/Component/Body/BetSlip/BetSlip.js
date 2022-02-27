import React, {useEffect, useState} from 'react'
import {priceData, betData} from './BetData'

const BetSlip = () => {
    const [items, setItems] = useState(betData);
   
    const filterItems = (category)=>{
        const newItem = betData.filter((item)=>item.category === category);
        setItems(newItem)
    }
    useEffect(()=>{
        const active = betData.filter((val)=>val.category==="active");
        setItems(active)
    }, [])
  return (
    <div className="overview bet_slip">
        <div className="price bet_category">
            {priceData.map((val, ind)=>{
            return (
                <div className="price_box_content" style={{borderLeft: val.color}} key={ind}>
                <div className="border">
                        <p className="description">{val.desc}</p>
                        <p className="name" style={{borderBottom: val.color}}>{val.name}</p>
                        <p className="box_content_price">${val.price}</p>
                </div>
                </div>
            )
            })}
        </div>
        <div className="bet_slip_content">
            <div className="activate_button">
                <li onClick={()=>filterItems("active")} value="active">Active</li>
                <li onClick={()=>filterItems("inactive")} value="inactive">In Active</li>
                <li onClick={()=>filterItems("history")} value="history">History</li>
            </div>
            <div className="data">
                {items.map((val, ind)=>{
                    return(
                        <>
                            <div className="bet_slip" key={ind}>
                                <div className="bet_slip_active">
                                    <input type="radio"/>{val.category}
                                    <p>#Soccer</p>
                                </div>
                                <div className="event">
                                    <p>{val.team1}<span>VS</span>{val.team2}</p>
                                    <p className="pool_size">Pool Size</p>
                                    <p className="pool_size_price">${val.poolSize}</p>
                                </div>
                                <div className="bet_slip_content_detail">
                                    <div className="bet_slip_details">
                                        <p>{val.team1Percent}% {val.team1}</p>
                                        <p>{val.team2Percent}% {val.team2}</p>
                                        <p>{val.draw}% Draw</p>
                                    </div>
                                    <div className="bet_slip_btn">
                                        <button>{val.btn===null ? null : val.btn}</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}            
            </div>
        </div>
  </div>
  )
}

export default BetSlip