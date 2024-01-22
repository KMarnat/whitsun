import { Outlet } from "react-router-dom";

export default function FoodAndDrinks() {
  return (
    <section className="vendor">
      <div className="vendor__title">
        <h1 className="vendor__name">MAD & DRIKKE</h1>
      </div>
      <Outlet />
    </section>
  );
}
