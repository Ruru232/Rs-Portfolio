import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="">
      <main className="min-h-screen flex items-center justify-center ">
        <div className="relative w-full max-w-lg ">
          {/* middle circle */}
          <div className="hidden md:block absolute -top-24 right-10 w-72 h-72 bg-gradient-to-r from-customColor1 to-customColor2 via-customColor3 rounded-full animate-blob filter blur-sm opacity-70 "></div>
          <div className="hidden md:block absolute top-0 -right-4 w-72 h-72  bg-gradient-to-r from-customColor2 to-customColor3 via-customColor1 rounded-full animate-blob animation-delay-2000 filter blur-sm opacity-70 "></div>
          <div className="hidden md:block -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-customColor3 to-customColor1 via-customColor2 rounded-full animate-blob animation-delay-4000 filter blur-sm opacity-70 "></div>
        </div>
        <div className="absolute">
          <div className="lg:text-5xl md:text-4xl text-lg space-y-2 text-center">
            <p className="bg-gradient-to-r from-pink-600 to-yellow-500 bg-clip-text text-transparent ">
              Hello, I'm Rolando Sanchez,
            </p>
            <p>aspiring developer</p>
          </div>
          <div>
            <p className="lg:text-lg md:text-base text-sm mt-5 text-center">
              Former computer technician, looking for a entry level job where i
              can grow as a developer
            </p>
            <div className="mt-5 grid gap-8 items-start justify-center">
              <div className="relative group ">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 "></div>
                <Link href="/Projects/">
                  <button className="relative px-7 py-4 bg-customBlack rounded-lg leading-none flex items-center divide-x divide-gray-600 text-xs md:text-sm h-12 w-72 md:h-14 md:w-[460px]">
                    <span className="pr-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">
                      Browse my &rarr;
                    </span>
                    <span className="flex items-center space-x-5">
                      <span className="pl-6 text-gray-100">
                        Projects, Technologies & more
                      </span>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
