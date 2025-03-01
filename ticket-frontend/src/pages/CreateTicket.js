import React, { useState } from "react";
import axios from "axios";

const CreateTicket = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:9090/api/tickets", {
      title,
      description,
      status: "OPEN",
    });
    window.location.href = "/";
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Nowe zgłoszenie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tytuł"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border mb-2"
        />
        <textarea
          placeholder="Opis"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          Dodaj zgłoszenie
        </button>
      </form>
    </div>
  );
};

export default CreateTicket;
