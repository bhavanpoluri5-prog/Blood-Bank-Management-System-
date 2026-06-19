import { useState, useEffect } from "react";

function BloodUnits() {

  const [units, setUnits] = useState(0);

  useEffect(() => {

    const saved =
      Number(localStorage.getItem("bloodUnits")) || 290;

    setUnits(saved);

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

  const addUnit = () => {

    const newUnits = units + 1;

    setUnits(newUnits);

    localStorage.setItem(
      "bloodUnits",
      newUnits
    );

    saveActivity("🩸 Added 1 Blood Unit");
  };

  const removeUnit = () => {

    if (units <= 0) return;

    const newUnits = units - 1;

    setUnits(newUnits);

    localStorage.setItem(
      "bloodUnits",
      newUnits
    );

    saveActivity("❌ Removed 1 Blood Unit");
  };

  const resetStock = () => {

    setUnits(290);

    localStorage.setItem(
      "bloodUnits",
      290
    );

    saveActivity("🔄 Blood Stock Reset");
  };

  return (
    <div className="donor-container">

      <h2>🩸 Blood Units Management</h2>

      <h1>🩸 {units}</h1>

      {units < 50 ? (
        <p style={{
          color:"red",
          textAlign:"center",
          fontWeight:"bold"
        }}>
          ⚠️ Low Stock Alert
        </p>
      ) : (
        <p style={{
          color:"green",
          textAlign:"center",
          fontWeight:"bold"
        }}>
          ✅ Stock Available
        </p>
      )}

      <button onClick={addUnit}>
        Add Unit
      </button>

      <button
        onClick={removeUnit}
        style={{marginLeft:"10px"}}
      >
        Remove Unit
      </button>

      <button
        onClick={resetStock}
        style={{marginLeft:"10px"}}
      >
        Reset Stock
      </button>

    </div>
  );
}

export default BloodUnits;