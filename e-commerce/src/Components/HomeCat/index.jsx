
import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const HomeCat=()=>{
    
    return(
        <section className="homeCat">
             <div className="container">
                 <h3 className='mb-3 hd'>
                    FEATURED CATEGORIES
                    </h3>        


               <Swiper
                       slidesPerView={10}
                       spaceBetween={8}
                       pagination={{
                         clickable: true,
                       }}
                       slidesPerGroup={3}
                       modules={[Navigation]}
                       className="mySwiper"
                     >
                       <SwiperSlide>


                        <div className="item text-center cursor" style={{background: '#fffceb',}}>
                               <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png 
                               " alt="" />

                               <h6>Red Apple</h6>
                        </div>
                       </SwiperSlide>

                       <SwiperSlide>


                        <div className="item text-center" style={{background: '#fffceb',}}>
                               <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png
                               " alt="" />

                               <h6>Red Apple</h6>
                        </div>
                       </SwiperSlide>

                       <SwiperSlide>


                        <div className="item text-center" style={{background: '#fffceb',}}>
                               <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png
                               " alt="" />

                               <h6>Red Apple</h6>
                        </div>
                       </SwiperSlide>

                       <SwiperSlide>


                        <div className="item text-center" style={{background: '#fffceb',}}>
                               <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png
                               " alt="" />

                               <h6>Red Apple</h6>
                        </div>
                       </SwiperSlide>

                       <SwiperSlide>


                        <div className="item text-center" style={{background: '#fffceb',}}>
                               <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png
                               " alt="" />

                               <h6>Red Apple</h6>
                        </div>
                       </SwiperSlide>
                       <SwiperSlide>


                        <div className="item text-center" style={{background: '#fffceb',}}>
                               <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png
                               " alt="" />

                               <h6>Red Apple</h6>
                        </div>
                       </SwiperSlide>
                       <SwiperSlide>


                        <div className="item text-center" style={{background: '#fffceb',}}>
                               <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png
                               " alt="" />

                               <h6>Red Apple</h6>
                        </div>
                       </SwiperSlide>
                       <SwiperSlide>


                        <div className="item text-center" style={{background: '#fffceb',}}>
                               <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png
                               " alt="" />

                               <h6>Red Apple</h6>
                        </div>
                       </SwiperSlide>
                       <SwiperSlide>


                        <div className="item text-center" style={{background: '#fffceb',}}>
                               <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png
                               " alt="" />

                               <h6>Red Apple</h6>
                        </div>
                       </SwiperSlide>
                       <SwiperSlide>


                        <div className="item text-center" style={{background: '#fffceb',}}>
                               <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png
                               " alt="" />

                               <h6>Red Apple</h6>
                        </div>
                       </SwiperSlide>
                       <SwiperSlide>


                        <div className="item text-center" style={{background: '#fffceb',}}>
                               <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png
                               " alt="" />

                               <h6>Red Apple</h6>
                        </div>
                       </SwiperSlide>


                       </Swiper>
             </div>
         </section>
    )
}

export default HomeCat