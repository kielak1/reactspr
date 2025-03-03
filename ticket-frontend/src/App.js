import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TicketList from "./components/TicketList";
import CreateTicket from "./pages/CreateTicket";
import EditTicket from "./pages/EditTicket";
import Copyright from "./components/Copyright";

const App = () => {
  return (
    <Router>
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold">System Zgłoszeń</h1>
        <Routes>
          <Route path="/" element={<Copyright />} />
        </Routes>
        <nav className="mb-4">
          <Link to="/" className="mr-4 text-blue-500">Lista zgłoszeń</Link>
          <Link to="/new" className="text-blue-500">Nowe zgłoszenie</Link>
        </nav>
        <Routes>
          <Route path="/" element={<TicketList />} />
          <Route path="/new" element={<CreateTicket />} />
          <Route path="/edit/:id" element={<EditTicket />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
