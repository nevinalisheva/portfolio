import BtnGoTop from "../components/ButtontoTop";
import ContainerBlock from "../components/ContainerBlock";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Landing from "../sections/Landing";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <ContainerBlock
        title="Nevin Alisheva - Junior Full Stack Developer"
        description="Lorem Ipsum.. DESCRIPTION"
      >
        <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
          When you look
          <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span class="relative text-white"> annoyed</span>
          </span>
          all the time, people think that you are busy.
        </blockquote>
        <BtnGoTop  />
        <Experience />
        <About />
        <h3 class="text-3xl font-bold text-indigo-500 animate-bounce">
          Tailwind CSS Animation
        </h3>
        {/* <h3 class="text-3xl font-bold text-indigo-500 animate-ping">
        Tailwind CSS Animation
      </h3> */}
        {/* <div class="w-20 h-20 p-2 bg-blue-500 rounded-md animate-spin"></div>
      <div class="w-20 h-20 p-2 bg-purple-500 rounded-md animate-ping"></div>
      <div class="w-20 h-20 p-2 bg-green-500 rounded-md animate-bounce"></div>
      <div class="w-20 h-20 p-2 bg-purple-500 rounded-md animate-pulse"></div> */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          error eos ratione natus ut quas sed culpa, minus libero numquam
          eligendi provident laudantium cumque quis ad maiores iusto praesentium
          explicabo.
        </p>
        <div class="h-14 bg-gradient-to-r from-sky-500 to-indigo-500"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          error eos ratione natus ut quas sed culpa, minus libero numquam
          eligendi provident laudantium cumque quis ad maiores iusto praesentium
          explicabo.
        </p>
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          error eos ratione natus ut quas sed culpa, minus libero numquam
          eligendi provident laudantium cumque quis ad maiores iusto praesentium
          explicabo.
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
        <div class="bg-landing">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            officiis fugiat, nulla quasi, perferendis ratione similique
            quibusdam ea ducimus possimus nesciunt aspernatur aliquam aut quam,
            minus cumque repudiandae cupiditate magnam.
          </p>
        </div>
      </ContainerBlock>
    </div>
  );
}
