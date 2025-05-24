import React from 'react';

const educationData = [
  {
    date: '2021- Present',
    title: 'School of Computer Science and IT, Davv',
    description: 'Integrated Degress in Computer Application(BCA, MCA)',
    percentage: 'CGPA: 8.10',
    side: 'left',
    color: 'orange-600',
  },
  {
    date: '2020- 2021',
    title: 'Carmel Convent Sr Sec School',
    description: 'Completed 12th grade with focus on Commerce and Mathematics',
    percentage: '87%',
    side: 'right',
    color: 'black',
  },
  {
    date: '2018- 2019',
    title: 'Carmel Convent Sr Sec School ',
    description: '"Successfully completed my 10th grade with a strong foundation in academics and active participation in extracurricular activities.',
    percentage: '80%',
    side: 'left',
    color: 'orange-600',
  }
];

const Education = () => {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-16">
        <span className="text-black">My</span> <span className="text-orange-600">Education</span>
      </h2>

      <div className="relative max-w-6xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-black"></div>

        {educationData.map((item, index) => (
          <div key={index} className={`mb-12 flex justify-${item.side === 'left' ? 'start' : 'end'} w-full relative`}>
            <div className={`w-full md:w-1/2 px-4 flex ${item.side === 'left' ? 'justify-end' : 'justify-start'}`}>
              <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-6 w-full hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-bold text-black mb-1">{item.title}</h3>
                <p className={`text-sm text-${item.color} mb-2`}>{item.date}</p>
                <p className="text-gray-700 text-sm">{item.description}</p>
                 <p className="text-gray-700 text-sm">{item.percentage}</p>
              </div>
            </div>
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white border-4 border-black rounded-full z-10"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;