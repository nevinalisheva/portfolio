// import ShuffleText from "react-shuffle-text";

const About = () => {
  return (
    <div id="about">
      {/* <ShuffleText content="Zhuangbility" /> */}
      <h1 className="text-3xl flex font-semibold text-purple-500 ">
        Hi all, I am Nevin<span class="animate-waving-hand">👋🏻</span>!
      </h1>
      <p>
        A passionate Full Stack Web Developer having an experience of building
        Web and Mobile applications with JavaScript / Reactjs / Nodejs / Nextjs
        and some other cool libraries and frameworks.
      </p>
      <div className="px-8">
        <div className="flex flex-col space-y-8 items-start justify-start">
          <h1 className="font-mono text-7xl font-bold text-yellow-500 tracking-wide">
            Pastros!
          </h1>
          <h3 className="font-mono text-back text-5xl">
            A Bot that{" "}
            <strong className="bg-blue-400 text-white">tweets</strong> about
            your favorite <strong className="bg-yellow-400">pastry</strong>{" "}
            recipes
          </h3>
          <div className="font-mono text-5xl flex space-x-3 ">
            <h4> Posts about </h4>
            {/* <strong className="bg-yellow-400 px-1">
              <Typical
                steps={[
                  "Cakes",
                  1000,
                  "Pies",
                  1000,
                  "Biscuits",
                  1000,
                  "Scones",
                  1000,
                ]}
                wrapper="p"
                loop={Infinity}
              />
            </strong> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
