import React from "react";

const SkillDisplay = ({ skill }) => {
  return (
    <div className="rounded-2xl flex flex-col items-center w-max p-4 bg-[#E0E0E0]">
      <img src={skill.logo} alt={`${skill.name}-logo`} width={58} />

      <h2 className="text-center font-medium text-lg mt-2">{skill.name}</h2>
    </div>
  );
};

const Skills = () => {
  const frontendSkills = [
    {
      name: "React",
      logo: "react.svg",
    },
    {
      name: "HTML",
      logo: "html5.svg",
    },
    {
      name: "CSS",
      logo: "css3.svg",
    },
    {
      name: "Javascript",
      logo: "javascript.svg",
    },
    {
      name: "Tailwind",
      logo: "tailwindcss.svg",
    },
    {
      name: "NextJs",
      logo: "nextjs.svg",
    },
  ];

  const backendSkills = [
    {
      name: "Javascript",
      logo: "javascript.svg",
    },
    {
      name: "NodeJs",
      logo: "node-js.svg",
    },
    {
      name: "Express",
      logo: "express.svg",
    },

    {
      name: "NextJs",
      logo: "nextjs.svg",
    },
  ];
  const databaseSkills = [
    {
      name: "MongoDB",
      logo: "mongodb.svg",
    },
    {
      name: "PostgreSQL",
      logo: "postgresql.svg",
    },
    {
      name: "SQL",
      logo: "sql.svg",
    },
  ];
  const devopsSkills = [
    {
      name: "AWS",
      logo: "aws.svg",
    },
    {
      name: "Docker",
      logo: "docker.svg",
    },
  ];
  return (
    <div className="bg-[#1b1b1b] px-10 py-16">
      <h1 className="text-white text-center font-sequel tracking-wider">
        SKILLS
      </h1>
      <div className="flex max-md:flex-col mt-12 py-6 gap-6 mb-10">
        <div className="flex flex-col gap-4 items-center flex-1 border-2 border-slate-400 rounded-3xl py-8">
          <h2 className="text-white text-3xl font-medium font-handlee">
            Frontend
          </h2>
          <div className="flex flex-wrap gap-4 justify-center ">
            {frontendSkills.map((skill, index) => (
              <SkillDisplay skill={skill} key={index} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center flex-1 border-2 border-slate-400 rounded-3xl py-8">
          <h2 className="text-white text-3xl font-medium font-handlee">
            Backend
          </h2>
          <div className="flex flex-wrap gap-4 justify-center ">
            {backendSkills.map((skill, index) => (
              <SkillDisplay skill={skill} key={index} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center flex-1 border-2 border-slate-400 rounded-3xl py-8">
          <h2 className="text-white text-3xl font-medium font-handlee">
            Database
          </h2>
          <div className="flex flex-wrap gap-4 justify-center ">
            {databaseSkills.map((skill, index) => (
              <SkillDisplay skill={skill} key={index} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center flex-1 border-2 border-slate-400 rounded-3xl py-8">
          <h2 className="text-white text-3xl font-medium font-handlee">
            Devops
          </h2>
          <div className="flex flex-wrap gap-4 justify-center ">
            {devopsSkills.map((skill, index) => (
              <SkillDisplay skill={skill} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
