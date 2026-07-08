import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/news");
      setNews(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const totalNews = news.length;
  const breakingNews = news.filter((item) => item.breaking).length;
  const categories = [...new Set(news.map((item) => item.category))].length;

  const cards = [
    {
      title: "Total News",
      value: totalNews,
      color: "bg-blue-500",
    },
    {
      title: "Breaking News",
      value: breakingNews,
      color: "bg-red-500",
    },
    {
      title: "Categories",
      value: categories,
      color: "bg-green-500",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
          >
            <div
              className={`w-14 h-14 rounded-full ${card.color} mb-4`}
            ></div>

            <h2 className="text-gray-500 text-lg">
              {card.title}
            </h2>

            <h1 className="text-4xl font-bold mt-3">
              {card.value}
            </h1>
          </div>
        ))}
      </div>

      {/* Latest News */}
      <div className="bg-white rounded-xl shadow-lg mt-10 p-6">
        <h2 className="text-2xl font-bold mb-5">
          Latest News
        </h2>

        {news.length === 0 ? (
          <p className="text-gray-500">No news available.</p>
        ) : (
          <div className="space-y-4">
            {news.slice(0, 5).map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-3"
              >
                <div>
                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {item.category}
                  </p>
                </div>

                <span className="text-gray-400 text-sm">
                  {new Date(item.date).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}