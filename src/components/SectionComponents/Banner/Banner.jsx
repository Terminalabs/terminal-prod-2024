import { useEffect, useRef } from "react";
import wavingHand from '@/assets/banner/noto_waving-hand.png'
import { Button } from '@/components/ui/button';
import { MdArrowOutward } from "react-icons/md";
import Container from '../Container/Container';
import scrollDown from '@/assets/banner/Rectangle.png'
import { FaArrowDown } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-scroll";
import videoBg from "@/assets/banner/hero.mp4"


const Banner = () => {
  const vidRef = useRef();

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.muted = false;
    }
  }, []);

  return (
    <div className="heroBg overflow-hidden relative -mt-1" id="banner">
      <div className="overflow-hidden w-full max-h-[70vh] md:max-h-[90dvh] flex justify-center items-center relative">
        {/* video */}
        <div className="w-full h-dvh -mt-1">
          <video
            className="w-full h-full object-cover"
            muted
            autoPlay
            loop
            src={videoBg}
          ></video>
        </div>

        <div className="absolute w-full h-full">
          <Container>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-x-8 md:py-[185px]'>
              <div className='md:w-1/2 mt-20 mb-14 md:mb-0 md:mt-0'>
                <p className='text-[15px] md:text-[16px] text-[#3CBDF4] font-switzer uppercase mb-2' data-aos="fade-down" data-aos-duration="1000">Web3 Visionary Success Journey</p>
                <div>
                  <div className='flex items-center'>
                    <p className='text-4xl md:text-5xl xl:text-6xl font-bold font-switzer text-transparent bg-clip-text bg-gradient-to-r from-[#A84EFF] to-[#7815F8] mr-6 py-3' data-aos="fade-up" data-aos-duration="1400">Web3 Mastery</p>
                    <img src={wavingHand} alt="wavingHand" className='w-10' />
                  </div>
                  <p className='text-4xl md:text-5xl xl:text-6xl text-white font-bold font-switzer mt-1' data-aos="fade-down" data-aos-duration="1600">with Terminal Labs</p>
                </div>

                <p className='text-[17px] text-[#B2A6B9] md:w-[70%] xl:w-[75%] my-7' data-aos="fade-up" data-aos-duration="1800">Terminal Labs is at the forefront of shaping visionary success in the Web3 landscape.</p>
                <Link to="customer" smooth={true} offset={-190} duration={600} className="flex justify-center items-center rounded-[8px] group cursor-pointer px-5 md:px-7 py-3 md:py-3 w-[175px] border bg-[#750FD9] border-[#a74fff4f] text-[#fff]" data-aos="fade-down" data-aos-duration="2000">
                  <span className='text-[15px] font-amulya'>See Partners</span>
                  <MdArrowOutward className='text-[17px] ml-2 group-hover:-mt-2 duration-300' />
                </Link>
              </div>
            </div>

            {/* Scroll Down */}
            <Link className="absolute bottom-0 right-14" to="about" smooth={true} offset={-130} duration={600}>
              <div className="hidden md:block">
                <div className='flex justify-center cursor-pointer relative'>
                  <img src={scrollDown} alt="Scroll Down" className="w-[40px] absolute bottom-10" />
                  <div className="text-[20px] absolute -mt-[100px]">
                    <BsThreeDotsVertical className="text-[#9b37ffd0] mb-[1px]" />
                    <FaArrowDown className="text-[#9b37ffd0]" />
                  </div>
                </div>
              </div>
            </Link>
          </Container>

          {/* Shadow */}
          {/* <div className="w-full h-20 bg-gradient-to-b from-[#04020560] via-[#110a15d8] to-[#0f0913] absolute bg-opacity-80 -bottom-3 blur-[5px]" /> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
