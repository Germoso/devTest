import React from "react";
import "../styles/Header.css";
const Header = () => {

const [scroll, setScroll] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY >= 80) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    });
  }, []);
  return (
    <header className="header__container">
      <nav className={`header__nav ${scroll ? 'header__nav-fixed' : ''}`}>
        <h2 className="header__title">BitMEX Articles</h2>
        <p>
          Made by <b>®DeimosGo</b>
        </p>
      </nav>
    </header>
  );
};

export { Header };
