import Image from "next/image";

const Introduction = () => {
    return (
      <div className="pb-10 md:mb-0 dark:bg-neutral-900 items-center rounded-lg shadow-md dark:shadow-white md:pt-30 pt-20">
        <div
          className="flex flex-col md:flex-row  pb-10 md:mb-0 dark:bg-neutral-900 items-center pt-4"
          id="introduction"
        >
          <div className="p-14 bg-[#F1F1F1] dark:bg-zinc-700 border-2 dark:border-violet-300 border-purple-300">
            <Image
              src="/me.jpeg"
              alt="nevin-alisheva"
              sizes="(max-width: 768px) 300px, 400px"
              width={400}
              height={500}
              className="rounded-lg shadow-2xl border-2 border-purple-300 dark:border-violet-300 "
            />
          </div>
          <div className="md:px-8 px-4 md:w-5/6 w-full">
            <div>
              <div className="py-10">
                <h1 className="text-xl xs:text-3xl font-semibold ">Hi all, </h1>
                <h1 className="text-xl xs:text-3xl font-semibold ">
                  I am{" "}
                  <span className="text-xl xs:text-3xl text-purple-300 dark:text-violet-300 tracking-wider">
                    Nevin{" "}
                  </span>
                  <span className="animate-waving-hand inline-flex">👋🏻</span> !
                </h1>
              </div>
              <p className="xs:leading-10 leading-6 text-sm xs:text-md md:text-lg">
                As a{" "}
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-purple-300 dark:before:bg-violet-300  relative inline-block">
                  <span className="relative text-white">
                    {"  "}
                    Full Stack Web Developer
                  </span>
                </span>{" "}
                in training, I am driven to learn and grow in the field. My
                5-month bootcamp has provided me with the foundational skills to
                design, develop and deploy web and mobile applications. I am
                proficient in JavaScript, React.js, Node.js, Next.js and other
                modern libraries and frameworks. My personal projects and
                coursework demonstrate my ability to take on new challenges and
                to deliver high-quality solutions.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-md xs:text-2xl font-semibold px-4">
            Career Aspirations:
          </h2>
          <p className=" px-4 xs:leading-10 leading-6 text-sm xs:text-md md:text-lg">
            I am excited to continue learning and to apply these skills in
            real-world projects. I am looking for an entry-level or Junior Full
            Stack Web Developer role where I can continue to learn and grow in
            the field. I am excited to be a part of a team that values
            collaboration, creativity, and innovation. I am keen to take on new
            challenges and to be a part of building solutions that make a real
            difference in the world.
          </p>
        </div>
      </div>
    );
}

 
export default Introduction;