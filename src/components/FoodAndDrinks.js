import halfcirclegreen from '../assets/half-circle-green.png';
import { Outlet } from 'react-router-dom';

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
