import { useContext } from "react";
import NewsContext from "../providers/news/NewsProvider";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  const { articles } = useContext(NewsContext);
  return (
    <div
      id="carouselExampleFade"
      className="mt-3 carousel slide carousel-fade shadow carousel-dark"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {articles.map((news, index) => (
          <CarouselItem src={news.urlToImage} key={index} index={index} />
        ))}
      </div>
      <button
        className="carousel-control-prev carousel-btn"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next carousel-btn"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
