import {DiReact} from 'react-icons/di';
import {DiJavascript1} from 'react-icons/di';
import {DiGithubBadge} from 'react-icons/di';
import {DiMysql} from 'react-icons/di';
import {DiNodejs} from 'react-icons/di';
import {DiCss3} from 'react-icons/di';
import {SiExpress} from 'react-icons/di';
import {SiNextdotjs} from 'react-icons/di';



const About = () => {
  return (
    <div id="about">
      <section className="bg-white dark:bg-gray-800">
        <div className=" md:h-28 h-20 bg-white dark:bg-gray-800">
          <h1 className=" text-2xl md:text-4xl font-bold py-20 text-center md:text-left p-14">
            Skills
          </h1>
        </div>
        <section
        id="experience"
        className="p-10 min-h-screen flex md:flex-row items-center justify-around bg-transparent flex-wrap sm:flex-col"
      >
        {/* md:w-1/2 */}
        <div className="h-32  w-32 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-landing opacity-25 rounded-lg shadow-2xl "></div>
          <div className="absolute inset-0 transform  hover:-translate-x-20 transition duration-300">
            <div className="h-full w-full bg-white dark:bg-landing rounded-lg shadow-2xl">
              <SiNextdotjs size={50}/><h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                  NextJS
                </h1>
            </div>
          </div>
        </div>

        <div className="h-32 w-32 relative cursor-pointer mb-5 ">
          <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
          <div className="absolute inset-0 transform hover:rotate-90 hover:scale-75 transition duration-300">
            <div className="h-full w-full bg-white dark:bg-landing-dark rounded-lg shadow-2xl"><DiReact size={50}/><h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                  React
                </h1></div>
          </div>
        </div>

        <div className="h-32 w-32 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
          <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
            <div className="h-full w-full bg-white dark:bg-landing-dark rounded-lg shadow-2xl"><DiJavascript1 size={50}/><h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                  Javascript
                </h1></div>
          </div>
        </div>

        <div className="h-32 w-32 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
          <div className="absolute inset-0 transform  hover:-rotate-45 transition duration-300">
            <div className="h-full w-full bg-white dark:bg-landing-dark rounded-lg shadow-2xl"><DiGithubBadge size={50}/><h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                  Github
                </h1></div>
          </div>
        </div>

        <div className="h-32 w-32 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
          <div className="absolute inset-0 transform origin-left hover:-rotate-45 transition duration-300">
            <div className="h-full w-full bg-white dark:bg-landing-dark rounded-lg shadow-2xl"><DiMysql size={50}/><h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                  Mysql
                </h1></div>
          </div>
        </div>

        <div className="h-32 w-32 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
          <div className="absolute inset-0 transform hover:-translate-x-10 transition duration-300">
            <div className="h-full w-full bg-white dark:bg-landing-dark rounded-lg shadow-2xl"><DiNodejs size={50}/><h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                  NodeJS
                </h1></div>
          </div>
        </div>

        <div className="h-32 w-32 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>

          <div className="absolute inset-0 transform hover:rotate-90 hover:translate-x-full hover:scale-150 transition duration-300">
            <div className="h-full w-full bg-white dark:bg-landing-dark rounded-lg shadow-2xl"><DiCss3 size={50}/><h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                  Github
                </h1></div>
          </div>
        </div>

        <div className="h-32 w-32 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
          <div className="absolute inset-0 transform hover:skew-y-12 transition duration-300">
            <div className="h-full w-full bg-white dark:bg-landing-dark rounded-lg shadow-2xl"><SiExpress size={50}/><h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                  ExpressJS
                </h1></div>
          </div>
        </div>
      </section>

        </section>
    </div>
  );
};

export default About;

// <div className="px-8">
//         <div className="flex flex-col space-y-8 items-start justify-start">
//           <h1 className="font-mono text-7xl font-bold text-yellow-500 tracking-wide">
//             Pastros!
//           </h1>
//           <h3 className="font-mono text-back text-5xl">
//             A Bot that{" "}
//             <strong className="bg-blue-400 text-white">tweets</strong> about
//             your favorite <strong className="bg-yellow-400">pastry</strong>{" "}
//             recipes
//           </h3>
//         </div>
//       </div>