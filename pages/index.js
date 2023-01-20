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
        description="Lorem Ipsum.. DESCRIPTION"
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
