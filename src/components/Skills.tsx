import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: "Design",
      items: [
        { name: "Canva", percentage: 90 },
        { name: "Figma", percentage: 80 },
        { name: "Adobe Photoshop", percentage: 50 },
        { name: "Adobe Illustrator", percentage: 45 },
        { name: "Capcut", percentage: 80 }
      ]
    },
    {
      category: "Development",
      items: [
        { name: "HTML", percentage: 70 },
        { name: "CSS", percentage: 70 },
        { name: "JavaScript", percentage: 50 },
        { name: "ReactJS", percentage: 50 }
      ]
    }
  ];

  const getSkillLevel = (percentage: number): string => {
    if (percentage >= 90) return 'Expert';
    if (percentage >= 80) return 'Advanced';
    if (percentage >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Keahlian</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6">{skillGroup.category}</h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">{skill.name}</span>
                      <span className="text-blue-600">{getSkillLevel(skill.percentage)}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500">{skill.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;