import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navber() {
  const items = useSelector((state) => state.card);

  return (
    <div
      className="navber"
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
        <span className="cartCount">Cart items: {items.length}</span>
      </div>
    </div>
  );
}

export default Navber;
