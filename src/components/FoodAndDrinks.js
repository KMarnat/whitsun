import halfcirclegreen from '../assets/half-circle-green.png';
import { Outlet } from 'react-router-dom';

export default function FoodAndDrinks() {
  return (
    <section className="vendor">
      <div className="vendor__title">
        <img src={halfcirclegreen} alt="title icon" />
        <h2>MAD & DRIKKE</h2>
      </div>
      <Outlet />
    </section>
  );
}
