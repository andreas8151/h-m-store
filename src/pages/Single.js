import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./single.css";

export default function Single() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  console.log(useParams());
  useEffect(
    function () {
      async function single() {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      }
      single();
    },
    [id]
  );

  if (!product) {
    return null;
  }
  return (
    <div className="second-card">
      <p className="title">{product.title}</p>
      <img src={product.image} className="second-img" alt="bild"></img>
      <p className="description">{product.description}</p>
      <p className="price">Pris: {product.price}:-</p>
    </div>
  );
}
