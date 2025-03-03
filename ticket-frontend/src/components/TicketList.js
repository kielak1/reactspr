import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get("https://backend.reactspr.kielak.com/api/tickets")
      .then(response => setTickets(response.data))
      .catch(error => console.error("Błąd pobierania danych:", error));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Czy na pewno chcesz usunąć to zgłoszenie?")) {
      await axios.delete(`https://backend.reactspr.kielak.com/api/tickets/${id}`);
      setTickets(tickets.filter(ticket => ticket.id !== id));
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Lista zgłoszeń</h2>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id} className="p-4 border-b flex justify-between items-center">
            <div>
              <h3 className="font-bold">{ticket.title}</h3>
              <p>{ticket.description}</p>
              <p className="text-sm text-gray-500">Status: {ticket.status}</p>
            </div>
            <div className="flex gap-2">
              <Link to={`/edit/${ticket.id}`} className="bg-yellow-500 text-white px-3 py-1 rounded">Edytuj</Link>
              <button onClick={() => handleDelete(ticket.id)} className="bg-red-500 text-black px-3 py-1 rounded">
                Usuń
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;
