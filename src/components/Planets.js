import React, { useState } from "react";
import Masonry from "react-masonry-css";

import "../style/Planets.css";

const ReadMore = ({ children }) => {
  const [collapse, setCollapse] = useState(true);

  const text = collapse ? children.slice(0, 100) : children.slice(0, 2000);

  return (
    <div>
      <p>
        {text}
        <div className="readmore-wrapper">
          <button className="ReadMoreBtn" onClick={() => setCollapse(!collapse)}>
            {collapse ? "Read More" : "Read Less"}
          </button>
        </div>
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

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <React.Fragment>
      <Masonry breakpointCols={breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
        {elements.map((planetMap) => {
          const { id, img, planetName, planetDesc } = planetMap;

          return (
            <div className="card" key={id}>
              <img src={img} alt="" />
              <h2>{planetName}</h2>
              <ReadMore>{planetDesc}</ReadMore>

              <div className="btn-wrapper">
                <button className="btn" onClick={() => removeCard(id)}>
                  Remove From list
                </button>
              </div>
            </div>
          );
        })}
      </Masonry>
    </React.Fragment>
  );
};

export default Planets;
