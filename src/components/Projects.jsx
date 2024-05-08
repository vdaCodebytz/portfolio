import React from "react";

const Projects = () => {
  return (
    <section className="bg-[#1b1b1b] py-12 px-10">
      <h1 className="text-center md:m-14 py-4 max-md:text-[3rem] text-white font-sequel tracking-wider">
        PROJECTS
      </h1>
      <div className="flex max-md:flex-col gap-6 justify-around">
        <div className="max-w-lg flex-1 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="Project-1.png" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Pixorama
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A social media platform where users can share and discover images
              and videos of their friends and family.
            </p>
            <div className="flex gap-6 ">
              <a
                href="https://pixorama-six.vercel.app/"
                target="_blank"
                className="inline-flex flex-1 justify-center gap-2 items-center px-3 py-2 text-md font-medium text-center text-black bg-slate-900 rounded-lg hover:bg-slate-400 focus:outline-none mt-4 focus:ring-slate-300 dark:bg-slate-300 dark:hover:bg-slate-400 dark:focus:ring-slate-300"
              >
                Live Demo
                <img src="internet.svg" alt="" width={20} />
              </a>
              <a
                href="https://github.com/vdaCodebytz/pixorama"
                target="_blank"
                className="inline-flex flex-1 justify-center gap-2 items-center px-3 py-2 text-md font-medium text-center text-white bg-slate-900 rounded-lg hover:bg-slate-400 focus:ring-4 focus:outline-none mt-4 focus:ring-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 dark:focus:ring-slate-300"
              >
                <p>Source Code</p>
                <img src="github.svg" alt="" width={20} className="invert" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-lg flex-1 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="Project-2.png" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                CocktailsDB
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              The biggest database of cocktails recipes in the world. Search for
              your favorite cocktail and find out how to make it.
            </p>
            <div className="flex gap-6 ">
              <a
                href="https://cocktails-db-react-mini-project.vercel.app/"
                className="inline-flex flex-1 justify-center gap-2 items-center px-3 py-2 text-md font-medium text-center text-black bg-slate-900 rounded-lg hover:bg-slate-400 focus:outline-none mt-4 focus:ring-slate-300 dark:bg-slate-300 dark:hover:bg-slate-400 dark:focus:ring-slate-300"
              >
                Live Demo
                <img src="internet.svg" alt="" width={20} />
              </a>
              <a
                href="https://github.com/vdaCodebytz/cocktailsDB-react-mini-project"
                className="inline-flex flex-1 justify-center gap-2 items-center px-3 py-2 text-md font-medium text-center text-white bg-slate-900 rounded-lg hover:bg-slate-400 focus:ring-4 focus:outline-none mt-4 focus:ring-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 dark:focus:ring-slate-300"
              >
                <p>Source Code</p>
                <img src="github.svg" alt="" width={20} className="invert" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-lg flex-1 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="Project-3.png" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                ATLAS
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A blogging platform where users can share their thoughts and ideas
              and learn from others. It is built with Next.js, Tailwind CSS and
              ❤️.
            </p>
            <div className="flex gap-6 ">
              <a
                href="https://blog-app-nextjs-seven.vercel.app/"
                className="inline-flex flex-1 justify-center gap-2 items-center px-3 py-2 text-md font-medium text-center text-black bg-slate-900 rounded-lg hover:bg-slate-400 focus:outline-none mt-4 focus:ring-slate-300 dark:bg-slate-300 dark:hover:bg-slate-400 dark:focus:ring-slate-300"
              >
                Live Demo
                <img src="internet.svg" alt="" width={20} />
              </a>
              <a
                href="https://github.com/vdaCodebytz/blog-app-nextjs"
                className="inline-flex flex-1 justify-center gap-2 items-center px-3 py-2 text-md font-medium text-center text-white bg-slate-900 rounded-lg hover:bg-slate-400 focus:ring-4 focus:outline-none mt-4 focus:ring-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 dark:focus:ring-slate-300"
              >
                <p>Source Code</p>
                <img src="github.svg" alt="" width={20} className="invert" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
