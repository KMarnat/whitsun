import { useState } from 'react';

export default function Main() {
  const [isHovered, setIsHovered] = useState(false);

  const handleLogoEnter = () => {
    setIsHovered((isHovered) => !isHovered);
  };

  const handleLogoLeave = () => {
    setIsHovered((isHovered) => !isHovered);
  };

  return (
    <main className="main">
      <div className="adaptive">
        <div className="adaptive-photo banner">
          <img
            src="https://images.unsplash.com/photo-1528736613140-347578be84c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            className={isHovered ? '' : 'filter-effect'}
            alt="banner"
          />
        </div>
        <img
          src="https://whitsun.dk/wp-content/uploads/photo-gallery/imported_from_media_libray/thumb/WhitSun_BADGE_HQ.png?bwg=1674653556"
          className="banner__logo"
          onMouseEnter={handleLogoEnter}
          onMouseLeave={handleLogoLeave}
          alt="logo"
        />
      </div>
    </main>
  );
}
