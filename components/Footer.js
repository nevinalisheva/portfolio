import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 py-6 mt-24 bg-[#F1F1F1] dark:bg-neutral-900 flex flex-col justify-between items-center">
      <div className="flex">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/nevin-alisheva-746730262/"
          className="font-semibold px-3 py-2 mr-4 text-purple-300 dark:text-violet-300 hover:text-white hover:bg-purple-300 dark:hover:text-black dark:hover:bg-violet-300"
        >
          <i className="fab fa-linkedin"></i>
          <FaLinkedin size={20} />
        </Link>
        <Link
          target="_blank"
          href="https://github.com/nevinalisheva"
          className="font-semibold px-3 py-2 mr-4 text-purple-300 dark:text-violet-300 hover:text-white hover:bg-purple-300 dark:hover:text-black dark:hover:bg-violet-300"
        >
          <i className="fab fa-github"></i>
          <FaGithub size={20} />
        </Link>
        <Link
          target="_blank"
          href="https://www.codewars.com/users/nevinalisheva"
          className="font-semibold px-3 py-2 text-purple-300 dark:text-violet-300 hover:text-white hover:bg-purple-300 dark:hover:text-black dark:hover:bg-violet-300"
        >
          <i className="fas fa-code"></i>
          <SiCodewars size={20} />
        </Link>
        <Link
          target="_blank"
          href="/Nevin_Alisheva_CV.pdf"
          download
          className="px-3 py-2 text-purple-300 font-semibold dark:text-violet-300 hover:text-white hover:bg-purple-300 dark:hover:text-black dark:hover:bg-violet-300"
        >
          <i className="fas fa-file-download"></i> CV
        </Link>
      </div>
      <div className="text-sm text-gray-500">
        <span className="dark:text-gray-100 text-gray-900 font-bold text-lg ">
          {" "}
          Nevin ALISHEVA
        </span>{" "}
        &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
