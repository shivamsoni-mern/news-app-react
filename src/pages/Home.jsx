import WeatherCard from "../components/WeatherCard";
import Carousel from "../components/Carousel";
import NewsCard from "../components/NewsCard";
import { useContext, useEffect } from "react";
import NewsContext from "../providers/news/NewsProvider";
import { fetchNews } from "../providers/news/FetchNews";
import Loading from "../components/Loading";

const Home = () => {
  const { articles, dispatch } = useContext(NewsContext);

  const getNews = async function (topic) {
    const result = await fetchNews(topic);
    dispatch({
      type: "GET_NEWS",
      payload: result,
    });
  };

  useEffect(() => {
    dispatch({
      type: "RESET_NEWS",
    });
    getNews("india");
  }, []);

  if (!articles) {
    return <Loading />;
  }

  return (
    <>
      <Carousel />

      <section className="p-3 row g-3">
        <div className="col-sm-12 col-md-4">
          <WeatherCard />
        </div>
        <div className="col-sm-12 col-md-8">
          {articles.map((news, index) => (
            <NewsCard key={index} news={news} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
