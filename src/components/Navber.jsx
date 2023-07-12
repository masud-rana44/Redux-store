import { Link } from "react-router-dom";

function Navber() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">REDUX STORE</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/card">
          Card
        </Link>
        <span className="cartCount">Cart items: 0</span>
      </div>
    </div>
  );
}

export default Navber;
