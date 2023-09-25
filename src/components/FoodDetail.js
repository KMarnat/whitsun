import { useState } from 'react';
import foods from '../foods';

export default function FoodDetail() {
  const [foodName, setFoodName] = useState(decodeURI(window.location.pathname.split('drikke/')[1]));

  const food = foods.find((food) => food.name === foodName);
  console.log(food);

  return (
    <section className="food-detail">
      <div className="details">
        <div className="details__image">
          <img src={food.detailImg} alt="food" />
        </div>
        <div className="details__about">
          <h4 className="details__about-name">{food.name}</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id turpis non ante
            pellentesque bibendum et in mi. Mauris id hendrerit tortor. Donec ut rhoncus justo.
            Integer eleifend maximus metus a tincidunt.
          </p>
        </div>
      </div>
      <div className="food">
        <h2 className="food__title">Gå ikke glip af</h2>
        <div className="food__list">
          <div className="food__item">
            <img
              src="https://media.cnn.com/api/v1/images/stellar/prod/210826215046-hotdog-stock.jpg?q=w_3000,h_2000,x_0,y_0,c_fill"
              alt="food"
            />
          </div>

          <div className="food__item">
            <img
              src="https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe-500x500.jpg"
              alt="food"
            />
          </div>

          <div className="food__item">
            <img
              src="https://i.pinimg.com/550x/42/57/57/425757bec893d00c54b07adbc5100833.jpg"
              alt="food"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
