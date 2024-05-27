import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between md:px-10 px-4 py-4 items-center mt-8">
      <div className="flex gap-4 items-center">
        <img src="profile.jpeg" alt="" width={42} className="rounded-full" />
        <h2 className="text-2xl">vishnu .</h2>
      </div>
      <div>
        <ul className="flex gap-6">
          <li>
            <a
              href="https://www.linkedin.com/in/vishnu-agg/"
              target="_blank"
              className="flex gap-2 text-black items-center"
            >
              <img src="linkedin.svg" alt="" width={28} />
              <p className="text-lg hidden md:block">LinkedIn</p>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vdaCodebytz"
              className="flex gap-2 text-black items-center"
              target="_blank"
            >
              <img src="github.svg" alt="" width={26} />
              <p className="text-lg hidden md:block">Github</p>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/vishnud_05"
              className="flex gap-2 text-black items-center"
              target="_blank"
            >
              <img src="twitter.png" alt="" width={26} />
              <p className="text-lg hidden md:block">Twitter / X</p>
            </a>
          </li>
          <li>
            <a
              href="https://www.dropbox.com/scl/fi/v9t6il9vhazqc2aekgncj/Resume.pdf?rlkey=d9xusa3v2jlxlcswigkt2denu&st=evpvwrhd&dl=1"
              className="flex gap-2 text-black items-center"
              target="_blank"
            >
              <img src="cv-icon.svg" alt="" width={22} />
              <p className="text-lg hidden md:block">Resume</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
