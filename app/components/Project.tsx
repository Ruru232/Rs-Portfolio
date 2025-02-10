'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';
import { AiOutlineGithub } from 'react-icons/ai';
import ArrowUpRightIcon from './ArrowUpRightIcon';

interface Project {
  name: string;
  src: string;
  title: string;
  description: string;
  url: string;
  github: string;
}

const Project = ({ projects }: { projects: Project[] }) => {
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
          spaceBetween={30}
          loop={true}
          effect={'flip'}
          className="w-full"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="group relative w-full h-[400px] md:h-[500px] lg:h-[600px] perspective">
                <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                  <div className="absolute w-full h-full flex flex-col text-white p-4 text-center transform rotate-y-180 backface-hidden rounded-lg">
                    <h2 className="text-lg font-bold">{project.title}</h2>
                    <Image
                      src={project.src}
                      alt={project.name}
                      width={1080}
                      height={699}
                      className="w-full h-full object-cover rounded-lg"
                      {...(index === 0
                        ? { priority: true }
                        : { loading: 'lazy' })}
                    />
                  </div>
                </div>
                <p className="text-sm md:text-base p-4">
                  {project.description}
                </p>
                <div className=" space-x-4 flex justify-center items-center">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:underline flex justify-center items-center border border-blue-500 bg-customBlack rounded-lg w-44 p-2.5"
                  >
                    Preview <ArrowUpRightIcon className="inline" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:underline flex justify-center items-center border border-blue-500 bg-customBlack rounded-lg w-44 p-2"
                  >
                    GitHub <AiOutlineGithub size={25} className="inline mb-1" />
                  </a>
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
};

export default Project;
