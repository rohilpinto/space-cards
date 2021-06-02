import React from "react";
import Planets from "./components/Planets";

import "./style/App.css";

const cardInfo = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/41953/earth-blue-planet-globe-planet-41953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    planetName: "Earth",
    planetDesc:
      "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29.2% of Earth's surface is land consisting of continents and islands. Earth consists of land, air, water and life. The land contains mountains, valleys and flat areas. The air is made up of different gases, mainly nitrogen and oxygen. The water includes oceans, lakes, rivers, streams, rain, snow and ice",
    isRead: true,
  },

  {
    id: 2,
    img: "https://solarsystem.nasa.gov/system/stellar_items/image_files/38_saturn_1600x900.jpg",
    planetName: "Mars",
    planetDesc: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'",
    isRead: true,
  },

  {
    id: 3,
    img: "https://cdn.cdnparenting.com/articles/2019/03/20150120/1315286447-H.jpg",
    planetName: "Jupiter",
    planetDesc: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun",
    isRead: true,
  },

  {
    id: 4,
    img: "https://media.nature.com/lw800/magazine-assets/d41586-020-02785-5/d41586-020-02785-5_18436254.jpg",
    planetName: "Venus",
    planetDesc: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
    isRead: true,
  },

  {
    id: 5,
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
    planetName: "Uranus",
    planetDesc:
      "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares, grandfather of Zeus and father of Cronus. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
    isRead: true,
  },

  {
    id: 6,
    img: "https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg",
    planetName: "Neptune",
    planetDesc: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus.",
    isRead: true,
  },

  {
    id: 7,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1200px-Mercury_in_color_-_Prockter07-edit1.jpg",
    planetName: "Mercury",
    planetDesc: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets.",
    isRead: true,
  },
];

const App = () => {
  return (
    <React.Fragment>
      <div className="heading-container">
        <h1 className="heading">Planets</h1>
      </div>

      <div className="planets-parent">
        <Planets planets={cardInfo}></Planets>
      </div>
    </React.Fragment>
  );
};

export default App;
