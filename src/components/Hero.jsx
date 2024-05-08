import React from "react";

const Hero = () => {
  return (
    <div className="flex w-full py-8 gap-16 justify-between md:px-10 px-3">
      <div className="flex flex-col gap-6 justify-center max-md:w-full">
        <p className="md:text-4xl text-xl">I'm</p>
        <h1 className="md:text-9xl text-7xl font-semibold font-roboto">
          Vishnu Dev
          <span className="font-extralight text-[5.8rem] md:text-[10.3rem] block font-roboto">
            Aggarwal
          </span>
        </h1>
        <p className="md:text-5xl text-3xl mx-2 mt-10 font-light">
          Full Stack Developer
        </p>
      </div>
      <div className="w-2/5 md:flex flex-col justify-center gap-8 hidden ">
        <p className="text-xl font-extralight ">
          Hey there, I'm Vishnu, a developer on a mission to turn visions into
          digital masterpieces.From crafting sleek interfaces to architecting
          robust backend systems, I thrive on the challenge of bringing ideas to
          life.
        </p>
        <p className="text-xl font-extralight  ">
          Welcome to my digital playground, where innovation meets expertise,
          and every project is a journey of discovery. Let's build something
          amazing together.
        </p>
      </div>
    </div>
  );
};

export default Hero;
