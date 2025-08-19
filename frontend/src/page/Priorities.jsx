import React, { useState, useEffect } from "react";
import "../components/Priorities.scss";
import { useNavigate, useLocation } from "react-router-dom";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
;
const colors = [
  "#4caf50",
  "lightblue",
  "#ba9805ff",
  "orange",
  "black",
  "red",
  "#733924ff",
  "#641edbff",
  "#db1ec8ff",
];

export default function Priorities() {
  const navigate = useNavigate();
  const location = useLocation();
  const existingPriority = location.state; // may be undefined if new

  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");

  useEffect(() => {
    if (existingPriority) {
      setPriority(existingPriority.name || existingPriority.priority);
      setDescription(existingPriority.description);
      setSelectedColor(existingPriority.selectedColor || existingPriority.attack || "");
      setHours((existingPriority.duration?.hr ?? 0).toString().padStart(2, "0"));
      setMinutes((existingPriority.duration?.min ?? 0).toString().padStart(2, "0"));
    }
  }, [existingPriority]);

  const handleSave = () => {
    if (!priority || !description || !selectedColor) {
      alert("Please fill all fields");
      return;
    }

    const data = {
      id: existingPriority?.id || Date.now(), // reuse id if editing
      priority,
      description,
      selectedColor,
      duration: { hr: Number(hours), min: Number(minutes) },
      date: new Date().toLocaleString(),
    };

    navigate("/EditTicket", { state: data });
  };

  return (
    <>
      {/* Header */}
      <div className="header">
        <button className="back-btn" onClick={() => navigate(-1)}><ArrowBackIosIcon/> Back</button>
        <h1>{existingPriority ? "Edit Priority" : "New Priority"}</h1>
      </div>
      <div className="new-priorities">

      <h2 style={{display:"block"}}>{existingPriority ? "Edit old Priority" : "Add New Priority"}</h2>
        {/* Form */}
        <div className="form">
          <div className="form-row">
            <label>Name of Priority</label>
            <input
              type="text"
              placeholder="Low Priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label>Description</label>
            <input
              type="text"
              placeholder="Non-urgent issue"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label>Attach Category</label>
            <div className="color-options">
              {colors.map((c, idx) => (
                <span
                  key={idx}
                  className={`color-circle ${selectedColor === c ? "selected" : ""}`}
                  style={{ backgroundColor: c }}
                  onClick={() => setSelectedColor(c)}
                ></span>
              ))}
            </div>
          </div>
          <div className="form-row">
            <label>Duration</label>
            <div className="duration">
              <div className="duration-group">
                <div className="time-input-container">
                  <input
                    type="number"
                    onChange={(e) =>
                      setHours(e.target.value ? e.target.value.padStart(2, "0"):"00")
                    }
                  />
                  <div style={{paddingLeft:"5px"}}>Hrs</div> 
                  <AccessTimeOutlinedIcon className="icon" />  
                </div>
              </div>
              <div className="duration-group">
                <div className="time-input-container">
                  <input
                    type="number"
                    onChange={(e) =>
                      setMinutes(e.target.value ? e.target.value.padStart(0, "0") : "00")
                    }
                  />
                    <div style={{paddingLeft:"5px"}}>Mins</div>
                  <AccessTimeOutlinedIcon className="icon" />
                </div>
              </div>
            </div>
          </div>

    
        {/* Buttons */}
        <div className="actions">
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
        </div>
        
         <div className="actions1">
            <button className="cancel-btn" onClick={() => navigate(-1)}>
            Cancel
          </button>
          </div>
      </div>
      </div>
    </>
  );
}
