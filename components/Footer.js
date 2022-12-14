// import styles from "../styles/Home.module.css";

// const Footer = () => {
//   return (
//     <footer className={styles.footer}>
//       <p>© Nevin ALISHEVA 2022</p>
//     </footer>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 py-6 mt-24">
      <div className="text-center text-sm text-gray-500">
        <span className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2">
          {" "}
          Nevin ALISHEVA
        </span>{" "}
        &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
