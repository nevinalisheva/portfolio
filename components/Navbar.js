import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  console.log(router.asPath);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-gradient-to-r from-violet-400 to-violet-700  shadow-violet-400 shadow-2xl"
          : "bg-gradient-to-r from-violet-200 to-purple-400  shadow-2xl"
      } sticky top-0 max-w-6xl  mx-auto px-4 py-5 md:py-8 z-20 rounded-lg`}
    >
      <div className="flex  md:flex-row justify-between items-center  ">
        <Link href="/" className="text-xl font-bold ">
          Home
        </Link>
        <Link href="#experience" className="text-xl font-bold">
          Experience/Projects
        </Link>
        <Link href="#about" className="text-xl font-bold">
          About Me/Contact
        </Link>

        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-10 h-10 p-3 rounded focus:outline-none"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
            >
              {theme === "dark" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

// import { SunIcon, MoonIcon } from "@heroicons/react/solid";

// const Navbar = () => {
//   const { systemTheme, theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const renderThemeChanger = () => {
//     if (!mounted) return null;

//     const currentTheme = theme === "system" ? systemTheme : theme;

//     if (currentTheme === "dark") {
//       return (
//         <SunIcon
//           className="w-10 h-10 text-yellow-500 "
//           role="button"
//           onClick={() => setTheme("light")}
//         />
//       );
//     } else {
//       return (
//         <MoonIcon
//           className="w-10 h-10 text-gray-900 "
//           role="button"
//           onClick={() => setTheme("dark")}
//         />
//       );
//     }
//   };

//   return (
//     <header className="h-15 shadow-sm dark:border-gray-700">
//       <div className="container  px-4 sm:px-6 py-4 flex justify-between items-center">
//         {renderThemeChanger()}
//       </div>
//     </header>
//   );
// };

// export default Navbar;
