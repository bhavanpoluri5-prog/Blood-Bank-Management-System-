function BloodStockCard({ group, units }) {
  return (
    <div className="stock-card">
      <h2>{group}</h2>
      <h3>{units} Units</h3>
    </div>
  );
}

export default BloodStockCard;