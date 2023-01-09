import BtnGoTop from "../components/ButtontoTop";
import ContainerBlock from "../components/ContainerBlock";
import Seperator from "../components/Seperator";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Experience from "../sections/Experience";
import Introduction from "../sections/Intro";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <ContainerBlock
        title="Nevin Alisheva - Junior Full Stack Developer"
        description="Lorem Ipsum.. DESCRIPTION"
      >
        <Introduction />
        <Seperator />
        <BtnGoTop />
        <Experience />
        <Seperator />
        <About />
        <Seperator />
        {/* <div class="w-20 h-20 p-2 bg-purple-500 rounded-md animate-ping"></div> */}
        <div class="w-20 h-20 p-2 bg-purple-500 rounded-md animate-pulse"></div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-12 h-12 text-gray-600 animate-spin"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>

        <Contact />
        <section className="bg-white dark:bg-gray-800">
          <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
            <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
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
              <a
                href="https://tailwindmasterkit.com"
                className="w-full block shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src="/me.jpeg"
                    alt="portfolio"
                    className="transform hover:scale-125 transition duration-2000 ease-out"
                  />
                  <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                    Tailwind Master Kit
                  </h1>
                  <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                    01
                  </h1>
                </div>
              </a>
            </div>
          </div>
        </section>
      </ContainerBlock>
    </div>
  );
}
