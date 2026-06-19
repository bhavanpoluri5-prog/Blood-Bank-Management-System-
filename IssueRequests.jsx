import { useState, useEffect } from "react";

function IssueRequests() {

  const [requests, setRequests] = useState([]);

  const [patient, setPatient] = useState("");
  const [hospital, setHospital] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  useEffect(() => {

    const savedRequests =
      JSON.parse(localStorage.getItem("requestsList")) || [];

    setRequests(savedRequests);

    localStorage.setItem(
      "issueRequests",
      savedRequests.length
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

  const addRequest = () => {

    if (!patient || !hospital || !bloodGroup) {
      alert("Fill all fields");
      return;
    }

    const newRequest = {
      id: Date.now(),
      patient,
      hospital,
      bloodGroup
    };

    const updatedRequests = [
      ...requests,
      newRequest
    ];

    setRequests(updatedRequests);

    localStorage.setItem(
      "requestsList",
      JSON.stringify(updatedRequests)
    );

    localStorage.setItem(
      "issueRequests",
      updatedRequests.length
    );

    saveActivity(
      `📄 Request Added - ${patient}`
    );

    setPatient("");
    setHospital("");
    setBloodGroup("");
  };

  const deleteRequest = (id) => {

    const updatedRequests =
      requests.filter(
        (request) => request.id !== id
      );

    setRequests(updatedRequests);

    localStorage.setItem(
      "requestsList",
      JSON.stringify(updatedRequests)
    );

    localStorage.setItem(
      "issueRequests",
      updatedRequests.length
    );

    saveActivity(
      "❌ Request Deleted"
    );
  };

  return (
    <div className="donor-container">

      <h2>📄 Issue Requests</h2>

      <h3 style={{
        textAlign:"center",
        marginBottom:"20px"
      }}>
        Total Requests: {requests.length}
      </h3>

      <div className="donor-form">

        <input
          type="text"
          placeholder="Patient Name"
          value={patient}
          onChange={(e)=>setPatient(e.target.value)}
        />

        <input
          type="text"
          placeholder="Hospital Name"
          value={hospital}
          onChange={(e)=>setHospital(e.target.value)}
        />

        <input
          type="text"
          placeholder="Blood Group"
          value={bloodGroup}
          onChange={(e)=>setBloodGroup(e.target.value)}
        />

        <button onClick={addRequest}>
          Add Request
        </button>

      </div>

      <div className="donor-list">

        {requests.map((request)=>(

          <div
            className="donor-card"
            key={request.id}
          >

            <h3>{request.patient}</h3>

            <p>
              Hospital: {request.hospital}
            </p>

            <p>
              Blood Group: {request.bloodGroup}
            </p>

            <button
              onClick={() =>
                deleteRequest(request.id)
              }
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default IssueRequests;