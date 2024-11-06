import { useContext } from "react";
import DefaultImage from "../assets/default.png";
import ThemeContext from "../providers/theme/ThemeProvider";

const NewsCard = ({ news }) => {
  const { dark } = useContext(ThemeContext);
  return (
    <div
      className={dark ? "card mb-3 p-3 bg-dark text-light" : "card mb-3 p-3"}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={news?.urlToImage || DefaultImage}
            className="img-fluid rounded object-fit-cover"
            style={{ height: "250px", width: "400px" }}
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{news.title}</h5>
            <p className="card-text">{news.description}</p>
            <p className="card-text">
              <small className="text-body-secondary">{news.name}</small>
            </p>
            <p className="card-text">
              <small className="text-secondary">
                Source: {news.source.name}
              </small>
            </p>
            <p className="card-text">
              <small className="text-secondary">
                {new Date(news.publishedAt).toLocaleString("en-IN")}
              </small>
            </p>
            <a
              href={news.url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-success rounded-0 float-end"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
