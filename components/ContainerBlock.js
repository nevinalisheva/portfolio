import Head from "next/head";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Landing from "../sections/Landing";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const meta = {
    title: "Nevin Alisheva - Junior Full Stack Developer",
    description: `Welcome to my developer portfolio, where you can find an overview of my skills, experience, and personal projects. I am a Junior Full Stack Developer with experience in JavaScript, React.js, Node.js and Next.js. I am passionate about coding and always eager to learn and grow in the field. Browse my projects and get in touch if you're interested in working together.`,
    image: "/favicon.ico",
    website: "nameofmywebsite.com",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`${meta.website}/${router.asPath}`} />
        <link rel="canonical" href={`${meta.website}/${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <main>
        <Landing theme={theme} />
        <Navbar
          theme={theme}
          setTheme={setTheme}
          mounted={mounted}
          setMounted={setMounted}
        />
        <div>{children} </div>
        <Footer />
      </main>
    </div>
  );
}
