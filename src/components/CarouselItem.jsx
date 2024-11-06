const CarouselItem = ({ src, index }) => {
  return (
    <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
      <img
        style={{
          height: "60vh",
          objectFit: "contain",
          transform: "scale(1.5)",
        }}
        src={src}
        className="d-block w-100"
        alt="..."
      />
    </div>
  );
};

export default CarouselItem;
