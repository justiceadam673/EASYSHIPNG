import React from "react";
import Facebook from "../assets/images/Facebook.png";
import Instagram from "../assets/images/Insta.png";
import Twitter from "../assets/images/X.png";

const Footer = () => {
  return (
    <main className='bg-white/70 max-sm:flex-col max-sm:space-y-10 max-md:px-[30px] max-md:space-x-5 max-lg:space-x-[30px] w-full flex space-x-[155px] px-[97px] py-[44px] text-black h-auto'>
      <section className='w-full '>
        <div className='flex text-[32px] font-bold items-center space-x-[10px]'>
          <img src='/Easyship 1.png' alt='' srcset='' />
          <h1 className='max-md:text-[25px]'>EasyShip</h1>
        </div>
        <div className='flex items-center space-x-[23px] mt-[38px]'>
          <img src={Facebook} alt='Facebook' srcSet='' />
          <img src={Instagram} alt='Instagram' srcSet='' />
          <img src={Twitter} alt='X' srcSet='' />
        </div>
        <div className='space-y-1 mt-[18px] '>
          <h1 className='leading-[35px] text-black/70'>
            Subscribe to our Newsletter
          </h1>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email Address'
            className='border-1 px-[20px] py-[5px] w-[318px] border-[#000]/20'
          />
        </div>
      </section>
      <section className='w-full'>
        <div>
          <ul className='text-[18px] text-black/70 font-light space-y-[23px] max-md:text-[15px]'>
            <li>
              <a
                href=''
                className='hover:underline hover:decoration-dotted hover:decoration-[#000]/50'
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href=''
                className='hover:underline hover:decoration-dotted hover:decoration-[#000]/50'
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href=''
                className='hover:underline hover:decoration-dotted hover:decoration-[#000]/50'
              >
                Support
              </a>
            </li>
            <li>
              <a
                href=''
                className='hover:underline hover:decoration-dotted hover:decoration-[#000]/50'
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href=''
                className='hover:underline hover:decoration-dotted hover:decoration-[#000]/50'
              >
                Locations
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className='w-full'>
        <ul className='text-[18px] text-black/70 font-light space-y-[24px] max-md:text-[15px] '>
          <li>
            <a
              href=''
              className='hover:underline hover:decoration-dotted hover:decoration-[#000]/50'
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href=''
              className='hover:underline hover:decoration-dotted hover:decoration-[#000]/50'
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href=''
              className='hover:underline hover:decoration-dotted hover:decoration-[#000]/50'
            >
              Cookies Policy
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Footer;
