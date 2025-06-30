import { Button } from "bootstrap";
import HomeBanner from "../../Components/HomeBanner"
import HomeCat from "../../Components/HomeCat";
import Button1 from '@mui/material/Button'
import banner1 from '../../assets/images/banner1.png';
import banner2 from '../../assets/images/banner2.png';
import banner3 from '../../assets/images/banner3.png';
import banner4 from '../../assets/images/banner4.png';
import newsLetterImg from '../../assets/images/newsLetterImg.png';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import Rating from '@mui/material/Rating';
import { IoMailOutline } from "react-icons/io5";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { AiOutlineFullscreen } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import ProductModal from "../../Components/ProductModal";
const Home= () => {

     var productSliderOptions = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow:true,
    autoplay:true
  };

  return (
   <>
         <HomeBanner/>
         <HomeCat/>
         <section className="homeProducts">
            <div className="container">
                <div className="row">
                     <div className="col-md-3">
                      <div className="sticky">
                            <div className="banner">
                         <img src={banner1} className="cursor w-100"  />
                      </div>

                       <div className="banner2 mt-4">
                         <img src={banner2} className="cursor w-100"  />
                      </div>
                      </div>

                     </div>

                     <div className="col-md-9 productRow">
                         <div className="d-flex justify-content-between align-items-center w-100">
                             <div className="info">
                                       <h3 className="mb-0 hd">
                                         BEST SELLERS
                                       </h3>

                                       <p className="text-gray-light text-sml mb-0">
                                        Do not miss the current offers until the end of December.
                                       </p>
                             </div>
                              <Button1 className="viewAllBtn  ms-4 mt-2">View All <IoIosArrowRoundForward /></Button1>
                             
                         </div>

                        <div className="product_row w-100 mt-4"> 
                           <Swiper
        slidesPerView={4}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className="item-production">
          <div className="imgWrapper">
             <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" className="w-100" />   
              <div className="actions">
                  <Button1>
                       <AiOutlineFullscreen />
                  </Button1>
                    
                  <Button1>
                       <IoIosHeartEmpty />
                  </Button1>
              </div>
          </div>

            <div className="info">
                    <h4>
               All Natural Italian-Style Chicken Meatballs
            </h4>
            <span className="text-success d-block">
               In Stock
            </span>
            <Rating className="mt-2 mb-2"name="read-only" value={4.5} readOnly size="small" precision={0.5}/>

            <div className="d-flex">
                  <span className="oldPrice">
                     $20.00
                  </span>
                  <span className="netPrice text-danger ml-3">
                     $13.50
                  </span>
            </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div className="item-production">
          <div className="imgWrapper">
             <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg" className="w-100" />
              <div className="actions">
                  <Button1>
                       <AiOutlineFullscreen />
                  </Button1>
                    
                  <Button1>
                       <IoIosHeartEmpty />
                  </Button1>
              </div>     
          </div>
           <div className="info">
                    <h4>
              Angie’s Boomchickapop Sweet & Salty Kettle Corn
            </h4>
            <span className="text-success d-block">
               In Stock
            </span>
            <Rating className="mt-2 mb-2"name="read-only" value={4} readOnly size="small" precision={0.5}/>

            <div className="d-flex">
                  <span className="oldPrice">
                     $26.00
                  </span>
                  <span className="netPrice text-danger ml-3">
                     $19.50
                  </span>
            </div>
            </div>
          </div></SwiperSlide>

        <SwiperSlide><div className="item-production">
          <div className="imgWrapper">
             <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg" className="w-100" />  
              <div className="actions">
                  <Button1>
                       <AiOutlineFullscreen />
                  </Button1>
                    
                  <Button1>
                       <IoIosHeartEmpty />
                  </Button1>
              </div>   
          </div>
           <div className="info">
                    <h4>
              Field Roast Chao Cheese Creamy Original
            </h4>
            <span className="text-success d-block">
               In Stock
            </span>
            <Rating className="mt-2 mb-2"name="read-only" value={5} readOnly size="small" precision={0.5}/>

            <div className="d-flex">
                  <span className="oldPrice">
                     $23.00
                  </span>
                  <span className="netPrice text-danger ml-3">
                     $12.0
                  </span>
            </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div className="item-production">
          <div className="imgWrapper">
             <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg" className="w-100" />     
              <div className="actions">
                  <Button1>
                       <AiOutlineFullscreen />
                  </Button1>
                    
                  <Button1>
                       <IoIosHeartEmpty />
                  </Button1>
              </div>
          </div>
           <div className="info">
                    <h4>
              Blue Diamond Almonds Lightly Salted
            </h4>
            <span className="text-success d-block">
               In Stock
            </span>
            <Rating className="mt-2 mb-2"name="read-only" value={4.5} readOnly size="small" precision={0.5}/>

            <div className="d-flex">
                  <span className="oldPrice">
                     $13.00
                  </span>
                  <span className="netPrice text-danger ml-3">
                     $8.50
                  </span>
            </div>
            </div>
          </div></SwiperSlide>
           
           <SwiperSlide><div className="item-production">
          <div className="imgWrapper">
             <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32-346x310.jpg"
             className="w-100" />  
              <div className="actions">
                  <Button1>
                       <AiOutlineFullscreen />
                  </Button1>
                    
                  <Button1>
                       <IoIosHeartEmpty />
                  </Button1>
              </div>   
          </div>
           <div className="info">
                    <h4>
              Nestle Original Coffee-Mate Coffee Creamer
            </h4>
            <span className="text-success d-block">
               In Stock
            </span>
            <Rating className="mt-2 mb-2"name="read-only" value={4} readOnly size="small" precision={0.5}/>

            <div className="d-flex">
                  <span className="oldPrice">
                     $28.00
                  </span>
                  <span className="netPrice text-danger ml-3">
                     $19.50
                  </span>
            </div>
            </div>
          </div></SwiperSlide>
          <SwiperSlide><div className="item-production">
          <div className="imgWrapper">
             <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg" className="w-100" />

              <div className="actions">
                  <Button1>
                       <AiOutlineFullscreen />
                  </Button1>
                    
                  <Button1>
                       <IoIosHeartEmpty />
                  </Button1>
              </div>     
          </div>
           <div className="info">
                    <h4>
               Werther’s Original Caramel Hard Candies
            </h4>
            <span className="text-success d-block">
               In Stock
            </span>
            <Rating className="mt-2 mb-2"name="read-only" value={5} readOnly size="small" precision={0.5}/>

            <div className="d-flex">
                  <span className="oldPrice">
                     $20.00
                  </span>
                  <span className="netPrice text-danger ml-3">
                     $13.50
                  </span>
            </div>
            </div>
          </div></SwiperSlide>
          <SwiperSlide><div className="item-production">
          <div className="imgWrapper">
             <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-7-346x310.jpg" className="w-100" />  

              <div className="actions">
                  <Button1>
                       <AiOutlineFullscreen />
                  </Button1>
                    
                  <Button1>
                       <IoIosHeartEmpty />
                  </Button1>
              </div>   
          </div>
           <div className="info">
                    <h4>
              USDA Choice Angus Stew Meat
            </h4>
            <span className="text-success d-block">
               In Stock
            </span>
            <Rating className="mt-2 mb-2"name="read-only" value={3.5} readOnly size="small" precision={0.5}/>

            <div className="d-flex">
                  <span className="oldPrice">
                     $56.00
                  </span>
                  <span className="netPrice text-danger ml-3">
                     $43.50
                  </span>
            </div>
            </div>
          </div></SwiperSlide>
      </Swiper>

                        </div>
                        <div className="d-flex justify-content-between align-items-center w-100 mt-5">
                             <div className="info">
                                       <h3 className="mb-0 hd">
                                        NEW PRODUCTS
                                       </h3>

                                       <p className="text-gray-light text-sml mb-0">
                                        Do not miss the current offers until the end of December.
                                       </p>
                             </div>
                              <Button1 className="viewAllBtn  ms-4 mt-2">View All <IoIosArrowRoundForward /></Button1>
                             
                         </div>

                        <div className="product_row w-100 mt-4 d-fex"> 
                           <Swiper
        slidesPerView={4}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className="item-production">
          <div className="imgWrapper">
             <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" className="w-100" />   
              <div className="actions">
                  <Button1>
                       <AiOutlineFullscreen />
                  </Button1>
                    
                  <Button1>
                       <IoIosHeartEmpty />
                  </Button1>
              </div>
          </div>

            <div className="info">
                    <h4>
               All Natural Italian-Style Chicken Meatballs
            </h4>
            <span className="text-success d-block">
               In Stock
            </span>
            <Rating className="mt-2 mb-2"name="read-only" value={4.5} readOnly size="small" precision={0.5}/>

            <div className="d-flex">
                  <span className="oldPrice">
                     $20.00
                  </span>
                  <span className="netPrice text-danger ml-3">
                     $13.50
                  </span>
            </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div className="item-production">
          <div className="imgWrapper">
             <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg" className="w-100" />
              <div className="actions">
                  <Button1>
                       <AiOutlineFullscreen />
                  </Button1>
                    
                  <Button1>
                       <IoIosHeartEmpty />
                  </Button1>
              </div>     
          </div>
           <div className="info">
                    <h4>
              Angie’s Boomchickapop Sweet & Salty Kettle Corn
            </h4>
            <span className="text-success d-block">
               In Stock
            </span>
            <Rating className="mt-2 mb-2"name="read-only" value={4} readOnly size="small" precision={0.5}/>

            <div className="d-flex">
                  <span className="oldPrice">
                     $26.00
                  </span>
                  <span className="netPrice text-danger ml-3">
                     $19.50
                  </span>
            </div>
            </div>
          </div></SwiperSlide>

        <SwiperSlide><div className="item-production">
          <div className="imgWrapper">
             <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg" className="w-100" />  
              <div className="actions">
                  <Button1>
                       <AiOutlineFullscreen />
                  </Button1>
                    
                  <Button1>
                       <IoIosHeartEmpty />
                  </Button1>
              </div>   
          </div>
           <div className="info">
                    <h4>
              Field Roast Chao Cheese Creamy Original
            </h4>
            <span className="text-success d-block">
               In Stock
            </span>
            <Rating className="mt-2 mb-2"name="read-only" value={5} readOnly size="small" precision={0.5}/>

            <div className="d-flex">
                  <span className="oldPrice">
                     $23.00
                  </span>
                  <span className="netPrice text-danger ml-3">
                     $12.0
                  </span>
            </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div className="item-production">
          <div className="imgWrapper">
             <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg" className="w-100" />     
              <div className="actions">
                  <Button1>
                       <AiOutlineFullscreen />
                  </Button1>
                    
                  <Button1>
                       <IoIosHeartEmpty />
                  </Button1>
              </div>
          </div>
           <div className="info">
                    <h4>
              Blue Diamond Almonds Lightly Salted
            </h4>
            <span className="text-success d-block">
               In Stock
            </span>
            <Rating className="mt-2 mb-2"name="read-only" value={4.5} readOnly size="small" precision={0.5}/>

            <div className="d-flex">
                  <span className="oldPrice">
                     $13.00
                  </span>
                  <span className="netPrice text-danger ml-3">
                     $8.50
                  </span>
            </div>
            </div>
          </div></SwiperSlide>
           
           <SwiperSlide><div className="item-production">
          <div className="imgWrapper">
             <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32-346x310.jpg"
             className="w-100" />  
              <div className="actions">
                  <Button1>
                       <AiOutlineFullscreen />
                  </Button1>
                    
                  <Button1>
                       <IoIosHeartEmpty />
                  </Button1>
              </div>   
          </div>
           <div className="info">
                    <h4>
              Nestle Original Coffee-Mate Coffee Creamer
            </h4>
            <span className="text-success d-block">
               In Stock
            </span>
            <Rating className="mt-2 mb-2"name="read-only" value={4} readOnly size="small" precision={0.5}/>

            <div className="d-flex">
                  <span className="oldPrice">
                     $28.00
                  </span>
                  <span className="netPrice text-danger ml-3">
                     $19.50
                  </span>
            </div>
            </div>
          </div></SwiperSlide>
          <SwiperSlide><div className="item-production">
          <div className="imgWrapper">
             <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg" className="w-100" />

              <div className="actions">
                  <Button1>
                       <AiOutlineFullscreen />
                  </Button1>
                    
                  <Button1>
                       <IoIosHeartEmpty />
                  </Button1>
              </div>     
          </div>
           <div className="info">
                    <h4>
               Werther’s Original Caramel Hard Candies
            </h4>
            <span className="text-success d-block">
               In Stock
            </span>
            <Rating className="mt-2 mb-2"name="read-only" value={5} readOnly size="small" precision={0.5}/>

            <div className="d-flex">
                  <span className="oldPrice">
                     $20.00
                  </span>
                  <span className="netPrice text-danger ml-3">
                     $13.50
                  </span>
            </div>
            </div>
          </div></SwiperSlide>
          <SwiperSlide><div className="item-production">
          <div className="imgWrapper">
             <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-7-346x310.jpg" className="w-100" />  

              <div className="actions">
                  <Button1>
                       <AiOutlineFullscreen />
                  </Button1>
                    
                  <Button1>
                       <IoIosHeartEmpty />
                  </Button1>
              </div>   
          </div>
           <div className="info">
                    <h4>
              USDA Choice Angus Stew Meat
            </h4>
            <span className="text-success d-block">
               In Stock
            </span>
            <Rating className="mt-2 mb-2"name="read-only" value={3.5} readOnly size="small" precision={0.5}/>

            <div className="d-flex">
                  <span className="oldPrice">
                     $56.00
                  </span>
                  <span className="netPrice text-danger ml-3">
                     $43.50
                  </span>
            </div>
            </div>
          </div>
          </SwiperSlide>
      </Swiper>

       

                 <div className="row mt-4 mb-5 gx-3">
        <div className="col-12 col-md-6">
              <div className="banner-wrapper">
           <img src={banner3} className="cursor img-fluid" />
           </div>
            </div>
       <div className="col-12 col-md-6">
            <div className="banner-wrapper">
                <img src={banner4} className="cursor img-fluid" />
          </div>
       </div>
        </div>

                        
                  </div>
                       
                     </div>
                </div>
            </div>
         </section>



         <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
           <div className="container">
                   <div className="row">
                     <div className="col-md-6">
                         <p className="text-white mb-1">
                           $15 discount for your first order 
                         </p>

                         <h3 className="text-white">
                            Join our newsletter and get...
                         </h3>

                         <p className="text-light">
                           Join our email subscription  now to get updates on <br /> promotions and coupons.
                         </p>

                         <form action="">
                             <IoMailOutline />
                           <input type="text" placeholder="Your email address" />
                           <Button1>Subscribe</Button1>
                         </form>
                     </div>

                     <div className="col-md-6">
                          <img src=
                          {newsLetterImg}alt="" />
                     </div>
                   </div>
           </div>
         </section>

       
         
   </>
  )
}

export default Home;