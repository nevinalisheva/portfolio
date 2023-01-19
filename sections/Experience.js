import Link from "next/link";

const Experience = () => {
  return (
    <div id="projects">
      <section className="bg-white dark:bg-neutral-900">
        <div className=" md:h-28 h-20 bg-white dark:bg-zinc-700">
          <h1 className=" text-2xl md:text-4xl font-bold md:py-20 text-center md:text-left p-14 animate-pulse">
            Projects
          </h1>
        </div>
        {/* Grid */}
        <div className="bg-[#F1F1F1] dark:bg-neutral-900 p-14 rounded-lg shadow-md dark:shadow-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
            <div className="github-repo rounded-lg shadow-2xl bg-white dark:bg-black p-4 border-2 dark:border-violet-300 border-purple-300 transform hover:scale-125 transition duration-2000 ease-out hover:backdrop-blur-md">
              <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                NEMURA
              </h1>
              <p className="text-base font-normal my-4 text-gray-500">
                A Web app that allows you to search for any TV show and get
                information about its actors/actresses, seasons/episodes as well
                as its description. The nicest thing is the rating, so it is
                easy to see if the exact TV show is worth watching.
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
            <div className="github-repo rounded-lg shadow-2xl bg-white dark:bg-black p-4 border-2 dark:border-violet-300 border-purple-300 transform hover:scale-125 transition duration-2000 ease-out hover:backdrop-blur-md">
              <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                Christmas in Berlin
              </h1>
              <p className="text-base font-normal my-4 text-gray-500">
                A mobile-only Web app that shows you Christmas markets in your
                district and an advent calendar for a special surprise! This
                project was done in a 30 hour hackathon during training in Wild
                code school.
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
            <div className="github-repo rounded-lg shadow-2xl bg-white dark:bg-black p-4 border-2 dark:border-violet-300 border-purple-300 transform hover:scale-125 transition duration-2000 ease-out hover:backdrop-blur-md">
              <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                TechTree
              </h1>
              <p className="text-base font-normal my-4 text-gray-500">
                Gamifying your portfolio while making you discoverable for
                recruiters is the main idea behind TechTree. For this project I
                have been working with a small start-up team of developers from
                P5-Technology.
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
            <div className="github-repo rounded-lg shadow-2xl bg-white dark:bg-black p-4 border-2 dark:border-violet-300 border-purple-300 transform hover:scale-125 transition duration-2000 ease-out hover:backdrop-blur-md">
              <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                Berlinale FMA
              </h1>
              <p className="text-base font-normal my-4 text-gray-500">
                A fleet management application for Berlinale workers,
                professionals and accredited visitors to the festival to
                facilitate travel between the various locations of the event! It
                was developed as a part of the 48h AWS hackathon.
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