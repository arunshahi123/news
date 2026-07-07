import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../component/Footer";

const API_KEY = "pub_66a96a8764104a74975763d65e877533";

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsdata.io/api/1/latest?apikey=${API_KEY}&country=np&language=ne`
      )
      .then((res) => {
        console.log(res.data);
        setNews(res.data.results || []);
      })
      .catch((err) => {
        console.error(err.response?.data || err.message);
      });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            <img
              src={item.image_url || "https://via.placeholder.com/500x300"}
              alt={item.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-4">
              <h2 className="font-bold text-lg">{item.title}</h2>

              <p className="mt-3 text-gray-600">
                {item.description}
              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block bg-red-600 text-white px-4 py-2 rounded"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}