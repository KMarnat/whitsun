import foods from '../foods';
import { Link } from 'react-router-dom';

export default function FoodGrid() {
  return (
    <div className="food__grid">
      {foods.map((food, i) => (
        <Link to={`${food.name}`} key={i}>
          <div className="food__grid-item">
            <img src={food.imgOne} alt="food" />
            <img src={food.imgTwo} alt="food" />
          </div>
        </Link>
      ))}
    </div>
  );
}
