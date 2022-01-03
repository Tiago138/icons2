import { useState } from "react";

import icones from "../icones";

function Icons(prop) {
  const [filteredIcons, setFilteredIcons] = useState(icones);

  const iconsElement = filteredIcons.map((icone) => {
    return (
      <li key={icone.col2} className="icons-container">
        <span
          className={`icon-el ${icone.col1}`}
          onClick={() => prop.toggleShowCard(icone.col1)}
        ></span>
        {icone.col1}
        <br />\{icone.col2}
      </li>
    );
  });

  function handleChange(event) {
    const expressao = new RegExp(event.target.value, "i");
    setFilteredIcons(icones.filter((icone) => expressao.test(icone.col1)));
  }

  return (
    <>
      <input
        className="search"
        type="text"
        placeholder="Search"
        onChange={handleChange}
        name="search"
        //value={formData.firstName}
      />
      <ul id="menu-el">{iconsElement}</ul>
    </>
  );
}

export default Icons;
