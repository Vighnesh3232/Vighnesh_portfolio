import React, { useEffect, useState } from 'react';
import './Skills.css';
import { getSkills } from '../queries/getSkills';

import { FaReact, FaPython, FaDatabase, FaLanguage, FaCheckCircle, FaFlask, FaSitemap, FaExchangeAlt, FaGithub, FaComments, FaAws } from 'react-icons/fa';
import { SiR, SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiPowerbi, SiTableau, SiPlotly, SiApacheairflow, SiN8N, SiZapier, SiMake, SiOpenai, SiLangchain, SiStreamlit, SiDocker, SiJira, SiVercel } from 'react-icons/si';
import { Skill } from '../types';

const iconMap: { [key: string]: JSX.Element } = {
  FaPython: <FaPython />,
  FaDatabase: <FaDatabase />,
  SiR: <SiR />,
  SiPandas: <SiPandas />,
  SiNumpy: <SiNumpy />,
  SiScikitlearn: <SiScikitlearn />,
  SiTensorflow: <SiTensorflow />,
  FaLanguage: <FaLanguage />,
  FaCheckCircle: <FaCheckCircle />,
  SiPowerbi: <SiPowerbi />,
  SiTableau: <SiTableau />,
  SiPlotly: <SiPlotly />,
  FaFlask: <FaFlask />,
  SiApacheairflow: <SiApacheairflow />,
  FaSitemap: <FaSitemap />,
  FaExchangeAlt: <FaExchangeAlt />,
  SiN8N: <SiN8N />,
  SiZapier: <SiZapier />,
  SiMake: <SiMake />,
  SiOpenai: <SiOpenai />,
  SiLangchain: <SiLangchain />,
  SiStreamlit: <SiStreamlit />,
  FaGithub: <FaGithub />,
  SiDocker: <SiDocker />,
  FaAws: <FaAws />,
  SiJira: <SiJira />,
  SiVercel: <SiVercel />,
  FaComments: <FaComments />,
};


const Skills: React.FC = () => {

  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  useEffect(() => {
    async function fetchSkills() {
      const data = await getSkills();
      setSkillsData(data);
    }

    fetchSkills()
  }, []);

  if (skillsData.length === 0) return <div>Loading...</div>;

  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});


  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter: any, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter === ' ' ? ' ' : letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
