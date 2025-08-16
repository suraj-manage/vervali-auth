import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../components/FirstPage.scss";
import "../App.scss";

// content components
import RoleConfig from "../components/RoleConfig";
import Notifications from "../components/Notifications";
import AssetsConfig from "../components/AssetsConfig";
import Credits from "../components/Credits";
import TicketCategory from "../components/TicketCategory";
import TokenConfig from "../components/TokenConfig";
import SystemConfig from "../components/SystemConfig";

// icons
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import CategoryIcon from "@mui/icons-material/Category";
import TokenIcon from "@mui/icons-material/Token";
import BuildIcon from "@mui/icons-material/Build";

function FirstPage() {
  const [selected, setSelected] = useState(5); // default TicketCategory
  const [drawerOpen, setDrawerOpen] = useState(false); // mobile sidebar toggle

  const options = [
    { id: 1, content: "Role Configuration", img: <HomeIcon /> },
    { id: 2, content: "Notification & Announcement", img: <NotificationsIcon /> },
    { id: 3, content: "SM & Assets configuration", img: <SettingsIcon /> },
    { id: 4, content: "Credits Configuration", img: <CreditScoreIcon /> },
    { id: 5, content: "Ticket Category Configuration", img: <CategoryIcon /> },
    { id: 6, content: "Token Configuration", img: <TokenIcon /> },
    { id: 7, content: "General System Configuration", img: <BuildIcon /> },
  ];

  const renderContent = () => {
    switch (selected) {
      case 1: return <RoleConfig />;
      case 2: return <Notifications />;
      case 3: return <AssetsConfig />;
      case 4: return <Credits />;
      case 5: return <TicketCategory />;
      case 6: return <TokenConfig />;
      case 7: return <SystemConfig />;
      default: return <TicketCategory />;
    }
  };

  return (
    <div className="first-page">
      <h1>Configuration</h1>

      {/* Hamburger button for mobile/tablet */}
      <div className="hamburger" onClick={() => setDrawerOpen(!drawerOpen)}>
        &#9776; {/* 3-line hamburger icon */}
      </div>

      {/* Overlay when drawer is open */}
      {drawerOpen && <div className="overlay" onClick={() => setDrawerOpen(false)}></div>}

      <div className={`box1 ${drawerOpen ? "drawer-open" : ""}`}>
        {/* Sidebar */}
        <Sidebar
          options={options}
          selectedId={selected}
          onItemClick={(id) => {
            setSelected(id);
            setDrawerOpen(false); // auto-close sidebar on mobile
          }}
        />

        {/* Main content */}
        <div className="main-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
