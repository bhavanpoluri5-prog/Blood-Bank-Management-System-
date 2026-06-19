import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DonorManagement from "./pages/DonorManagement";

import BloodUnits from "./pages/BloodUnits";
import IssueRequests from "./pages/IssueRequests";
import ExpiryAlerts from "./pages/ExpiryAlerts";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/donors" element={<DonorManagement />} />

        <Route path="/bloodunits" element={<BloodUnits />} />

        <Route path="/requests" element={<IssueRequests />} />

        <Route path="/alerts" element={<ExpiryAlerts />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;