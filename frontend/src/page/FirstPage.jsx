import "../components/FirstPage.scss";
import { Link } from "react-router-dom";

// MUI icons
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import CategoryIcon from "@mui/icons-material/Category";
import TokenIcon from "@mui/icons-material/Token";
import BuildIcon from "@mui/icons-material/Build";

function FirstPage() {
  let options = [
    { id: 1, content: "Role Configuration", img: <HomeIcon />, navpath: "/role-config" },
    { id: 2, content: "Notification & Announcement", img: <NotificationsIcon />, navpath: "/notifications" },
    { id: 3, content: "SM & Assets configuration", img: <SettingsIcon />, navpath: "/assets-config" },
    { id: 4, content: "Credits Configuration", img: <CreditScoreIcon />, navpath: "/credits" },
    { id: 5, content: "Ticket Category Configuration", img: <CategoryIcon />, navpath: "/ticket-category" },
    { id: 6, content: "Token Configuration", img: <TokenIcon />, navpath: "/token-config" },
    { id: 7, content: "General System Configuration", img: <BuildIcon />, navpath: "/system-config" },
  ];

  return (
    <>
    <div>
        Configuration
        <div>
            <div className="sidebar">
                {options.map((item) => (
                    <Link key={item.id} to={item.navpath} className="sidebar-item">
                    <span className="sidebar-icon">{item.img}</span>
                    <span className="sidebar-text">{item.content}</span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
    </>
  );
}

export default FirstPage;
