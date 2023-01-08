import { TypeAnimation } from "react-type-animation";
const Landing = () => {
  return (
    <div>
    <div class="antialiased overflow-hidden flex items-center justify-center bg-landing h-screen w-screen object-cover relative top-0 filter contrast-125">
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
        className=" inline-flex font-semibold text-white space-y-8 items-center justify-center"
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
      
    <div class="w-full h-full mx-auto p-20 bg-transparent">
  <button class="bg-none cursor-pointer inline-block flex-shrink-0 text-2xl py-3 px-3 relative text-white no-underline z-10 font-bold
    before:bg-gray-800 before:h-full before:absolute before:w-full before:-z-10 before:top-3 before:right-3
    after:border-white after:border-solid after:border-2 after:h-full after:opacity-100 after:absolute after:top-0 after:right-0 after:w-full
    hover:before:translate-x-3 hover:before:-translate-y-3
    hover:after:-translate-x-3 hover:after:translate-y-3
    hover:before:transition-transform hover:before:duration-500 hover:before:ease-in
    hover:after:transition-transform hover:after:duration-500 hover:after:ease-in
    after:transition-transform after:duration-500
    before:transition-transform before:duration-500
    ">SEE MORE
  </button>
</div>
</div>
</div>
  );
};

export default Landing;
