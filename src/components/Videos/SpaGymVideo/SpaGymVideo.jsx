const SpaGymVideo = () => {
  return (
    <div>
      <iframe
        style={{ display: "block", filter: "grayscale(.15)" }}
        width="100%"
        height="650"
        src="https://www.youtube.com/embed/84GsQBe4d3A?si=FsZyrUQVVog4jiFH"
        title="Royal Gate Spa"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default SpaGymVideo;
