import Image from "next/image";

const Introduction = () => {
    return (
      <div className="flex flex-col sm:flex-row h-screen items-center ">
        <div className="p-14">
          <Image src="/me.jpeg" alt="nevin-alisheva" width={900} height={700} />
        </div>
        <div className="px-14">
          <div>
            <h1 className="text-3xl py-10 font-semibold ">
              Hi all, I am{" "}
              <span className="text-violet-300 tracking-wider">Nevin </span>
              <span class="animate-waving-hand inline-flex">👋🏻</span> !
            </h1>
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