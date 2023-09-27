import { useState } from 'react';
import foods from '../foods';
import FoodCta from './FoodCta';

export default function FoodDetail() {
  const [foodName, setFoodName] = useState(decodeURI(window.location.pathname.split('drikke/')[1]));

  const food = foods.find((food) => food.name === foodName);

  return (
    <section className="cuisine">
      <div className="cuisine__grid">
        <div className="cuisine__image">
          <img src={food.detailImg} alt="food" />
        </div>
        <div className="cuisine__description">
          <h4 className="cuisine__name">{food.name}</h4>
          <div className="cuisine__info">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id turpis non ante
              pellentesque bibendum et in mi. Mauris id hendrerit tortor. Donec ut rhoncus justo.
              Integer eleifend maximus metus a tincidunt.
            </p>
          </div>
        </div>
      </div>
      <FoodCta />
    </section>
  );
}
