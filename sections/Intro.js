import Image from "next/image";

const Introduction = () => {
    return (
      <div className="flex flex-col sm:flex-row sm:h-screen mb-10 sm:mb-0  items-center ">
        <div className="p-14 bg-[#F1F1F1] border-4 border-violet-300 ">
          <Image
            src="/me.jpeg"
            alt="nevin-alisheva"
            width={900}
            height={700}
            className="border-4 border-violet-300 "
          />
        </div>
        <div className="px-14 ">
          <div >
            <div className="py-10">
              <h1 className="text-3xl font-semibold ">
              Hi all, </h1><h1 className="text-3xl font-semibold ">I am{" "}
              <span className="text-violet-300 tracking-wider">Nevin </span>
              <span class="animate-waving-hand inline-flex">👋🏻</span> !
              </h1>
            </div>
            <p>
              A passionate{" "}
              <span class="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-violet-300  relative inline-block">
                <span class="relative text-white">
                  {"  "}
                  Full Stack Web Developer
                </span>
              </span>{" "}
              having an experience of building Web and Mobile applications with
              JavaScript / Reactjs / Nodejs / Nextjs and some other cool
              libraries and frameworks.
            </p>
          </div>
        </div>
      </div>
    );
}

 
export default Introduction;