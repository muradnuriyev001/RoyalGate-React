import c from "./Marquee.module.scss";

const Marquee = () => {
  return (
    <div className={c.marqueeSettings}>
      <marquee>Welcome to Royal Gate Luxury Hotel!</marquee>
    </div>
  );
};

export default Marquee;
