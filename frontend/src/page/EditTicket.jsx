import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../components/EditTicket.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PlaylistAddTwoToneIcon from '@mui/icons-material/PlaylistAddTwoTone';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function EditTicket() {
  const navigate = useNavigate();
  const location = useLocation();
  const newprior = location.state; // receive new/edited priority

  const [priorities, setPriorities] = useState([
    {
      id: 1,
      name: "Low Priority",
      description: "Non-urgent issue",
      duration: { hr: 0, min: 45 },
      attack: "#4caf50",
      date: new Date().toLocaleString(),
    },
    {
      id: 2,
      name: "Medium Priority",
      description: "Needs attention",
      duration: { hr: 0, min: 45 },
      attack: "#ff9800",
      date: new Date().toLocaleString(),
    },
    {
      id: 3,
      name: "High Priority",
      description: "Requires immediate action",
      duration: { hr: 0, min: 45 },
      attack: "#f44336",
      date: new Date().toLocaleString(),
    },
    {
      id: 4,
      name: "Critical Priority",
      description: "Urgent issue",
      duration: { hr: 0, min: 45 },
      attack: "#9c27b0",
      date: new Date().toLocaleString(),
    },
  ]);

  // Add new or edit existing priority
  useEffect(() => {
    if (newprior) {
      setPriorities(prev => {
        const exists = prev.some(p => p.id === newprior.id);
        if (exists) {
          // Update existing row
          return prev.map(p =>
            p.id === newprior.id
              ? {
                  ...p,
                  name: newprior.priority,
                  description: newprior.description,
                  duration: newprior.duration,
                  attack: newprior.selectedColor,
                  date: newprior.date,
                }
              : p
          );
        } else {
          // Add new row
          return [
            ...prev,
            {
              id: newprior.id,
              name: newprior.priority,
              description: newprior.description,
              duration: newprior.duration,
              attack: newprior.selectedColor,
              date: newprior.date,
            },
          ];
        }
      });
    }
  }, [newprior]);

  function handleDelete(id) {
    setPriorities(prev => prev.filter(item => item.id !== id));
  }

  return (
    <>
      {/* Top bar */}
      <div className="top-bar">
        <div className="left-section">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <ArrowBackIosIcon />
            <div className="text">Back</div>
          </button>
          <h2>Ticket Priorities Configuration</h2>
        </div>

        <button className="add-btn" onClick={() => navigate("/Priorities")}>
          <AddTwoToneIcon />Add New Category
        </button>
      </div>

      <div className="edit-ticket">
        {/* Table Header */}
        <div className="table-header">
          <span>Script</span>
          <span>Date</span>
          <span className="action">Action</span>
        </div>

        {/* Table Rows */}
        {priorities.map(item => (
          <div key={item.id} className="table-row">
            {/* Script column */}
            <div className="script-info">
              <div className="icon">
                <PlaylistAddTwoToneIcon />
              </div>
              <div>
                <strong>{item.name.split(" ")[0]}</strong>
                <span className="duration" style={{ backgroundColor: item.attack }}>
                  {item.duration.hr}h {item.duration.min}m
                </span>
                <p className="desc">{item.description}</p>
              </div>
            </div>

            {/* Date column */}
            <div className="date">
              <span className="day">{new Date(item.date).toLocaleDateString()}</span>
              <span className="time">
                {String(new Date(item.date).getHours()).padStart(2, "0")}:
                {String(new Date(item.date).getMinutes()).padStart(2, "0")}
              </span>
            </div>

            {/* Action column */}
            <div className="actions">
              <button
                className="edit-btn"
                onClick={() => navigate("/Priorities", { state: item })}
              >
                <i className="bi bi-pencil-square" style={{ fontSize: "20px", marginRight: "10px", background: "#7d049" }}></i>
                <h4>Edit</h4>
              </button>
              <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                <DeleteOutlineIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default EditTicket;
