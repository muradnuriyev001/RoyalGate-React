import c from "./TopButton.module.scss";
import { useState, useEffect } from "react";
import { GoChevronUp } from "react-icons/go";

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    window.scrollY > 700 ? setShowButton(true) : setShowButton(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showButton && (
        <div onClick={scrollToTop} className={c.topButton}>
          <GoChevronUp className={c.topIcon} />
        </div>
      )}
    </>
  );
};

export default TopButton;
