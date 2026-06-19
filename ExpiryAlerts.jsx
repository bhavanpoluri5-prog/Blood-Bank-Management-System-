import { useState, useEffect } from "react";

function ExpiryAlerts() {

  const [alerts, setAlerts] = useState([]);

  const [bloodGroup, setBloodGroup] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  useEffect(() => {

    const savedAlerts =
      JSON.parse(localStorage.getItem("alertsList")) || [];

    setAlerts(savedAlerts);

    localStorage.setItem(
      "expiryAlerts",
      savedAlerts.length
    );

  }, []);

  const saveActivity = (message) => {

    const activities =
      JSON.parse(localStorage.getItem("activities")) || [];

    activities.unshift({
      id: Date.now(),
      message
    });

    localStorage.setItem(
      "activities",
      JSON.stringify(activities)
    );
  };

  const calculateDays = (date) => {

    const today = new Date();

    const expiry = new Date(date);

    const diff =
      expiry.getTime() - today.getTime();

    return Math.ceil(
      diff / (1000 * 60 * 60 * 24)
    );
  };

  const addAlert = () => {

    if (!bloodGroup || !expiryDate) {
      alert("Fill all fields");
      return;
    }

    const newAlert = {
      id: Date.now(),
      bloodGroup,
      expiryDate
    };

    const updatedAlerts = [
      ...alerts,
      newAlert
    ];

    setAlerts(updatedAlerts);

    localStorage.setItem(
      "alertsList",
      JSON.stringify(updatedAlerts)
    );

    localStorage.setItem(
      "expiryAlerts",
      updatedAlerts.length
    );

    saveActivity(
      `⚠️ Expiry Alert Added - ${bloodGroup}`
    );

    setBloodGroup("");
    setExpiryDate("");
  };

  const deleteAlert = (id) => {

    const updatedAlerts =
      alerts.filter(
        (alert) => alert.id !== id
      );

    setAlerts(updatedAlerts);

    localStorage.setItem(
      "alertsList",
      JSON.stringify(updatedAlerts)
    );

    localStorage.setItem(
      "expiryAlerts",
      updatedAlerts.length
    );

    saveActivity(
      "❌ Expiry Alert Deleted"
    );
  };

  return (
    <div className="donor-container">

      <h2>⚠️ Expiry Alerts</h2>

      <h3
        style={{
          textAlign:"center",
          marginBottom:"20px"
        }}
      >
        Total Alerts: {alerts.length}
      </h3>

      <div className="donor-form">

        <input
          type="text"
          placeholder="Blood Group"
          value={bloodGroup}
          onChange={(e)=>
            setBloodGroup(e.target.value)
          }
        />

        <input
          type="date"
          value={expiryDate}
          onChange={(e)=>
            setExpiryDate(e.target.value)
          }
        />

        <button onClick={addAlert}>
          Add Alert
        </button>

      </div>

      <div className="donor-list">

        {alerts.map((alert)=>{

          const days =
            calculateDays(alert.expiryDate);

          let status = "✅ Safe";
          let color = "green";

          if(days <= 7){
            status = "🟠 Warning";
            color = "orange";
          }

          if(days <= 3){
            status = "🔴 Critical";
            color = "red";
          }

          return(

            <div
              className="donor-card"
              key={alert.id}
            >

              <h3>
                {alert.bloodGroup}
              </h3>

              <p>
                Expiry:
                {" "}
                {alert.expiryDate}
              </p>

              <p>
                Days Left:
                {" "}
                {days}
              </p>

              <p
                style={{
                  color,
                  fontWeight:"bold"
                }}
              >
                {status}
              </p>

              <button
                onClick={() =>
                  deleteAlert(alert.id)
                }
              >
                Delete
              </button>

            </div>

          );

        })}

      </div>

    </div>
  );
}

export default ExpiryAlerts;