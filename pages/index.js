// import Head from "next/head";

import Image from "next/image";
import ContainerBlock from "../components/ContainerBlock";
// import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <ContainerBlock
      title="Nevin Alisheva - Junior Full Stack Developer"
      description="Lorem Ipsum.. DESCRIPTION"
    >
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti error
        eos ratione natus ut quas sed culpa, minus libero numquam eligendi
        provident laudantium cumque quis ad maiores iusto praesentium explicabo.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti error
        eos ratione natus ut quas sed culpa, minus libero numquam eligendi
        provident laudantium cumque quis ad maiores iusto praesentium explicabo.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti error
        eos ratione natus ut quas sed culpa, minus libero numquam eligendi
        provident laudantium cumque quis ad maiores iusto praesentium explicabo.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti error
        eos ratione natus ut quas sed culpa, minus libero numquam eligendi
        provident laudantium cumque quis ad maiores iusto praesentium explicabo.
      </p>
      {/* <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main> */}

      {/* <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer> */}
      {/* </div> */}
    </ContainerBlock>
  );
}
