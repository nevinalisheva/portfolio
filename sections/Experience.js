import Link from "next/link";

const Experience = () => {
  return (
    <div id="projects" className="pt-0 md:pt-16">
      <section className="bg-white dark:bg-neutral-900">
        <div className=" md:h-28 h-20 bg-white dark:bg-zinc-700">
          <h1 className=" text-2xl md:text-4xl font-bold md:py-20 text-center md:text-left p-14 animate-pulse">
            Projects
          </h1>
        </div>
        {/* Grid */}
        <div className="bg-[#F1F1F1] dark:bg-neutral-900 p-8 sm:p-14 rounded-lg shadow-md dark:shadow-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-10 pb-20">
            <div className="github-repo rounded-lg shadow-2xl bg-white dark:bg-black p-4 border-2 dark:border-violet-300 border-purple-300 transform hover:scale-110 transition duration-2000 ease-out hover:backdrop-blur-md">
              <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                NEMURA
              </h1>
              <p className=" text-sm xs:text-md md:text-base font-normal my-4 text-gray-500">
                NEMURA is a web application that allows you to search for any TV
                show and get detailed information about its actors, seasons,
                episodes, and overall rating. Whether you are looking for your
                next binge-worthy series or simply want to know more about your
                favorite shows, NEMURA makes it easy to find what you are
                looking for. Built with the MERN stack, the app is fast,
                responsive and user-friendly.
              </p>
              <Link
                target="_blank"
                href="https://github.com/nevinalisheva/project-2-NEMURA"
                className="font-semibold group flex flex-row space-x-2 w-full items-center"
              >
                <p>View Repository </p>
                <div className="transform  group-hover:translate-x-2 transition duration-300">
                  &rarr;
                </div>
              </Link>
            </div>
            <div className="github-repo rounded-lg shadow-2xl bg-white dark:bg-black p-4 border-2 dark:border-violet-300 border-purple-300 transform hover:scale-110 transition duration-2000 ease-out hover:backdrop-blur-md">
              <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                Christmas in Berlin
              </h1>
              <p className=" text-sm xs:text-md md:text-base font-normal my-4 text-gray-500">
                Christmas in Berlin is a mobile-only web app that showcases
                Christmas markets in your district and features an advent
                calendar for a special surprise. Developed in a 30-hour
                hackathon, it’s perfect for anyone looking to plan their holiday
                season in Berlin. With a sleek design and easy-to-use interface,
                the app is a must-have for anyone looking to explore the city
                during the festive season.
              </p>
              <Link
                target="_blank"
                href="https://github.com/nevinalisheva/firstHackathon"
                className="font-semibold group flex flex-row space-x-2 w-full items-center"
              >
                <p>View Repository </p>
                <div className="transform  group-hover:translate-x-2 transition duration-300">
                  &rarr;
                </div>
              </Link>
            </div>
            <div className="github-repo rounded-lg shadow-2xl bg-white dark:bg-black p-4 border-2 dark:border-violet-300 border-purple-300 transform hover:scale-110 transition duration-2000 ease-out hover:backdrop-blur-md">
              <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                TechTree
              </h1>
              <p className=" text-sm xs:text-md md:text-base font-normal my-4 text-gray-500">
                TechTree is a unique web application that aims to gamify your
                portfolio and make you more discoverable to recruiters. Built
                with a small startup team of developers from P5-Technology, the
                app allows you to showcase your skills and projects in an
                interactive and visually appealing way. Whether you are a
                seasoned developer or just starting out, TechTree is a great way
                to stand out in a crowded job market.
              </p>
              <Link
                target="_blank"
                href="https://gitlab.com/cvgg/techtree"
                className="font-semibold group flex flex-row space-x-2 w-full items-center"
              >
                <p>View Repository </p>
                <div className="transform  group-hover:translate-x-2 transition duration-300">
                  &rarr;
                </div>
              </Link>
            </div>
            <div className="github-repo rounded-lg shadow-2xl bg-white dark:bg-black p-4 border-2 dark:border-violet-300 border-purple-300 transform hover:scale-110 transition duration-2000 ease-out hover:backdrop-blur-md">
              <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                Berlinale FMA
              </h1>
              <p className=" text-sm xs:text-md md:text-base font-normal my-4 text-gray-500">
                Berlinale FMA is a fleet management application designed for
                Berlinale workers, professionals and accredited visitors to the
                festival. It facilitates travel between various locations of the
                event and was developed as a part of the 48h AWS hackathon.
                Built with a user-centric approach, the app is designed to make
                your festival experience more efficient and enjoyable.
              </p>
              <Link
                target="_blank"
                href="https://github.com/nevinalisheva/Berlinale-FMA"
                className="font-semibold group flex flex-row space-x-2 w-full items-center"
              >
                <p>View Repository </p>
                <div className="transform  group-hover:translate-x-2 transition duration-300">
                  &rarr;
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
 export default Experience;