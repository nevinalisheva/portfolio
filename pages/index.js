import BtnGoTop from "../components/ButtontoTop";
import ContainerBlock from "../components/ContainerBlock";
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
        <div className="w-11/12 mx-auto h-0.5 bg-violet-300"></div>
        <BtnGoTop />
        <Experience />
        <div className="w-11/12 mx-auto h-0.5 bg-violet-300"></div>

        <About />
        <div className="w-11/12 mx-auto h-0.5 bg-violet-300"></div>

        <h3 class="text-3xl font-bold text-indigo-500 animate-bounce">
          Tailwind CSS Animation
        </h3>
        <div class="w-20 h-20 p-2 bg-blue-500 rounded-md animate-spin"></div>
      <div class="w-20 h-20 p-2 bg-purple-500 rounded-md animate-ping"></div>
      <div class="w-20 h-20 p-2 bg-green-500 rounded-md animate-bounce"></div>
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
        <div className="w-11/12 mx-auto h-0.5 bg-violet-300"></div>
      </ContainerBlock>
    </div>
  );
}
