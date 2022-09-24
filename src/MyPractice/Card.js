import React from 'react'
import JsonData from './data.json'
import './marvel.css'
function JsonDataDisplay(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <div className='j-body'>
                    <div className='image1'>
                        <img src={info.img1} className='cardImage'></img>
                    </div>
                    <div className='body1'>
                      <p className='title1'>{info.title1}</p>
                      <button className='button1'>{info.button1}</button>
                    </div>
                </div>
            )
        }
    )

    return(
        <div>
            <h3>Characters</h3>
            <div className='card1'>
                <div className='main-body'>
                    {DisplayData}
                </div>
            </div>
        </div>
    )
}

export default JsonDataDisplay;