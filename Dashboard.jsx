import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

function Dashboard() {

  const [totalDonors, setTotalDonors] = useState(0);
  const [bloodUnits, setBloodUnits] = useState(290);
  const [issueRequests, setIssueRequests] = useState(5);
  const [expiryAlerts, setExpiryAlerts] = useState(10);
  const [activities, setActivities] = useState([]);

  useEffect(() => {

    const donors =
      JSON.parse(localStorage.getItem("donors")) || [];

    setTotalDonors(donors.length);

    const units =
      Number(localStorage.getItem("bloodUnits")) || 290;

    setBloodUnits(units);

    const requests =
      Number(localStorage.getItem("issueRequests")) || 5;

    setIssueRequests(requests);

    const alerts =
      Number(localStorage.getItem("expiryAlerts")) || 10;

    setExpiryAlerts(alerts);

    const activityData =
      JSON.parse(localStorage.getItem("activities")) || [];

    setActivities(activityData);

  }, []);

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <h1>Dashboard</h1>

        <div className="cards">

          <div className="card">
            <h2>{bloodUnits}</h2>
            <p>Total Blood Units</p>
            <span>Available Stock</span>
          </div>

          <div className="card">
            <h2>{totalDonors}</h2>
            <p>Registered Donors</p>
            <span>Live Count</span>
          </div>

          <div className="card">
            <h2>{issueRequests}</h2>
            <p>Issue Requests</p>
            <span>Pending</span>
          </div>

          <div className="card">
            <h2>{expiryAlerts}</h2>
            <p>Expiry Alerts</p>
            <span>Check Stock</span>
          </div>

        </div>

        <div className="dashboard-grid">

          <div className="section-box">

            <h2>Blood Group Distribution</h2>

            <div className="blood-row">
              <label>O+</label>
              <div className="bar">
                <div style={{width:"90%"}}></div>
              </div>
            </div>

            <div className="blood-row">
              <label>A+</label>
              <div className="bar">
                <div style={{width:"70%"}}></div>
              </div>
            </div>

            <div className="blood-row">
              <label>B+</label>
              <div className="bar">
                <div style={{width:"50%"}}></div>
              </div>
            </div>

            <div className="blood-row">
              <label>AB+</label>
              <div className="bar">
                <div style={{width:"30%"}}></div>
              </div>
            </div>

          </div>

          <div className="section-box">

            <h2>Critical Stock Alerts</h2>

            <div className="alert-box">
              🩸 O- RBC — 8 Units Remaining
            </div>

            <div className="alert-box">
              🩸 B- RBC — 5 Units Remaining
            </div>

            <div className="alert-box">
              🩸 AB- Plasma — 3 Units Remaining
            </div>

          </div>

        </div>

        <div className="activity-box">

          <h2>Recent Activity</h2>

          <table>

            <thead>
              <tr>
                <th>Activity</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {activities.length > 0 ? (

                activities.slice(0, 5).map((activity) => (

                  <tr key={activity.id}>
                    <td>{activity.message}</td>
                    <td>✅ Updated</td>
                  </tr>

                ))

              ) : (

                <tr>
                  <td>No Activity Yet</td>
                  <td>Start Using System</td>
                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}

export default Dashboard;