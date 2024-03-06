const HotelVideo = () => {
  return (
    <div>
      <iframe
        style={{ display: "block", filter: "grayscale(.15)" }}
        width="100%"
        height="680"
        src="https://www.youtube.com/embed/z8h3jxSOL3o?si=LdN6J3XN8C96JbfB"
        title="Royal Gate"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default HotelVideo;
