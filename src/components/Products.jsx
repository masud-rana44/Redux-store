import { useEffect, useState } from "react";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "GET",
      });

      const data = await response.json();
      console.log(data);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="Product image" />
          <h3>{product.title}</h3>
          <h4>{product.price}</h4>
          <button className="btn" onClick={() => handleAdd(product)}>
            Add to card
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
