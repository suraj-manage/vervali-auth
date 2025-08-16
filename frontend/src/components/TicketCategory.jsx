import React from "react";
import { useNavigate } from "react-router-dom";
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import "./ticket-category.scss";
import EditTicket from "../page/EditTicket";
import 'bootstrap-icons/font/bootstrap-icons.css';

function TicketCategory() {
  const navigate = useNavigate();

  const category = [
    { id: 1, title: 'SLA Policies & Ticket Priorities', description: 'Prioritie Configuration' },
    { id: 2, title: 'Ticket Status and Tickets categories', description: '' }
  ];

  return (
    <div className="ticket-list">
      {category.map((item) => (
        <div className="ticket-row" key={item.id}>
          <div className="content">
            <div className="content-icon"><LowPriorityIcon /></div>
            <div className="content-text">
              <div className="content-title-text">{item.title}</div>
              <div className="content-desp-text">{item.description}</div>
            </div>
          </div>
          <button
            className="edit-btn"
            onClick={() => navigate("/EditTicket")}
          >
                <i className="bi bi-pencil-square" style={{ fontSize: "14px", marginRight: "10px"}}></i>
                <h4>Edit</h4>
          </button>
        </div>
      ))}
    </div>
  );
}

export default TicketCategory;
