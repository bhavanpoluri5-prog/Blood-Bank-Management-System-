import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>

      <h2>🩸 Blood Bank 💖</h2>

      <Link to="/dashboard">
        Dashboard
      </Link>

      <Link to="/donors">
        Donors
      </Link>

      <Link to="/bloodunits">
        Blood Units
      </Link>

      <Link to="/requests">
        Requests
      </Link>

      <Link to="/alerts">
        Alerts
      </Link>

    </nav>
  );
}

export default Navbar;