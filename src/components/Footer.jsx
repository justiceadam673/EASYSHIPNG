import React from "react";
import Facebook from "../assets/images/Facebook.png";
import Instagram from "../assets/images/Insta.png";
import Twitter from "../assets/images/X.png";

const Footer = () => {
  return (
    <main className='bg-[#424242] w-full flex space-x-[155px] px-[97px] py-[44px] text-[#fff] h-auto'>
      <section>
        <div className='flex text-[32px] font-bold items-center space-x-[10px]'>
          <img src='/Easyship 1.png' alt='' srcset='' />
          <h1>EasyShip</h1>
        </div>
        <div className='flex items-center space-x-[23px] mt-[38px]'>
          <img src={Facebook} alt='Facebook' srcSet='' />
          <img src={Instagram} alt='Instagram' srcSet='' />
          <img src={Twitter} alt='X' srcSet='' />
        </div>
      </section>
      <section>
        <div>
          <h2 className='text-[24px] font-bold mb-[32px]'>About EasyShip</h2>
          <ul className='text-[24px] text-[#fff]/65 font-light space-y-[23px]'>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>Contact us</a>
            </li>
            <li>
              <a href=''>Help desk</a>
            </li>
            <li>
              <a href=''>Partners</a>
            </li>
            <li>
              <a href=''>FAQs</a>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className='text-[24px] font-bold mb-[29px]'>Product</h2>
        <ul className='text-[24px] text-[#fff]/65 font-light space-y-[24px]'>
          <li>
            <a href=''>Testimonials</a>
          </li>
          <li>
            <a href=''>How EasyShip works</a>
          </li>
          <li>
            <a href=''>Blog</a>
          </li>
          <li>
            <a href=''>Service</a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Footer;
