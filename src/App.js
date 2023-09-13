import Header from './components/Header.js';

import Footer from './components/Footer.js';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
