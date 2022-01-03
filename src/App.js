import { useState } from "react";

import Header from "./components/Header";
import Icons from "./components/Icons";
import Cards from "./components/Cards";

function App() {
  const [showCard, setShowCard] = useState(false);
  const [iconClass, setIconClass] = useState("");

  function toggleShowCard(iconCard) {
    setIconClass(iconCard);
    setShowCard((prevShowCard) => !prevShowCard);
  }

  return (
    <div>
      <Header />
      <Icons toggleShowCard={toggleShowCard} />
      {showCard && <Cards icon={iconClass} />}
      {showCard && <div id="overlay-el" onClick={toggleShowCard}></div>}
    </div>
  );
}

export default App;
