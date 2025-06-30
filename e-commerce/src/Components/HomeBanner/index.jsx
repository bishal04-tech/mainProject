import React from 'react'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 const HomeBanner = () => {

    var settings = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow:true,
    autoplay:true
  };
  return (
    
        <div className='homeBannerSection'>
          <Slider {...settings}>
      <div className='item'>

         <img src="https://cmsimages.shoppersstop.com/Allen_solly_web_0f74d2da57/Allen_solly_web_0f74d2da57.png"className="w-100" />
      </div>
       

       <div className='item'>

         <img src="https://cmsimages.shoppersstop.com/Lancome_30th_May_25_web_1d9062ac71/Lancome_30th_May_25_web_1d9062ac71.jpg"className="w-100" />
      </div>
        
       
       <div className='item'>

         <img src="https://cmsimages.shoppersstop.com/CC_web_aa47d111a4/CC_web_aa47d111a4.png"className="w-100" />
      </div>
       

       <div className='item'>

         <img src="https://assets.tatacliq.com/medias/sys_master/images/65585340645406.jpg"className="w-100" />
      </div>


    </Slider>

    </div>
   
  )
}


export default HomeBanner;