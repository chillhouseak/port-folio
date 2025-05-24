import React, { useEffect, useState } from "react";

const AdminMessage = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/messages")
      .then((res) => res.json())
      .then((data) => {
        setMessages(data.reverse());
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch messages:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="min-h-screen bg-[#f7f7f7] py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-orange-600 mb-8">📩 Contact Messages</h2>

      {loading ? (
        <p className="text-gray-600">Loading messages...</p>
      ) : messages.length === 0 ? (
        <p className="text-gray-600">No messages yet.</p>
      ) : (
        <div className="grid gap-6">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition duration-300"
            >
              <p className="text-lg font-semibold text-orange-700">{msg.subject}</p>
              <p className="text-sm text-gray-600">From: {msg.name} ({msg.email})</p>
              <p className="my-2 text-black">{msg.message}</p>
              <p className="text-xs text-gray-400">
                {new Date(msg.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AdminMessage;