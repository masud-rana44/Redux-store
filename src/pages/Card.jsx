import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice.js";

function Card() {
  const products = useSelector((state) => state.card);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <h3>Card</h3>
      <div className="cardWrapper">
        {products.map((product) => (
          <div key={product.id} className="cartCard">
            <img src={product.image} alt="" />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button className="btn" onClick={() => handleRemove(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
