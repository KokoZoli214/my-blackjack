import React from "react";
import EnterPage from "../components/enterPage/EnterPage";
import GamePage from "../components/gamePage/GamePage";
import Cards from "../shared/cards/Cards";
import GameButton from "../components/gameButton/GameButton";
import NavBarButton from "../components/navbar-button/NavBarButton";
import Register from "../components/register/Register";
import Faq from "../components/faq/Faq";
import About from "../components/about/About";

export default function GetComponentToLoad() {
  const pathname = window.location.pathname;
  let ComponentToLoad = <EnterPage />;

  switch (pathname) {
    case "/gamepage":
      ComponentToLoad = <GamePage />;
      break;

    case "/cards":
      ComponentToLoad = <Cards />;
      break;

    case "/gamebutton":
      ComponentToLoad = <GameButton />;
      break;

    case "/navbar-button":
      ComponentToLoad = <NavBarButton />;
      break;

    case "/register":
      ComponentToLoad = <Register />;
      break;

    case "/faq":
      ComponentToLoad = <Faq />;
      break;

    case "/about":
      ComponentToLoad = <About />;
      break;

    default:
      ComponentToLoad = <EnterPage />;
  }
  return ComponentToLoad;
}
