import BtnGoTop from "../components/ButtontoTop";
import ContainerBlock from "../components/ContainerBlock";
import Seperator from "../components/Seperator";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Experience from "../sections/Experience";
import Introduction from "../sections/Intro";

export default function Home({theme}) {
  return (
      <ContainerBlock
        title="Nevin Alisheva - Junior Full Stack Developer"
        description="Welcome to my developer portfolio, where you can find an overview of my skills, experience, and personal projects. I am a Junior Full Stack Developer with experience in JavaSßcript, React.js, Node.js and Next.js. I am passionate about coding and always eager to learn and grow in the field. Browse my projects and get in touch if you're interested in working together."
      >
        <Introduction />
        <Seperator />
        <BtnGoTop />
        <Experience />
        <Seperator />
        <About />
        <Seperator />
        <Contact theme={theme} />
      </ContainerBlock>
  );
}
