import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Jane from "../assets/images/Jane.png";
import David from "../assets/images/David.png";
import Ade from "../assets/images/Ade.png";
import Star from "../assets/images/material-symbols_star.png";

const testimonials = [
  {
    name: "Jane A.",
    role: "Customer",
    review:
      "EasyShip made my shopping experience so smooth! I got my order in just a few hours—super fast and reliable.",
    image: Jane,
    Rate: Star,
  },
  {
    name: "David K.",
    role: "Vendor",
    review:
      "Since joining EasyShip, my sales have increased significantly! Customers trust the fast deliveries, and I get more repeat buyers.",
    image: David,
    Rate: Star,
  },
  {
    name: "Adebayo O.",
    role: "Customer",
    review:
      "I love how I can track my order. It gives me peace of mind knowing my package will arrive!",
    image: Ade,
    Rate: Star,
  },
  {
    name: "Kimmy Q.",
    role: "Customer",
    review:
      "EasyShip made my shopping experience so smooth! I got my order in just a few hours—super fast and reliable.",
    image: David,
    Rate: Star,
  },
  {
    name: "Debbie O.",
    role: "Vendor",
    review:
      "Since joining EasyShip, my sales have increased significantly! Customers trust the fast deliveries, and I get more repeat buyers.",
    image: Jane,
    Rate: Star,
  },
  {
    name: "Mike O.",
    role: "Vendor",
    review:
      "I love how I can track my order. It gives me peace of mind knowing my package will arrive!",
    image: Ade,
    Rate: Star,
  },
  {
    name: "Blessing K.",
    role: "Customer",
    review:
      "EasyShip made my shopping experience so smooth! I got my order in just a few hours—super fast and reliable.",
    image: Jane,
    Rate: Star,
  },
];

const Testimonials = () => {
  return (
    <section className='w-full px-10 py-16'>
      <h2 className='text-[35px] text-[#2B2C4F] font-bold text-center mb-[33px]'>
        What people think about us
      </h2>
      <Swiper
        modules={[Pagination, Navigation, Autoplay, Mousewheel]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        speed={1000}
        allowTouchMove={true}
        grabCursor={true}
        mousewheel={{ forceToAxis: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 2.5, spaceBetween: 40 },
        }}
        className='max-w-[1340px] mx-auto'
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className='p-6 w-full min-h-[250px] bg-white rounded-[30px] shadow-[30px] flex flex-col justify-between'>
              <div className='flex items-center space-x-4'>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='w-[80px] h-[80px] rounded-full object-cover'
                />
                <div className=' space-x-2 text-[linear-gradient(to_right,#0799DF,#2D3594)]  font-bold text-[24px] '>
                  <div className='flex space-x-[13px]'>
                    <h3 className='font-bold'>{testimonial.name}</h3>
                    <p className='text-sm text-blue-600 text-[24px]'>
                      {testimonial.role}
                    </p>
                  </div>
                  <div className='flex space-x-3'>
                    <img src={testimonial.Rate} />
                    <img src={testimonial.Rate} />
                    <img src={testimonial.Rate} />
                    <img src={testimonial.Rate} />
                    <img src={testimonial.Rate} />
                  </div>
                </div>
              </div>
              <p className='mx-5 mb-4 text-[#2B2C4F]/65'>
                {testimonial.review}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
