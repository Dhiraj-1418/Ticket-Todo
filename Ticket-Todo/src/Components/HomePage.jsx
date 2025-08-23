import React from "react";
import TicketForm from "./TicketForm";
import Navabar from "./Navabar";

function HomePage() {
  return (
    <div className="container-fluid">
      <div>
        <Navabar />
      </div>

      <div className="container mt-2" >
        <TicketForm />
      </div>
    </div>
  );
}

export default HomePage;
