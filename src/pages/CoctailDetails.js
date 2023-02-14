import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CoctailDetails() {
  const { coctailId } = useParams();
  const [coctail, setCoctail] = useState(null);

  useEffect(() => {
    const fetchCoctail = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${coctailId}`
        );
        const data = await response.json();
        setCoctail(data.drinks[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCoctail();
  }, [coctailId]);

  if (!coctail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{coctail.strDrink}</h2>
      <p>Instructions: {coctail.strInstructions}</p>
      <p>Ingredients:</p>
      <ul>
        {[
          coctail.strIngredient1,
          coctail.strIngredient2,
          coctail.strIngredient3,
          coctail.strIngredient4,
        ].map((ingredient, index) => {
          if (ingredient) {
            return <li key={index}>{ingredient}</li>;
          }
          return null;
        })}
      </ul>
    </div>
  );
}

export default CoctailDetails;
