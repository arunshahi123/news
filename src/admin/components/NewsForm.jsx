import { useState } from "react";

export default function NewsForm({ onSubmit }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    image: "",
    category: "Politics",
    breaking: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    if (!form.title || !form.description || !form.content) {
      alert("Please fill all required fields");
      return;
    }

    onSubmit(form);

    setForm({
      title: "",
      description: "",
      content: "",
      image: "",
      category: "Politics",
      breaking: false,
    });
  };

  return (
    <form
      onSubmit={submit}
      className="bg-white rounded-2xl shadow-lg p-4 md:p-6 w-full max-w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="font-semibold">News Title</label>

          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-semibold">Category</label>

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          >
            <option>Politics</option>
            <option>Technology</option>
            <option>Business</option>
            <option>Sports</option>
            <option>Entertainment</option>
            <option>Health</option>
            <option>Education</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label className="font-semibold">Short Description</label>

        <textarea
          rows="3"
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mt-2"
        />
      </div>

      <div className="mt-6">
        <label className="font-semibold">Full News Content</label>

        <textarea
          rows="8"
          name="content"
          value={form.content}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mt-2"
        />
      </div>

      <div className="mt-6">
        <label className="font-semibold">Image URL</label>

        <input
          type="text"
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="https://..."
          className="w-full border rounded-lg p-3 mt-2"
        />
      </div>

      <div className="mt-6 flex items-center gap-3">
        <input
          type="checkbox"
          name="breaking"
          checked={form.breaking}
          onChange={handleChange}
        />

        <span>Breaking News</span>
      </div>

      <button
        type="submit"
        className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg"
      >
        Publish News
      </button>
    </form>
  );
}