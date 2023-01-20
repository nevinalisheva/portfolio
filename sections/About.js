 import {
   DiReact,
   DiJavascript1,
   DiGithubBadge,
   DiMysql,
   DiNodejs,
   DiCss3,
   DiHtml5,
 } from "react-icons/di";
 import { SiExpress, SiNextdotjs, SiTypescript } from "react-icons/si";



const About = () => {
  return (
    <div id="skills">
      <section className="bg-white dark:bg-neutral-900">
        <div className=" md:h-28 h-20 bg-white dark:bg-zinc-700">
          <h1 className=" text-2xl md:text-4xl font-bold md:py-20 text-center md:text-left p-14 animate-pulse">
            Skills
          </h1>
        </div>
        <div className="p-10 min-h-screen flex md:flex-row items-center justify-around bg-[#F1F1F1] dark:bg-neutral-900 flex-wrap rounded-lg shadow-md dark:shadow-white">
          <div className="sm:h-48  sm:w-48 h-32 w-32 relative cursor-pointer sm:mb-3 mb-2 bg-white dark:bg-black ">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl "></div>
            <div className="absolute inset-0 transform  hover:-translate-x-10 transition duration-300">
              <div className="h-full w-full text-center bg-white dark:bg-landing-dark rounded-lg shadow-2xl border-dark_btn border-2 ">
                <SiNextdotjs size={90} className="mx-auto"/>
                <h1 className="font-semibold sm:mt-8 mt-3 text-lg sm:text-2xl dark:text-gray-200 text-gray-700">
                  NextJS
                </h1>
              </div>
            </div>
          </div>

          <div className="sm:h-48  sm:w-48 h-32 w-32  relative cursor-pointer sm:mb-5 mb-2">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div className="absolute inset-0 transform hover:rotate-90 hover:scale-75 transition duration-300">
              <div className="h-full w-full text-center bg-white dark:bg-landing-dark rounded-lg shadow-2xl border-dark_btn border-2">
                <DiReact size={90} className="mx-auto"/>
                <h1 className="font-semibold sm:mt-8 mt-3 text-lg sm:text-2xl dark:text-gray-200 text-gray-700">
                  React
                </h1>
              </div>
            </div>
          </div>

          <div className="sm:h-48  sm:w-48 h-32 w-32  relative cursor-pointer sm:mb-5 mb-2">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
              <div className="h-full w-full text-center bg-white dark:bg-landing-dark rounded-lg shadow-2xl border-dark_btn border-2">
                <DiJavascript1 size={90} className="mx-auto"/>
                <h1 className="font-semibold sm:mt-8 mt-3 text-lg sm:text-2xl dark:text-gray-200 text-gray-700">
                  Javascript
                </h1>
              </div>
            </div>
          </div>

          <div className="sm:h-48  sm:w-48 h-32 w-32 relative cursor-pointer sm:mb-5 mb-2">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl "></div>
            <div className="absolute inset-0 transform  hover:-translate-y-10 transition duration-300">
              <div className="h-full w-full text-center bg-white dark:bg-landing-dark rounded-lg shadow-2xl border-dark_btn border-2">
                <DiGithubBadge size={90} className="mx-auto"/>
                <h1 className="font-semibold sm:mt-8 mt-3 text-lg sm:text-2xl dark:text-gray-200 text-gray-700">
                  Github
                </h1>
              </div>
            </div>
          </div>

          <div className="sm:h-48  sm:w-48 h-32 w-32 relative cursor-pointer sm:mb-5 mb-2">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div className="absolute inset-0 transform origin-left hover:-rotate-45 transition duration-300">
              <div className="h-full w-full text-center bg-white dark:bg-landing-dark rounded-lg shadow-2xl border-dark_btn border-2">
                <DiMysql size={90} className="mx-auto"/>
                <h1 className="font-semibold sm:mt-8 mt-3 text-lg sm:text-2xl dark:text-gray-200 text-gray-700">
                  Mysql
                </h1>
              </div>
            </div>
          </div>

          <div className="sm:h-48  sm:w-48 h-32 w-32 relative cursor-pointer sm:mb-5 mb-2">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div className="absolute inset-0 transform hover:-translate-x-10 transition duration-300">
              <div className="h-full w-full text-center bg-white dark:bg-landing-dark rounded-lg shadow-2xl border-dark_btn border-2">
                <DiNodejs size={90} className="mx-auto"/>
                <h1 className="font-semibold sm:mt-8 mt-3 text-lg sm:text-2xl dark:text-gray-200 text-gray-700">
                  NodeJS
                </h1>
              </div>
            </div>
          </div>

          <div className="sm:h-48  sm:w-48 h-32 w-32 relative cursor-pointer sm:mb-5 mb-2">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>

            <div className="absolute inset-0 transform origin- hover:-rotate-45 transition duration-300">
              <div className="h-full w-full text-center bg-white dark:bg-landing-dark rounded-lg shadow-2xl border-dark_btn border-2">
                <DiCss3 size={90} className="mx-auto"/>
                <h1 className="font-semibold sm:mt-8 mt-3 text-lg sm:text-2xl dark:text-gray-200 text-gray-700">
                  CSS
                </h1>
              </div>
            </div>
          </div>

          <div className="sm:h-48  sm:w-48 h-32 w-32 relative cursor-pointer sm:mb-5 mb-2">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div className="absolute inset-0 transform hover:skew-y-12 transition duration-300">
              <div className="h-full w-full text-center bg-white dark:bg-landing-dark rounded-lg shadow-2xl border-dark_btn border-2">
                <SiExpress size={90} className="mx-auto"/>
                <h1 className="font-semibold sm:mt-8 mt-3 text-lg sm:text-2xl dark:text-gray-200 text-gray-700">
                  ExpressJS
                </h1>
              </div>
            </div>
          </div>

          <div className="sm:h-48  sm:w-48 h-32 w-32 relative cursor-pointer sm:mb-5 mb-2">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
              <div className="h-full w-full text-center bg-white dark:bg-landing-dark rounded-lg shadow-2xl border-dark_btn border-2">
                <DiHtml5 size={90} className="mx-auto"/>
                <h1 className="font-semibold sm:mt-8 mt-3 text-lg sm:text-2xl dark:text-gray-200 text-gray-700">
                  HTML
                </h1>
              </div>
            </div>
          </div>

          <div className="sm:h-48  sm:w-48 h-32 w-32 relative cursor-pointer sm:mb-5 mb-2">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div className="absolute inset-0 transform  hover:-rotate-45 transition duration-300">
              <div className="h-full w-full text-center bg-white dark:bg-landing-dark rounded-lg shadow-2xl border-dark_btn border-2">
                <SiTypescript size={90} className="mx-auto"/>
                <h1 className="font-semibold sm:mt-8 mt-3 text-lg sm:text-2xl dark:text-gray-200 text-gray-700">
                  Typescript
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
