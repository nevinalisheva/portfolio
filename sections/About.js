// import ShuffleText from "react-shuffle-text";

const About = () => {
  return (
    <div id="about">
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
        </div>
      </div>
    </div>
  );
};

export default About;
