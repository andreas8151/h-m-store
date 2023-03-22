import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./categories.css";

export default function Single() {
  /* -----------categories---------------- */
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(
    function () {
      async function single() {
        const res = await fetch(
          `https://fakestoreapi.com/products/category/${id}`
        );
        const data = await res.json();
        setProduct(data);
      }
      single();
    },
    [id]
  );

  /* -------------return------------------ */

  const items = product.map((item, index) => {
    return (
      <div className="card" key={index}>
        <p>Title: {item.title}</p>
        <img src={item.image} alt="img"></img>
        <div className="info">
          <p>Price: {item.price}</p>
          <Link className="link" to={`/Product/${item.id}`}>
            Mer Info
          </Link>
        </div>
      </div>
    );
  });

  if (!product) {
    return null;
  }
  return (
    <div>
      <div className="container-cat">
        <div>
          <Link className="all-products" to={`/`}>
            Alla Produkter
          </Link>
        </div>
        {items}
      </div>
    </div>
  );
}
