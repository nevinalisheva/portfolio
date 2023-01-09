import { useState, useEffect } from "react";
import ArrowUp from "./Arrow";
import { animateScroll as scroll} from "react-scroll";

const BtnGoTop = () => {
  const [showScrollIcon, setShowScrollIcon] = useState(false);

  //* Method 1: Scroll to top do manually
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //* Method 2: Scroll to top using react-scroll | Currently using
  const scrollToTop = () => {
    scroll.scrollTo(0, {
      duration: 100, //* IF Lesser = Quicker | IF Higher = Slower
      smooth: "easeOutQuint", //* Some smooth effects based on documentation here: https://easings.net/ and https://www.npmjs.com/package/react-scroll
    });
  };

  //* To display icon when scrolling vertically to bottom
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
          className="cursor-pointer fixed bottom-4 right-4 bg-violet-300 border rounded-full p-[2px]"
        >
          <ArrowUp className="fill-white" />
        </span>
      )}
    </>
  );
};
export default BtnGoTop;
