const Experience = () => {
  return (
    <div>
    <section className="bg-white dark:bg-gray-800">
          <div className=" h-30 bg-white dark:bg-gray-800">
            <h1 className=" text-2xl md:text-5xl font-bold py-20 text-center md:text-left">
              Projects
            </h1>
          </div>
          {/* Grid starts here */}
          <div className="bg-[#F1F1F1] dark:bg-gray-900">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
              <div className="github-repo">
                <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                  latestRepo.name
                </h1>
                <p className="text-base font-normal my-4 text-gray-500">
                  latestRepo.description
                </p>
                <a
                  href={"latestRepo.clone_url:"}
                  className="font-semibold group flex flex-row space-x-2 w-full items-center"
                >
                  <p>View Repository </p>
                  <div className="transform  group-hover:translate-x-2 transition duration-300">
                    &rarr;
                  </div>
                </a>
              </div>
              </div>
              </div>
              </section>
    
    <section id="experience" class="p-10 min-h-screen flex md:flex-row items-center justify-around bg-transparent flex-wrap sm:flex-col">
      <div class="h-32 w-32 relative cursor-pointer mb-5">
        <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
        <div class="absolute inset-0 transform  hover:scale-75 transition duration-300">
          <div class="h-full w-full bg-white rounded-lg shadow-2xl"></div>
        </div>
      </div>

      <div class="h-32 w-32 relative cursor-pointer mb-5">
        <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
        <div class="absolute inset-0 transform hover:rotate-90 hover:scale-75 transition duration-300">
          <div class="h-full w-full bg-white rounded-lg shadow-2xl"></div>
        </div>
      </div>

      <div class="h-32 w-32 relative cursor-pointer mb-5">
        <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
        <div class="absolute inset-0 transform  hover:rotate-45 transition duration-300">
          <div class="h-full w-full bg-white rounded-lg shadow-2xl"></div>
        </div>
      </div>

      <div class="h-32 w-32 relative cursor-pointer mb-5">
        <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
        <div class="absolute inset-0 transform  hover:-rotate-45 transition duration-300">
          <div class="h-full w-full bg-white rounded-lg shadow-2xl"></div>
        </div>
      </div>

      <div class="h-32 w-32 relative cursor-pointer mb-5">
        <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
        <div class="absolute inset-0 transform origin-left hover:-rotate-45 transition duration-300">
          <div class="h-full w-full bg-white rounded-lg shadow-2xl"></div>
        </div>
      </div>

      <div class="h-32 w-32 relative cursor-pointer mb-5">
        <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
        <div class="absolute inset-0 transform hover:-translate-x-10 transition duration-300">
          <div class="h-full w-full bg-white rounded-lg shadow-2xl"></div>
        </div>
      </div>

      <div class="h-32 w-32 relative cursor-pointer mb-5">
        <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>

        <div class="absolute inset-0 transform hover:rotate-90 hover:translate-x-full hover:scale-150 transition duration-300">
          <div class="h-full w-full bg-white rounded-lg shadow-2xl"></div>
        </div>
      </div>

      <div class="h-32 w-32 relative cursor-pointer mb-5">
        <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
        <div class="absolute inset-0 transform hover:skew-y-12 transition duration-300">
          <div class="h-full w-full bg-white rounded-lg shadow-2xl"></div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Experience;