import Link from "next/link";

const Experience = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-800">
        <div className=" md:h-28 h-20 bg-white dark:bg-gray-800">
          <h1 className=" text-2xl md:text-4xl font-bold py-20 text-center md:text-left p-14">
            Projects
          </h1>
        </div>
        {/* Grid starts here */}
        <div className="bg-[#F1F1F1] dark:bg-gray-900 p-14">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
            <div className="github-repo">
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
                href="https://github.com/nevinalisheva/project-2-NEMURA"
                className="font-semibold group flex flex-row space-x-2 w-full items-center"
              >
                <p>View Repository </p>
                <div className="transform  group-hover:translate-x-2 transition duration-300">
                  &rarr;
                </div>
              </Link>
            </div>
            <div className="github-repo">
              <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                Christmas in Berlin
              </h1>
              <p className="text-base font-normal my-4 text-gray-500">
                A mobile-only Web app that shows you Christmas markets in your
                disctrict and an advent calendar for a special surprise! This
                project was done in a 30 hour hackathon during training in Wild
                code school.
              </p>
              <Link
                href="https://github.com/nevinalisheva/firstHackathon"
                className="font-semibold group flex flex-row space-x-2 w-full items-center"
              >
                <p>View Repository </p>
                <div className="transform  group-hover:translate-x-2 transition duration-300">
                  &rarr;
                </div>
              </Link>
            </div>
            <div className="github-repo">
              <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                TechTree
              </h1>
              <p className="text-base font-normal my-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                adipisci quasi molestias iusto quaerat voluptatibus vel ab
                distinctio porro unde deleniti magni quibusdam dicta commodi
                quae voluptas libero, expedita et.
              </p>
              <Link
                href="https://gitlab.com/cvgg/techtree"
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

      <section
        id="experience"
        className="p-10 min-h-screen flex md:flex-row items-center justify-around bg-transparent flex-wrap sm:flex-col"
      >
        <div className="h-72 md:w-1/2 w-72 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-landing opacity-25 rounded-lg shadow-2xl "></div>
          <div className="absolute inset-0 transform  hover:-translate-x-20 transition duration-300">
            <div className="h-full w-full bg-white rounded-lg shadow-2xl">
              <div className="github-repo">
                <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                  Christmas in Berlin
                </h1>
                <p className="text-base font-normal my-4 text-gray-500">
                  A mobile-only Web app that shows you Christmas markets in your
                  disctrict and an advent calendar for a special surprise! This
                  project was done in a 30 hour hackathon during training in
                  Wild code school.
                </p>
                <Link
                  href="https://github.com/nevinalisheva/firstHackathon"
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
        </div>

        <div className="h-32 w-32 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
          <div className="absolute inset-0 transform hover:rotate-90 hover:scale-75 transition duration-300">
            <div className="h-full w-full bg-white rounded-lg shadow-2xl"></div>
          </div>
        </div>

        <div className="h-32 w-32 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
          <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
            <div className="h-full w-full bg-white rounded-lg shadow-2xl"></div>
          </div>
        </div>

        <div className="h-32 w-32 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
          <div className="absolute inset-0 transform  hover:-rotate-45 transition duration-300">
            <div className="h-full w-full bg-white rounded-lg shadow-2xl"></div>
          </div>
        </div>

        <div className="h-32 w-32 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
          <div className="absolute inset-0 transform origin-left hover:-rotate-45 transition duration-300">
            <div className="h-full w-full bg-white rounded-lg shadow-2xl"></div>
          </div>
        </div>

        <div className="h-32 w-32 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
          <div className="absolute inset-0 transform hover:-translate-x-10 transition duration-300">
            <div className="h-full w-full bg-white rounded-lg shadow-2xl"></div>
          </div>
        </div>

        <div className="h-32 w-32 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>

          <div className="absolute inset-0 transform hover:rotate-90 hover:translate-x-full hover:scale-150 transition duration-300">
            <div className="h-full w-full bg-white rounded-lg shadow-2xl"></div>
          </div>
        </div>

        <div className="h-32 w-32 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
          <div className="absolute inset-0 transform hover:skew-y-12 transition duration-300">
            <div className="h-full w-full bg-white rounded-lg shadow-2xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;