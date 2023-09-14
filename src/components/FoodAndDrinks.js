import halfcirclegreen from '../assets/half-circle-green.png';
import { Link, Outlet } from 'react-router-dom';
import foods from '../foods.js';

export default function FoodAndDrinks() {
  return (
    <section className="food">
      <div className="food-title">
        <img src={halfcirclegreen} className="food-title__icon" alt="title icon" />
        <h2 className="food-title__name">MAD & DRIKKE</h2>
      </div>
      <Outlet />
    </section>
  );
}
