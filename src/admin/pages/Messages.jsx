import { useEffect, useState } from "react";
import axios from "axios";

export default function Messages() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/contact");
      setMessages(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load messages");
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const deleteMessage = async (id) => {
    if (!window.confirm("Delete this message?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/contact/${id}`);

      setMessages((prev) => prev.filter((msg) => msg.id !== id));

      alert("Message deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to delete message");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Contact Messages
      </h1>

      {messages.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-8 text-center text-gray-500">
          No messages found.
        </div>
      ) : (
        <div className="space-y-5">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-white rounded-xl shadow p-6 border"
            >
              <div className="flex justify-between">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold">
                    {msg.fullName}
                  </h2>

                  <p>
                    <strong>Email:</strong> {msg.email}
                  </p>

                  <p>
                    <strong>Subject:</strong> {msg.subject}
                  </p>

                  <p>
                    <strong>Message:</strong>
                  </p>

                  <p className="text-gray-700">
                    {msg.message}
                  </p>

                  <p className="text-sm text-gray-500">
                    {new Date(msg.date).toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={() => deleteMessage(msg.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg h-fit"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}