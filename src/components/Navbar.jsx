import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../providers/theme/ThemeProvider";
import { fetchNews } from "../providers/news/FetchNews";
import NewsContext from "../providers/news/NewsProvider";

const Navbar = () => {
  const { dark } = useContext(ThemeContext);

  const { dispatch } = useContext(NewsContext);

  const [searchText, setSearchText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await fetchNews(searchText);

    dispatch({ type: "GET_NEWS", payload: data });

    setSearchText("");
  };

  return (
    <nav
      className={
        dark
          ? "navbar navbar-expand-lg bg-dark shadow sticky-top"
          : "navbar navbar-expand-lg bg-light shadow sticky-top"
      }
    >
      <div className="container-fluid">
        <Link
          className={dark ? "navbar-brand text-light" : "navbar-brand"}
          to="/"
        >
          Kal-Tak
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={dark ? "nav-link text-light" : "nav-link"}
                to="/sports-news"
              >
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={dark ? "nav-link text-light" : "nav-link"}
                to="/entertainment-news"
              >
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={dark ? "nav-link text-light" : "nav-link"}
                to="/business-news"
              >
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={dark ? "nav-link text-light" : "nav-link"}
                to="/politics-news"
              >
                Politics
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={dark ? "nav-link text-light" : "nav-link"}
                to="/international-news"
              >
                International
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control shadow-none me-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
