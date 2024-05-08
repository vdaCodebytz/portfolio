import React from "react";

const About = () => {
  return (
    <div className="flex max-md:flex-col gap-8 justify-around items-center py-24 border-b-2 border-gray-400 px-10">
      <div>
        <img src="profile.jpeg" alt="" className="rounded-full" />
      </div>
      <div className="w-3/5 text-xl flex flex-col gap-6 max-md:w-full max-md:text-center">
        <h2 className="text-4xl font-roboto ">About Me</h2>
        <p className="font-light md:tracking-wider">
          Hey there! I'm Vishnu, a passionate fullstack web developer with a
          knack for crafting seamless digital experiences. While I've dipped my
          toes into the world of UI/UX design, my heart truly belongs to backend
          technologies. I love diving deep into the code, building robust
          systems, and solving complex challenges behind the scenes. <br />
          <br />
          My journey in web development has been fueled by curiosity and a
          desire to create meaningful solutions. Whether it's bringing ideas to
          life through elegant frontends or architecting efficient backend
          systems, I thrive on the creative and technical aspects of the craft.
          <br />
          <br /> When I'm not coding, you'll likely find me exploring new
          technologies, tinkering with side projects, or simply enjoying a good
          cup of coffee while pondering over the next big idea. <br /> <br />
          Let's connect and collaborate on bringing your digital dreams to
          reality!
        </p>
      </div>
    </div>
  );
};

export default About;
