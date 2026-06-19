import { useState } from "react";

function AddDonor() {

  const [donor, setDonor] = useState({
    name: "",
    age: "",
    bloodGroup: "",
    phone: ""
  });

  const handleChange = (e) => {
    setDonor({
      ...donor,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(donor);
    alert("Donor Added Successfully");
  };

  return (
    <div className="donor-container">

      <h2>🩸 Add New Donor 💖</h2>

      <form className="donor-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="👤 Name"
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="🎂 Age"
          onChange={handleChange}
        />

        <input
          type="text"
          name="bloodGroup"
          placeholder="🩸 Blood Group"
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="📞 Phone"
          onChange={handleChange}
        />

        <button type="submit">
          Add Donor
        </button>

      </form>

    </div>
  );
}

export default AddDonor;