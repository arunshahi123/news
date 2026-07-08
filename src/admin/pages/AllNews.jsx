import { useEffect, useState } from "react";
import axios from "axios";

export default function AllNews() {
  const [news, setNews] = useState([]);

  const [editingNews, setEditingNews] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
    date: "",
    breaking: false,
  });

  // Fetch News
  const fetchNews = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/news");
      setNews(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load news");
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // Delete News
  const deleteNews = async (id) => {
    if (!window.confirm("Delete this news?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/news/${id}`);

      setNews(news.filter((item) => item.id !== id));

      alert("News deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to delete");
    }
  };

  // Edit Button
  const handleEdit = (item) => {
    setEditingNews(item.id);

    setFormData({
      title: item.title,
      category: item.category,
      description: item.description,
      image: item.image,
      date: item.date.split("T")[0],
      breaking: item.breaking,
    });
  };

  // Update News
  const updateNews = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/news/${editingNews}`,
        formData
      );

      alert("News updated successfully!");

      setEditingNews(null);

      fetchNews();
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">All News</h1>

      {news.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-md border p-5 mb-6"
        >
          {editingNews === item.id ? (
            <>
              <input
                className="border p-2 w-full mb-3"
                placeholder="Title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />

              <input
                className="border p-2 w-full mb-3"
                placeholder="Category"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              />

              <input
                className="border p-2 w-full mb-3"
                placeholder="Image URL"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
              />

              <input
                type="date"
                className="border p-2 w-full mb-3"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />

              <textarea
                rows="5"
                className="border p-2 w-full mb-3"
                placeholder="Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    description: e.target.value,
                  })
                }
              />

              <label className="flex items-center gap-2 mb-4">
                <input
                  type="checkbox"
                  checked={formData.breaking}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      breaking: e.target.checked,
                    })
                  }
                />
                Breaking News
              </label>

              <div className="flex gap-3">
                <button
                  onClick={updateNews}
                  className="bg-green-600 text-white px-5 py-2 rounded"
                >
                  Save
                </button>

                <button
                  onClick={() => setEditingNews(null)}
                  className="bg-gray-500 text-white px-5 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col md:flex-row gap-5">
              <img
                src={
                  item.image && item.image.trim() !== ""
                    ? item.image
                    : "https://picsum.photos/300/200"
                }
                alt={item.title}
                className="w-full md:w-72 h-48 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h2 className="text-2xl font-bold">{item.title}</h2>

                <p className="text-gray-500 text-sm">
                  <strong>{item.category}</strong> •{" "}
                  {new Date(item.date).toLocaleDateString()}
                </p>

                {item.breaking && (
                  <span className="inline-block mt-2 bg-red-600 text-white px-2 py-1 rounded text-xs">
                    BREAKING
                  </span>
                )}

                <p className="mt-3">{item.description}</p>

                <div className="mt-5 flex gap-3">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-blue-600 text-white px-5 py-2 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteNews(item.id)}
                    className="bg-red-600 text-white px-5 py-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}