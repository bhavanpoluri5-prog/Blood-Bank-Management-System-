import { useState, useEffect } from "react";

function DonorManagement() {

  const [donors, setDonors] = useState([]);
  const [name, setName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  useEffect(() => {
    const savedDonors =
      JSON.parse(localStorage.getItem("donors")) || [];

    setDonors(savedDonors);
  }, []);

  const addDonor = () => {

    if (!name || !bloodGroup) {
      alert("Please fill all fields");
      return;
    }

    const newDonor = {
      id: Date.now(),
      name,
      bloodGroup
    };

    const updatedDonors = [...donors, newDonor];

    setDonors(updatedDonors);

    localStorage.setItem(
      "donors",
      JSON.stringify(updatedDonors)
    );

    const currentUnits =
      Number(localStorage.getItem("bloodUnits")) || 290;

    localStorage.setItem(
      "bloodUnits",
      currentUnits + 1
    );

    setName("");
    setBloodGroup("");

    alert("Donor Added Successfully");
  };

  const deleteDonor = (id) => {

    const updatedDonors =
      donors.filter((donor) => donor.id !== id);

    setDonors(updatedDonors);

    localStorage.setItem(
      "donors",
      JSON.stringify(updatedDonors)
    );
  };

  return (
    <div className="donor-container">

      <h2>💖 Donor Management 🩸</h2>

      <h3 style={{textAlign:"center",marginBottom:"20px"}}>
        Total Donors: {donors.length}
      </h3>

      <div className="donor-form">

        <input
          type="text"
          placeholder="👤 Donor Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="🩸 Blood Group"
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
        />

        <button onClick={addDonor}>
          Add Donor
        </button>

      </div>

      <div className="donor-list">

        {donors.map((donor) => (

          <div className="donor-card" key={donor.id}>
            <h3>{donor.name}</h3>

            <p>
              Blood Group: {donor.bloodGroup}
            </p>

            <button
              onClick={() => deleteDonor(donor.id)}
              style={{
                marginTop:"10px"
              }}
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default DonorManagement;