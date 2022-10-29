import React, { useEffect, useState } from 'react'
import { getContentData } from '../services/api'
import '../styles/MediaStyle.css'
import '../styles/ContentStyle.css'

const Content = () => {
    const [contentData, setContentData] = useState({})
    const getData = async () => {
        const allData = await getContentData();
        setContentData(allData);
        console.log(contentData);
      }
    useEffect(() => {
      getData();
    }, [])
    
  return (
    <div className='contentContainer'>
        <div className='content'>
            <div className='contentImage'>
                <img className='mainImage' src={contentData.ImageUrl} alt="" />
                <img className='imageIcon' src={contentData.BrandIconUrl} alt="" />
                <div className='remainingTime'>{contentData.RemainingText}</div>
                <img className='backArrow' src="/back-arrow.png" alt="" />
            </div>
            <div className='contentText'>
                <h2 dangerouslySetInnerHTML={{__html: contentData.Title}}></h2>
                <div dangerouslySetInnerHTML={{__html: contentData.Description}}></div>
            </div>
            <div className='codeButtonSection'>
                <button className='codeButton'>Kod Gir</button>
           </div>
        </div>
        <div className='contentProduct'>
            <h4>{contentData.DetailItemTitle}</h4>
            <div className='products'>
                {contentData.PromotionDetailItems?.map((data, index) => (
                    <div key={index} className='productCard'>
                        <img className='productImage' src={data.ImageUrl} alt="" />
                        <p className='productTitle'>{data.Title}</p>
                        <p className='productDescription'>{data.Description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Content