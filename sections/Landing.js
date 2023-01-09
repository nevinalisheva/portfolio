import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
const Landing = ({theme}) => {
    const scrollDown = () => {
    window.scrollTo(5000, {
      duration: 1100, //* IF Lesser = Quicker | IF Higher = Slower
      smooth: "easeOutSine", //* Some smooth effects based on documentation here: https://easings.net/ and https://www.npmjs.com/package/react-scroll
    });
  };
  return (
    <div
      className={` ${
        theme === "dark" ? "bg-landing-dark" : "bg-landing"
      }  max-w-6xl  mx-auto  h-screen w-screen object-cover relative top-0 filter contrast-125 flex items-center justify-center`}
    >
      <div class="antialiased overflow-hidden  h-screen w-screen object-cover relative top-0 filter contrast-125 flex items-center justify-center ">
        {/* <section>
        <h1>Staggered (with delay prop and custom styling)</h1>
        <div>
          <TextLoop mask={true} fade={false}>
            <span>Trade</span>
            <span>Increase</span>
            <span>Stock</span>
          </TextLoop>
          <TextLoop delay={500} mask={true} fade={false}>
            <span>faster</span>
            <span>sales</span>
            <span>winners</span>
          </TextLoop>
          <TextLoop delay={1000} mask={true} fade={false}>
            <span>in every category.</span>
            <span>in something else.</span>
            <span>in other category.</span>
          </TextLoop>
        </div>
      </section> */}
        <TypeAnimation
          className=" inline-flex font-semibold text-purple-200 space-y-8 items-center justify-center"
          sequence={[
            "I am Nevin Alisheva.", // Types 'One'
            1000, // Waits 1s
            "I am a full stack developer.", // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            "I am looking for a job.", // Types 'Three' without deleting 'Two'
            1000, // Waits 2s
            "I am currently doing a bootcamp.",
            1000,
            "I live in Berlin.",
            1000, // Waits 2s
            "I love coding.",
            1000, // Waits 2s
            "I like team sports.",
            1000, // Waits 2s
            "I play the piano.",
            1000,

            () => {
              console.log("Done typing!"); // Place optional callbacks anywhere in the array
            },
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "2em" }}
        />
      </div>
      <div class="bg-transparent absolute inset-y-2/3">
        <Link href="#about">
          <button
            class={`${
              theme === "dark" ? "before:bg-dark_btn" : "before:bg-purple-300"
            } bg-none cursor-pointer inline-block flex-shrink-0 text-2xl py-3 px-3 relative text-white no-underline z-10 font-bold
     before:h-full before:absolute before:w-full before:-z-10 before:top-3 before:right-3
    after:border-white after:border-solid after:border-2 after:h-full after:opacity-100 after:absolute after:top-0 after:right-0 after:w-full
    hover:before:translate-x-3 hover:before:-translate-y-3
    hover:after:-translate-x-3 hover:after:translate-y-3
    hover:before:transition-transform hover:before:duration-500 hover:before:ease-in
    hover:after:transition-transform hover:after:duration-500 hover:after:ease-in
    after:transition-transform after:duration-500
    before:transition-transform before:duration-500`}
          >
            Find out more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
