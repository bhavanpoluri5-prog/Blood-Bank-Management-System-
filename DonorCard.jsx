function DonorCard({ donor }) {
  return (
    <div className="donor-card">
      <h3>{donor.name}</h3>
      <p>Age : {donor.age}</p>
      <p>Blood Group : {donor.bloodGroup}</p>
      <p>Phone : {donor.phone}</p>
    </div>
  );
}

export default DonorCard;