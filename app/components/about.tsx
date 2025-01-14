import Image from 'next/image';
import Navbar from './Navbar';

export default function About() {
  return (
    <div>
      <div className="flex flex-wrap justify-center mx-[5%] 2xl:mx-[25%] mt-28 p-5">
        <div className="flex justify-center flex-col md:flex-row">
          <div className="mt-0 md:mt-2 w-[250px]">
            <Image
              src="/img/IMG_2259.jpg"
              width={1080}
              height={300}
              alt="Profile Picture"
              className="rounded-lg"
              priority
            />
          </div>
          <div className="w-64 md:w-80 lg:w-3/4 mt-0 lg:mt-24  p-5 space-y-2">
            <h2>Introduction:</h2>
            <p>
              Hi, I'm Rolando Sanchez, a passionate and driven aspiring Junior
              Software Engineer from Las Piñas City, Philippines. With a solid
              foundation in computer technology and front-end development, I've
              transitioned from a hands-on role as a computer technician to
              pursuing my dream of crafting intuitive and engaging web
              applications.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mx-[5%] 2xl:mx-[25%] p-5">
        <div className="mt-5">
          <h2 className="text-2xl font-bold mb-5">Work Experience:</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-semibold">
                Web Developer Front-End Intern at Codebility
              </p>
              <p className="text-sm text-gray-600">
                December 2, 2024 - Present
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
      </div>
    </div>
  );
}
