export const fetchNews = async function (topic) {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1); // Subtract 1 day

  const formattedDate = yesterday.toISOString().split("T")[0]; // Extract YYYY-MM-DD

  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${topic}&from=${formattedDate}&sortBy=publishedAt&apiKey=1ff062b7776542448450277a7efa3f7a`
  );

  const data = await response.json();
  return data.articles;
};
