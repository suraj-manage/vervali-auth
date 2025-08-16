import "./Sidebar.scss";
import React from "react";

function Sidebar({ options = [], selectedId, onItemClick }) {
  return (
    <div className="sidebar">
      {options.map((item) => (
        <div
          key={item.id}
          className={item.id === selectedId ? "sidebar-item active" : "sidebar-item"}
          onClick={() => onItemClick(item.id)}
        >
          <span className="sidebar-icon">{item.img}</span>
          <span className="sidebar-text">{item.content}</span>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
