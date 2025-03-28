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
import Ruth from "../assets/images/Ruth.jpg";
import Aisha from "../assets/images/Aisha.jpg";
import Mark from "../assets/images/Mark.jpg";
import Amed from "../assets/images/Amed.jpg";
import Colon from "../assets/images/colon.png";

const testimonials = [
  {
    name: "Jane A.",
    role: "Customer",
    review:
      "EasyShip made my shopping experience so smooth! I got my order in just a few hours—super fast and reliable.",
    image: Jane,
    Rate: Star,
    Question: Colon,
  },
  {
    name: "David K.",
    role: "Vendor",
    review:
      "Since joining EasyShip, my sales have increased significantly! Customers trust the fast deliveries, and I get more repeat buyers.",
    image: David,
    Rate: Star,
    Question: Colon,
  },
  {
    name: "Adebayo O.",
    role: "Customer",
    review:
      "I love how I can track my order. It gives me peace of mind knowing my package will arrive!",
    image: Ade,
    Rate: Star,
    Question: Colon,
  },
  {
    name: "Abdul Q.",
    role: "Customer",
    review:
      "EasyShip made my shopping experience so smooth! I got my order in just a few hours—super fast and reliable.",
    image: Mark,
    Rate: Star,
    Question: Colon,
  },
  {
    name: "Debbie O.",
    role: "Vendor",
    review:
      "Since joining EasyShip, my sales have increased significantly! Customers trust the fast deliveries, and I get more repeat buyers.",
    image: Ruth,
    Rate: Star,
    Question: Colon,
  },
  {
    name: "Sadiq O.",
    role: "Vendor",
    review:
      "I love how I can track my order. It gives me peace of mind knowing my package will arrive!",
    image: Amed,
    Rate: Star,
    Question: Colon,
  },
  {
    name: "Aisha K.",
    role: "Customer",
    review:
      "EasyShip made my shopping experience so smooth! I got my order in just a few hours—super fast and reliable.",
    image: Aisha,
    Rate: Star,
    Question: Colon,
  },
];

const Testimonials = () => {
  return (
    <section className='w-full px-10 py-16'>
      <h2 className='text-[27px] text-[#000] font-bold text-center mb-[33px]'>
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
            <div className='p-6 w-[full] min-h-[192px] bg-white rounded-[30px] shadow-[30px] flex flex-col justify-between'>
              <div className='flex items-center space-x-4'>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='w-[80px] h-[80px] rounded-full object-cover'
                />
                <div className=' space-x-2 text-[linear-gradient(to_right,#0799DF,#2D3594)]  font-bold text-[24px] '>
                  <div className='flex space-x-[13px]'>
                    <h3 className='font-bold text-[18px]'>
                      {testimonial.name}
                    </h3>
                    <p className='text-sm text-blue-600 text-[18px]'>
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
                <img
                  src={testimonial.Question}
                  className='w-[61.27px] h-[49px] '
                />
              </div>
              <p className='mx-5 mt-[26.75px] mb-4 text-[#000]/65 text-[15px]'>
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
