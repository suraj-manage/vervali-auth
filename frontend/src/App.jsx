import React from "react";
import { Route, Routes } from "react-router-dom";
import FirstPage from "./page/FirstPage";
import EditTicket from "./page/EditTicket";
import RoleConfig from "./components/RoleConfig";
import Notifications from "./components/Notifications";
import AssetsConfig from "./components/AssetsConfig";
import Credits from "./components/Credits";
import TicketCategory from "./components/TicketCategory";
import TokenConfig from "./components/TokenConfig";
import SystemConfig from "./components/SystemConfig";
import Priorities from "./page/Priorities";

function App(){
  return(
    <>
        <Routes>
          <Route path="/role-config" element={<RoleConfig />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/assets-config" element={<AssetsConfig />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/ticket-category" element={<TicketCategory />} />
        <Route path="/token-config" element={<TokenConfig />} />
        <Route path="/system-config" element={<SystemConfig />} />
        <Route path="/EditTicket" element={<EditTicket/>}/>
        <Route path="/Priorities" element={<Priorities/>}/>
        <Route path="/" element={<FirstPage/>} />
        </Routes>
    </>
      )
}
export default App;