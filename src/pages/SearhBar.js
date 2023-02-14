import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const SearhBar = () => {
  const [coctail, setCoctail] = useState("");
  const getData = () => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007")
      .then((response) => {
        setCoctail(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  if (!coctail || !coctail.drinks || !coctail.drinks[0]) {
    return null;
  }

  return (
    <h1>
      <div>
        <h2>{coctail.drinks[0].strDrink}</h2>
        <p>Instructions: {coctail.drinks[0].strInstructions}</p>
        <p>Ingredients:</p>
        <ul>
          <li>{coctail.drinks[0].strIngredient1}</li>
          <li>{coctail.drinks[0].strIngredient2}</li>
          <li>{coctail.drinks[0].strIngredient3}</li>
          <li>{coctail.drinks[0].strIngredient4}</li>
        </ul>
      </div>
    </h1>
  );
};

export default SearhBar;
