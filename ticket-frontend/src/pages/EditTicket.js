import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditTicket = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ticket, setTicket] = useState({ title: "", description: "", status: "OPEN" });

  useEffect(() => {
    axios.get(`http://localhost:9090/api/tickets/${id}`)
      .then(response => setTicket(response.data))
      .catch(error => console.error("Błąd pobierania zgłoszenia:", error));
  }, [id]);

  const handleChange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:9090/api/tickets/${id}`, ticket);
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Edytuj zgłoszenie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={ticket.title}
          onChange={handleChange}
          className="w-full p-2 border mb-2"
        />
        <textarea
          name="description"
          value={ticket.description}
          onChange={handleChange}
          className="w-full p-2 border mb-2"
        />
        <select
          name="status"
          value={ticket.status}
          onChange={handleChange}
          className="w-full p-2 border mb-2"
        >
          <option value="OPEN">Otwarte</option>
          <option value="IN_PROGRESS">W toku</option>
          <option value="CLOSED">Zamknięte</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          Zapisz zmiany
        </button>
      </form>
    </div>
  );
};

export default EditTicket;
