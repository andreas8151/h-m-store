import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./products.css";

export default function Products() {
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);

  /* ----------- Categories-------------- */
  useEffect(function () {
    async function getData() {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      setCategories(data);
    }
    getData();
  }, []);

  const category = categories.map(function (category) {
    return (
      <div key={category} className="category">
        <Link className="link" to={`/Products/${category}`}>
          {category}
        </Link>
      </div>
    );
  });

  /* ----------- Products ---------------- */
  useEffect(function () {
    async function getData() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProductList(data);
    }
    getData();
  }, []);

  const users = productList.map((user) => {
    return (
      <div className="card" key={user.id}>
        <p>Title: {user.title}</p>

        <img src={user.image} alt="img"></img>
        <div className="info">
          <p>Price: {user.price}</p>
          <Link className="link" to={`/Product/${user.id}`}>
            More info
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="category-container">{category}</div>
      {users}
    </div>
  );
}
