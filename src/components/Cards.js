function Cards(prop) {
  const cardList = [
    "black",
    "aurora1",
    "aurora2",
    "aurora3",
    "aurora4",
    "aurora5",
    "white",
  ];

  const cardEl = cardList.map((card) => {
    return (
      <div key={card} className={card}>
        <span id="icone" className={`t08 ${prop.icon}`}></span>
        <span id="icone" className={`t16 ${prop.icon}`}></span>
        <span id="icone" className={`t24 ${prop.icon}`}></span>
        <span id="icone" className={`t32 ${prop.icon}`}></span>
        <span id="icone" className={`t48 ${prop.icon}`}></span>
        <span id="icone" className={`t64 ${prop.icon}`}></span>
      </div>
    );
  });

  return (
    <div id="conjunto-el" className="conjunto-el hiden-el">
      <div className="card-el light">{cardEl}</div>
      <div className="card-el dark">{cardEl}</div>
    </div>
  );
}

export default Cards;
