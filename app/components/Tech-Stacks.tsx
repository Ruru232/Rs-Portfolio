const techStacks = [
  { name: 'HTML', level: 'Advanced' },
  { name: 'CSS', level: 'Advanced' },
  { name: 'JavaScript', level: 'Intermediate' },
  { name: 'TypeScript', level: 'Intermediate' },
  { name: 'ReactJS', level: 'Intermediate' },
  { name: 'NextJS', level: 'Intermediate' },
  { name: 'MySQL', level: 'Intermediate' },
  { name: 'Tailwind CSS', level: 'Intermediate' },
  { name: 'ShadCN', level: 'Intermediate' },
  { name: 'Framer Motion', level: 'Intermediate' },
  { name: 'SwiperJS', level: 'Intermediate' },
  { name: 'jQuery', level: 'Beginner' },
];

const getLevelPercentage = (level: string) => {
  switch (level) {
    case 'Beginner':
      return '25%';
    case 'Intermediate':
      return '50%';
    case 'Advanced':
      return '75%';
    case 'Expert':
      return '100%';
    default:
      return '0%';
  }
};

export default function TechStacks() {
  return (
    <div className="flex flex-wrap justify-center mx-[5%] 2xl:mx-[25%] mt-10 p-5">
      <div className="w-full  p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Tech Stacks</h2>
        <ul className="space-y-4">
          {techStacks.map((tech, index) => (
            <li key={index} className="flex flex-col">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium">{tech.name}</span>
                <span className="text-sm text-gray-500">{tech.level}</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-gradient-to-tr from-borderColor2 to-borderColor3 via-borderColor2 h-2 rounded-full transition-all duration-300"
                  style={{ width: getLevelPercentage(tech.level) }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-bold mt-10 mb-4 text-center">
          Additional Technologies & Skills
        </h3>
        <ul className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 ">
          <li className="relative pl-4">
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-to-tr from-borderColor2 to-borderColor3 via-borderColor2"></span>
            Git
          </li>
          <li className="relative pl-4">
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-to-tr from-borderColor2 to-borderColor3 via-borderColor2"></span>
            RWD
          </li>
          <li className="relative pl-4">
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-to-tr from-borderColor2 to-borderColor3 via-borderColor2"></span>
            Teamwork
          </li>
          <li className="relative pl-4">
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-to-tr from-borderColor2 to-borderColor3 via-borderColor2"></span>
            Quick learner
          </li>
        </ul>
      </div>
    </div>
  );
}
