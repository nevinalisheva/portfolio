import { useState, useEffect } from "react";
import ArrowUp from "./Arrow";
import { animateScroll as scroll} from "react-scroll";

const BtnGoTop = () => {
  const [showScrollIcon, setShowScrollIcon] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    scroll.scrollTo(0, {
      duration: 100, 
      smooth: "easeOutQuint", 
    });
  };

  const updateScroll = () => {
    const scroll_position = window.scrollY;

    scroll_position > 200 ? setShowScrollIcon(true) : setShowScrollIcon(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <>
      {showScrollIcon && (
        <span
          onClick={scrollToTop}
          className="cursor-pointer fixed bottom-4 right-4 bg-purple-300 dark:bg-violet-300 border rounded-full p-[2px] z-20"
        >
          <ArrowUp className="fill-white" />
        </span>
      )}
    </>
  );
};
export default BtnGoTop;
