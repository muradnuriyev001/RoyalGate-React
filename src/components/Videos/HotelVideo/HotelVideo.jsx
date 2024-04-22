const HotelVideo = () => {
  return (
    <div>
      <iframe
        style={{ display: "block", filter: "grayscale(.15)" }}
        width="100%"
        height="680"
        src="https://www.youtube.com/embed/ABfLMCcBlJ4?si=Xup71xZ6vMvkd7Zu"
        title="Royal Gate"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default HotelVideo;
