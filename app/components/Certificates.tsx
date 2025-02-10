'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';

const certificateImages = [
  {
    src: '/img/certificates/370234943_638829084847279_4535006700634153758_n.jpg',
    title: 'Certificate of Academic Excellence',
  },
  {
    src: '/img/certificates/CERTIFICATE FOR TRAINEES - ROLANDO_2-1.png',
    title: 'Certificate of Completion (Codebility)',
  },
  {
    src: '/img/certificates/Certificate of Completion - Rolando Sanchez-1.png',
    title: 'Certificate of Completion (Highly Succeed Inc.)',
  },
  {
    src: '/img/certificates/10_Sanchez, Rolando L._2-1.png',
    title: 'Certificate of Completion (Village 88)',
  },
  { src: '/img/certificates/image7.jpg', title: 'College Diploma (BSCS)' },
  { src: '/img/certificates/image1.jpg', title: 'College Diploma (CSS)' },
  { src: '/img/certificates/image6.jpg', title: 'College Diploma (CSS)' },
];

function Certificates() {
  return (
    <div className="relative flex flex-col">
      <div className="swiper-pagination text-white"></div>

      <div className="relative w-full max-w-80 md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
        <Swiper
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          pagination={{ type: 'fraction', el: '.swiper-pagination' }}
          modules={[EffectFlip, Pagination, Navigation]}
          grabCursor={true}
          slidesPerView={1}
          loop={true}
          spaceBetween={30}
          effect={'flip'}
          className="w-full"
        >
          {certificateImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="group relative w-full h-[400px] md:h-[500px] lg:h-[600px] perspective">
                <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                  <div className="absolute w-full h-full flex flex-col text-white p-4 text-center transform rotate-y-180 backface-hidden rounded-lg">
                    <h2 className="text-2xl font-bold">{src.title}</h2>
                    <Image
                      src={src.src}
                      alt={`Certificate ${index}`}
                      width={500}
                      height={700}
                      className="w-full h-full object-fill rounded-lg"
                      {...(index === 0
                        ? { priority: true }
                        : { loading: 'lazy' })}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-prev absolute -top-3 left-12 md:left-44 lg:left-64 xl:left-80 2xl:left-96 transform -translate-y-1/2 cursor-pointer z-10 text-white p-2 rounded-md">
          ← Prev
        </div>
        <div className="custom-next absolute -top-3 right-12 md:right-44 lg:right-64 xl:right-80 2xl:right-96 transform -translate-y-1/2 cursor-pointer z-10 text-white p-2 rounded-md">
          Next →
        </div>
      </div>
    </div>
  );
}

export default Certificates;
