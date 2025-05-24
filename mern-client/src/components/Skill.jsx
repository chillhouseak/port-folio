import React from 'react';

const logos = {
  'C++': 'https://cdn.worldvectorlogo.com/logos/c--4.svg',
  'JavaScript': 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',
  'OOPs': 'https://cdn4.iconfinder.com/data/icons/technology-83/1000/object_programming_development_oriented_developer_object-oriented_programming_software-512.png',
  'React JS': 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
  'HTML5': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuA1hlJVvw9TxSodwlBGei9f3wxmMNwDp_KQ&s',
  'CSS3': 'https://cdn.worldvectorlogo.com/logos/css-3.svg',
  'TailwindCSS': 'https://www.svgrepo.com/show/374118/tailwind.svg',
  'Bootstrap': 'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg',
  'Node.js': 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
  'Express': 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
  'MongoDB': 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
  'SQL': 'https://www.svgrepo.com/show/369980/database-sql.svg',
  'Windows': 'https://1000logos.net/wp-content/uploads/2017/06/Windows-Logo.png',
  'Figma': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHVIL5HpOsOFQWomhpmB5b8lTVQ9rIVnV9fg&s',
  'Git': 'https://cdn.worldvectorlogo.com/logos/git-icon.svg',
  'GitHub': 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
  'Visual Studio': 'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg',
  'Postman': 'https://cdn.worldvectorlogo.com/logos/postman.svg',
};

// Light pastel colors for badges
const bgLightColors = {
  'C++': '#D7E9F7',
  'JavaScript': '#FFF9DB',
  'OOPs': '#E0E0E0',
  'React JS': '#D5F0FC',
  'HTML5': '#FADBD8',
  'CSS3': '#D9E6F6',
  'TailwindCSS': '#D2F1F9',
  'Bootstrap': '#E6D9F7',
  'Node.js': '#DFF6DD',
  'Express': '#E8E8E8',
  'MongoDB': '#D8F3DC',
  'SQL': '#D8E4F1',
  'Windows': '#D3E6F8',
  'Figma': '#FCE8E6',
  'Git': '#F9D8D3',
  'GitHub': '#E8E8E8',
  'Visual Studio': '#E7DBF7',
  'Postman': '#FFE6DB',
};

const skillsData = [
  {
    title: 'Programming Languages',
    skills: ['C++', 'JavaScript', 'OOPs'],
  },
  {
    title: 'Frontend Technologies',
    skills: ['React JS', 'HTML5', 'CSS3', 'TailwindCSS', 'Bootstrap'],
  },
  {
    title: 'Backend Technologies',
    skills: ['Node.js', 'Express', 'MongoDB', 'SQL'],
  },
  {
    title: 'Tools',
    skills: ['Windows', 'Figma', 'Git', 'GitHub', 'Visual Studio', 'Postman'],
  },
];

const Skill = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-orange-600 mb-2">MY SKILLSET</h2>
      <p className="text-lg text-gray-800 mb-12 max-w-3xl">
        I always bring proper methods and tools to achieve the best possible outcomes
      </p>

      <div className="space-y-16">
        {skillsData.map((category, idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-semibold text-black mb-6">{category.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex flex-col items-center cursor-pointer group"
                >
                  {/* Circle badge with light background */}
                  <div
                    className="rounded-full flex items-center justify-center shadow-md w-24 h-24 transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: bgLightColors[skill] || '#eee' }}
                  >
                    <img
                      src={logos[skill]}
                      alt={skill}
                      className="w-12 h-12 object-contain"
                    />
                  </div>

                  {/* Box with tech name */}
                  <div
                    className="mt-3 px-4 py-2 rounded-md bg-gray-100 text-center text-sm font-semibold text-gray-800
                      shadow-sm transition-shadow duration-300 group-hover:shadow-lg"
                    style={{ minWidth: '90px' }}
                  >
                    {skill}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;