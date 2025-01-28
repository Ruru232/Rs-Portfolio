import Image from 'next/image';
import Link from 'next/link';

export default function Project() {
  const projects = [
    {
      name: 'project1',
      src: '/img/project1.png',
      title: 'Portfolio Landing Page',
      description:
        'This is a portfolio landing page showcasing various projects and skills. It serves as a personal website to highlight professional achievements and experiences.',
      url: '/',
      github: 'https://github.com/Ruru232/Rs-Portfolio',
    },
    {
      name: 'project2',
      src: '/img/project2.png',
      title: 'The Simple Black Jack Game',
      description:
        'This is a Black Jack game built using modern web technologies. It provides an interactive way to play the classic card game online. The game features user-friendly interface.',
      url: 'https://second-project-dusky.vercel.app/',
      github: 'https://github.com/Ruru232/second-project',
    },
    {
      name: 'project3',
      src: '/img/project3.png',
      title: 'E-commerce Website (Fake Store API)',
      description:
        'This is an e-commerce website designed to facilitate online shopping. It features product listings, a shopping cart, and a checkout process.',
      url: 'https://fourth-project-iota.vercel.app/',
      github: 'https://github.com/Ruru232/fourth-project',
    },
    {
      name: 'project4',
      src: '/img/project4.png',
      title: 'Deadpool and Wolverine Website',
      description:
        'This is a website dedicated to Deadpool and Wolverine. It includes information about the characters, their stories, and related media content.',
      url: 'https://codebility-third-project.vercel.app/',
      github: 'https://github.com/jebsonubaldo/codebility-third-project',
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap mx-[5%] 2xl:mx-[25%] mt-28 p-5">
        <div className="flex justify-center w-full mb-10">
          <h1 className="text-base md:text-2xl">Projects</h1>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-1 bg-gradient-to-tr from-borderColor2 to-borderColor3 via-borderColor2 rounded-lg"
            >
              <div className="bg-customBlack p-2 h-full">
                <div className="flex justify-center items-center py-8">
                  <h2 className="text-base md:text-2xl">{project.title}</h2>
                </div>
                <Image
                  src={project.src}
                  alt={project.name}
                  width={1080}
                  height={699}
                  priority
                />
                <div className="flex justify-center items-center p-2">
                  <p className="text-sm">{project.description}</p>
                </div>
                <div className="py-5 flex flex-col sm:flex-row justify-center items-center gap-4 ">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <Link
                      href={project.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <button className="relative px-7 py-4 bg-customBlack rounded-lg leading-none ">
                        Live preview
                      </button>
                    </Link>
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <Link
                      href={project.github}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <button className="relative px-7 py-4 bg-customBlack rounded-lg leading-none ">
                        Check on GitHub
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
