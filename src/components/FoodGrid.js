import foods from '../foods';
import { Link } from 'react-router-dom';

export default function FoodGrid() {
  return (
    <div className="vendor__grid">
      {foods.map((food, i) => (
        <Link to={`${food.name}`} key={i}>
          <div>
            <div className="vendor__item">
              <img src={food.imgOne} alt="food" />
              <img src={food.imgTwo} alt="food" className="vendor__illustration" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
