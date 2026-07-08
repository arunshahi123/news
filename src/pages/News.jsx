import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../component/Footer";

export default function News() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Politics",
    "Technology",
    "Business",
    "Sports",
    "Entertainment",
    "Health",
    "Education",
  ];

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/news");

      // newest first
      setNews(res.data.reverse());
    } catch (err) {
      console.log(err);
    }
  };

  const filteredNews =
    category === "All"
      ? news
      : news.filter((item) => item.category === category);

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Page Title */}
      <div className="bg-blue-900 text-white py-10 text-center">
        <h1 className="text-4xl font-bold">Latest News</h1>
        <p className="mt-2">
          Stay updated with the latest news from Nepal.
        </p>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-5 py-2 rounded-full transition ${
              category === cat
                ? "bg-red-600 text-white"
                : "bg-white border hover:bg-red-600 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredNews.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow hover:shadow-xl overflow-hidden transition"
          >
            <img
              src={item.image || "https://via.placeholder.com/500x300"}
              alt={item.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">

              <div className="flex justify-between items-center mb-3">
                <span className="bg-blue-900 text-white px-3 py-1 rounded text-sm">
                  {item.category}
                </span>

                {item.breaking && (
                  <span className="bg-red-600 text-white px-3 py-1 rounded text-sm">
                    Breaking
                  </span>
                )}
              </div>

              <h2 className="font-bold text-xl mb-3">
                {item.title}
              </h2>

              <p className="text-gray-600 line-clamp-3">
                {item.description}
              </p>

              <p className="text-sm text-gray-500 mt-3">
                {item.date
                  ? new Date(item.date).toLocaleDateString()
                  : ""}
              </p>

              <button
                className="mt-5 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded"
              >
                Read More
              </button>

            </div>
          </div>
        ))}

      </div>

      <Footer />
    </div>
  );
}