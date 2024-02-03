
import './App.css';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

function App() {
  return (
    <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='relative'>
          <img className='h-96 w-full blur-sm' src="https://tech4gamers.com/wp-content/uploads/2022/06/need-for-speed-most-wanted-2-featured.jpg" alt="" />
          <img className='absolute left-0 top-0 right-0 h-96 m-auto' src="https://tech4gamers.com/wp-content/uploads/2022/06/need-for-speed-most-wanted-2-featured.jpg" alt="" />
        </SwiperSlide>

        <SwiperSlide className='relative'>
          <img className='h-96 w-full blur-sm' src="https://i.redd.it/gi89slfpd63b1.jpg" alt="" />
          <img className='absolute left-0 top-0 right-0 h-96 m-auto' src="https://i.redd.it/gi89slfpd63b1.jpg" alt="" />
        </SwiperSlide>

        <SwiperSlide className='relative'>
          <img className='h-96 w-full blur-sm' src="https://cdn-www.bluestacks.com/bs-images/4755_NFS-Mobile-Game_Release-Announcement.jpg" alt="" />
          <img className='absolute left-0 top-0 right-0 h-96 m-auto' src="https://cdn-www.bluestacks.com/bs-images/4755_NFS-Mobile-Game_Release-Announcement.jpg" alt="" />
        </SwiperSlide>
        
        <SwiperSlide className='relative'>
          <img className='h-96 w-full blur-sm' src="https://img2.tapimg.net/post/etag/FlS47sWuwmQ-vsRH80RA_XR0hol8.webp?imageMogr2/thumbnail/720x9999%3E/quality/80/format/jpg/interlace/1/ignore-error/1" alt="" />
          <img className='absolute left-0 top-0 right-0 h-96 m-auto' src="https://img2.tapimg.net/post/etag/FlS47sWuwmQ-vsRH80RA_XR0hol8.webp?imageMogr2/thumbnail/720x9999%3E/quality/80/format/jpg/interlace/1/ignore-error/1" alt="" />
        </SwiperSlide>
        
      </Swiper>
  );
}

export default App;
