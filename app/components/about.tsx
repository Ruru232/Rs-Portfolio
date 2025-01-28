import Image from 'next/image';
import Certificates from './Certificates';

export default function About() {
  return (
    <div>
      <div className="flex flex-wrap justify-center mx-[5%] 2xl:mx-[25%] mt-28 p-1 ">
        <div className="flex justify-center flex-col md:flex-row">
          <div className="mt-0 md:mt-10 w-[250px] h-[250px] rounded-full overflow-hidden">
            <Image
              src="/img/IMG_2259.jpg"
              width={250}
              height={250}
              alt="Profile Picture"
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="w-64 md:w-80 lg:w-3/4 mt-0 lg:mt-16 p-5 space-y-2">
            <h2>Introduction:</h2>
            <p>
              Hi, I&apos;m Rolando Sanchez, a passionate and driven aspiring
              Junior Software Engineer from Las Piñas City, Philippines. With a
              solid foundation in computer technology and front-end development,
              I&apos;ve transitioned from a hands-on role as a computer
              technician to pursuing my dream of crafting intuitive and engaging
              web applications.
            </p>
            <div className="relative inline-block">
              <div className="absolute inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <a href="/" download>
                <button className="relative px-7 py-4 bg-customBlack rounded-lg leading-none">
                  Download my CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mx-[5%] 2xl:mx-[25%] p-5">
        <div className="flex justify-center flex-col md:flex-row">
          <div className="mt-5 ml-5 ">
            <h2 className="text-2xl font-bold mb-5">Work Experience:</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold">
                  Web Developer Front-End Intern/Trainee at Codebility
                </p>
                <p className="text-sm text-gray-600">
                  July 16, 2024 - December 2, 2024
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold">Freelance Computer Technician</p>
                <p className="text-sm text-gray-600">
                  May 2, 2024 - July 16, 2024
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold">
                  I.T Technician at Hapson Technology
                </p>
                <p className="text-sm text-gray-600">
                  February 05, 2024 - May 1, 2024
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold">
                  Laptop Technician at Reer Global Philippines
                </p>
                <p className="text-sm text-gray-600">
                  May 22, 2023 - August 22, 2023
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold">
                  Web Developer Front-End Intern at Highly Succeed Inc
                </p>
                <p className="text-sm text-gray-600">
                  March 14, 2022 - April 22, 2022
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 ml-5 ">
            <h2 className="text-2xl font-bold mb-5">Education:</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold">BS in Computer Science</p>
                <p className="text-sm text-gray-600">
                  2020-2024 at Pamantasan ng Lungsod ng Muntinlupa
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold">
                  Associate in Computer Technology
                </p>
                <p className="text-sm text-gray-600">
                  2018-2020 at Pamantasan ng Lungsod ng Muntinlupa
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold">
                  Computer System, Programming and Network Services
                </p>
                <p className="text-sm text-gray-600">
                  2016-2018 at Dr. Felimon C. Aguilar Information Technology
                  Training Institute
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Certificates />
    </div>
  );
}
