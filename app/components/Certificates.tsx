import Image from 'next/image';

const certificateImages = [
  '/img/certificates/370234943_638829084847279_4535006700634153758_n.jpg',
  '/img/certificates/CERTIFICATE FOR TRAINEES - ROLANDO_2-1.png',
  '/img/certificates/Certificate of Completion - Rolando Sanchez-1.png',
  '/img/certificates/10_Sanchez, Rolando L._2-1.png',
  '/img/certificates/image7.jpg',
  '/img/certificates/image1.jpg',
  '/img/certificates/image6.jpg',
];

function Certificates() {
  return (
    <div>
      <div className="flex flex-wrap justify-center mx-[5%] 2xl:mx-[25%] mt-20 p-5">
        <h2 className="text-2xl mb-10">Certificates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificateImages.map((src, index) => (
            <div
              key={index}
              className="relative w-full h-auto transform transition duration-500 hover:scale-110 hover:shadow-lg"
            >
              <Image
                src={src}
                alt={`Certificate ${index + 1}`}
                width={500}
                height={700}
                className="object-cover rounded-lg"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certificates;
