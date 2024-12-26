import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import image
import banner1 from '../assets/assets/banner1.jpg'
import banner2 from '../assets/assets/banner2.jpg'
import banner3 from '../assets/assets/banner3.jpg'
import Slide from "./Slide";


const Banner = () => {
  return (
    <div className="container z-10 py-10 px-5">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide><Slide img={banner1} title="Fight Hunger, Spread Love" text="Leftovers can be lifesavers! Share your surplus food and bring hope to those in need this season"></Slide></SwiperSlide>
        <SwiperSlide><Slide img={banner2} title="Give the Gift of Hope" text="Join us in our mission to fight hunger. Your small contribution can make a big difference in someone's life"></Slide></SwiperSlide>
        <SwiperSlide><Slide img={banner3}  title="Warm Hearts, Full Plates" text="This winter, share the warmth by sharing your food. Donate today and help us ensure no one sleeps hungry."></Slide></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
