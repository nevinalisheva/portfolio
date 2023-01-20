import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
const Landing = ({theme}) => {
    const scrollDown = () => {
    window.scrollTo(5000, {
      duration: 1100,
      smooth: "easeOutSine", 
    });
  };
  return (
    <div
      className={` ${
        theme === "dark" ? "bg-landing-dark" : "bg-landing"
      }  max-w-6xl  mx-auto  h-screen w-screen object-cover relative top-0 filter contrast-125 flex items-center justify-center`}
    >
      <div className="antialiased overflow-hidden  h-screen w-screen object-cover relative top-0 filter contrast-125 flex items-center justify-center ">
        <TypeAnimation
          className=" inline-flex font-semibold text-purple-200 space-y-8 items-center justify-center"
          sequence={[
            "I am Nevin Alisheva.", 
            1000, 
            "I am a full stack developer.",
            2000, 
            "I am looking for a job.", 
            1000, 
            "I am currently doing a bootcamp.",
            1000, 
            "I am a problem solver.",
            1000, 
            "I am a team player.",
            1000,
            "I live in Berlin.",
            1000,
            "I love coding.",
            1000, 
            "I like team sports.",
            1000, 
            "I play the piano.",
            1000,
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "2em" }}
        />
      </div>
      <div className="bg-transparent absolute inset-y-2/3">
        <Link href="#introduction" scroll={false}>
          <button
            className={`${
              theme === "dark" ? "before:bg-dark_btn" : "before:bg-purple-300"
            } bg-none cursor-pointer inline-block flex-shrink-0 text-2xl py-3 px-3 relative text-white no-underline z-10 font-bold
     before:h-full before:absolute before:w-full before:-z-10 before:top-3 before:right-3
    after:border-white after:border-solid after:border-2 after:h-full after:opacity-100 after:absolute after:top-0 after:right-0 after:w-full
    hover:before:translate-x-3 hover:before:-translate-y-3
    hover:after:-translate-x-3 hover:after:translate-y-3
    hover:before:transition-transform hover:before:duration-500 hover:before:ease-in
    hover:after:transition-transform hover:after:duration-500 hover:after:ease-in
    after:transition-transform after:duration-500
    before:transition-transform before:duration-500 scroll-smooth`}
          >
            Find out more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
