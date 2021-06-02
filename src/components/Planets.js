import React, { useState } from "react";

import "../style/Planets.css";

const ReadMore = ({ children, Max }) => {
  const [collapse, setCollapse] = useState(true);

  const text = collapse ? children.slice(0, 100) : children.slice(0, 1000);

  return (
    <div>
      <p>
        {text}
        <button onClick={() => setCollapse(!collapse)}>{collapse ? "Read More" : "Read Less"}</button>
      </p>
    </div>
  );
};

const Planets = ({ planets }) => {
  const [elements, setElements] = useState(planets);

  // const [cardID, setCardID] =

  const removeCard = (id) => {
    setElements(
      elements.filter((filteredCards) => {
        // console.log(filteredCards);
        // console.log(id);

        return filteredCards.id !== id;
      })
    );
  };

  return (
    <React.Fragment>
      {elements.map((planetMap) => {
        const { id, img, planetName, planetDesc } = planetMap;

        return (
          <div className="card" key={id}>
            <img src={img} alt="" />
            <h2>{planetName}</h2>
            <ReadMore>{planetDesc}</ReadMore>

            <button className="btn" onClick={() => removeCard(id)}>
              Remove From list
            </button>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Planets;
