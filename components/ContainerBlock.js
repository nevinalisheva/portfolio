import React from "react";
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
    description: `Lorem Ipsum.. DESCRIPTION`,
    image: "/favicon.ico",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Nevin Alisheva" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mannupaaji" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )} */}
      </Head>
      <main>
        <Landing theme={theme} />
        {/* className="dark:bg-gray-900 w-full" */}
        <Navbar
          theme={theme}
          setTheme={setTheme}
          mounted={mounted}
          setMounted={setMounted}
        />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
