import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

import {
  FaFire,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
const Home = () => {
  const API_KEY = "pub_66a96a8764104a74975763d65e877533";

  const breakingNews = [
    "Government announces new budget for infrastructure.",
    "Nepal wins international cricket match.",
    "Heavy rainfall expected across the country."
  ];

  // Create state FIRST
  const [latestNews, setLatestNews] = useState([]);

  // Fetch API
  useEffect(() => {
    axios
      .get(
        `https://newsdata.io/api/1/latest?apikey=${API_KEY}&country=np&language=ne`
      )
      .then((res) => {
        setLatestNews(res.data.results || []);
      })
      .catch((err) => console.log(err));
  }, []);

  // Now you can use latestNews
  const featuredNews = latestNews[0];
  const sports = latestNews.slice(0, 2);
  const business = latestNews.slice(2, 4);

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Breaking News */}

      <div className="bg-red-600 text-white">

        <div className="max-w-7xl mx-auto flex">

          <div className="bg-blue-900 px-5 py-3 flex items-center gap-2 font-bold">
            <FaFire />
            BREAKING
          </div>

          <marquee className="py-3 font-semibold">
            {breakingNews.join(" 🔴 ")}
          </marquee>

        </div>

      </div>

      {/* Hero */}

      <div className="max-w-7xl mx-auto px-4 py-8">

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Main News */}

          <div className="lg:col-span-2 bg-white rounded-lg shadow overflow-hidden">

            <img
            src={featuredNews?.image_url || "https://via.placeholder.com/900x500"}
              alt=""
              className="h-[420px] w-full object-cover"
            />

            <div className="p-6">

              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                FEATURED
              </span>

              <h1 className="text-4xl font-bold mt-4 text-blue-900">
                {featuredNews?.title}
              </h1>

              <div className="flex items-center gap-2 text-gray-500 mt-3">

                <FaClock />

                {featuredNews?.pubDate}

              </div>

              <p className="mt-5 text-gray-700 leading-8">
                {featuredNews?.description}
              </p>

             <Link
                to="/news"
                state={featuredNews}
                className="mt-6 bg-red-600 text-white px-6 py-3 rounded hover:bg-blue-900 transition inline-block"
                >
                Read More
                </Link>

            </div>

          </div>

          {/* Trending */}

          <div className="space-y-5">

            <div className="bg-white shadow rounded-lg p-5">

              <h2 className="text-2xl font-bold text-blue-900 border-b pb-3">
                Trending News
              </h2>

              {latestNews.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 py-4 border-b"
                >
                  <img
                   src={item.image_url || "https://via.placeholder.com/500x300"}
                    className="w-24 h-20 object-cover rounded"
                  />

                  <div>

                    <h3 className="font-semibold hover:text-red-600 cursor-pointer">
                      {item.title}
                    </h3>
                    <Link
                        to="/news"
                        state={item}
                        className="text-red-600 mt-2 flex items-center gap-2"
                        >
                        Read
                        <FaArrowRight/>
                    </Link>
                   

                  </div>

                </div>
              ))}

            </div>

            <div className="bg-blue-900 text-white rounded-lg p-8 text-center">

              Advertisement

            </div>

          </div>

        </div>

      </div>

      {/* Latest News */}

      <section className="max-w-7xl mx-auto px-4 py-8">

        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Latest News
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {latestNews.map((news, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl duration-300"
            >
              <img
                src={news.image_url || "https://via.placeholder.com/500x300"}
                className="h-52 w-full object-cover"
              />

              <div className="p-5">

                <h3 className="font-bold text-lg hover:text-red-600 cursor-pointer">
                  {news.title}
                </h3>
                <Link
to="/news"
state={news}
className="mt-4 inline-block text-red-600"
>
Read More →
</Link>
                

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Categories */}

      <section className="max-w-7xl mx-auto px-4 py-10">

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Sports */}

          <div>

            <h2 className="text-3xl font-bold text-white bg-blue-900 px-5 py-3 rounded">
              Sports
            </h2>

            {sports.map((item, index) => (
              <div
                key={index}
                className="bg-white mt-5 flex gap-4 rounded shadow overflow-hidden"
              >
                <img
                  src={item.image_url || "https://via.placeholder.com/500x300"}
                  className="w-40 h-32 object-cover"
                />

                <div className="p-4">

                  <h3 className="font-bold hover:text-red-600">
                    {item.title}
                  </h3>

                  <Link
to="/news"
state={item}
className="mt-3 inline-block text-red-600"
>
Read More
</Link>

                </div>

              </div>
            ))}

          </div>

          {/* Business */}

          <div>

            <h2 className="text-3xl font-bold text-white bg-red-600 px-5 py-3 rounded">
              Business
            </h2>

            {business.map((item, index) => (
              <div
                key={index}
                className="bg-white mt-5 flex gap-4 rounded shadow overflow-hidden"
              >
                <img
                 
                  className="w-40 h-32 object-cover"
                />

                <div className="p-4">

                  <h3 className="font-bold hover:text-blue-900">
                    {item.title}
                  </h3>

                  <Link
to="/news"
state={item}
className="mt-3 inline-block text-red-600"
>
Read More
</Link>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>
                <Footer />
    </div>
  );
};

export default Home;