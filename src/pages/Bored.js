import { useState, useEffect } from "react";
import "./bored.css";

export default function Single() {
  const [product, setProduct] = useState([]);
  useEffect(function () {
    async function single() {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink`
      );
      const data = await res.json();
      const data2 = data.drinks;

      setProduct(data2);
    }
    single();
  }, []);

  const drinks = product.map((drink) => {
    return (
      <div className="drink" key={drink.strDrink}>
        <p className="drink-name">{drink.strDrink}</p>
        <img className="drink-img" src={drink.strDrinkThumb} alt="img"></img>
        <p className="text-info">
          You can use the test API key "1" during development of your app or for
          educational use(see test links below) However you must sign up to
          Patreon if you want a production API key if releasing publicly on an
          appstore.
        </p>
      </div>
    );
  });

  return <div className="drink-container">{drinks}</div>;
}
