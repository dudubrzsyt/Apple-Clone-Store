import React from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.css";

export default function Maca() {
  return (
    <main className="menu-page">
      <h1>Menu Apple</h1>
      <nav className="menu-links">
        <Link to="/iphone">
          <img src="/images/iphone.jpg" alt="iPhone" />
          iPhone
        </Link>
        <Link to="/mac">
          <img src="/images/mac.jpg" alt="Mac" />
          Mac
        </Link>
        <Link to="/ipad">
          <img src="/images/ipad.jpg" alt="iPad" />
          iPad
        </Link>
        <Link to="/watch">
          <img src="/images/watch.jpg" alt="Watch" />
          Watch
        </Link>
        <Link to="/airpods">
          <img src="/images/airpods.jpg" alt="AirPods" />
          AirPods
        </Link>
        <Link to="/tvhome">
          <img src="/images/tvhome.jpg" alt="TV & Home" />
          TV & Home
        </Link>
        <Link to="/entertainment">
          <img src="/images/entertainment.jpg" alt="Entertainment" />
          Entertainment
        </Link>
        <Link to="/accessories">
          <img src="/images/accessories.jpg" alt="Accessories" />
          Accessories
        </Link>
        <Link to="/support">
          <img src="/images/support.jpg" alt="Support" />
          Support
        </Link>
      </nav>
    </main>
  );
}