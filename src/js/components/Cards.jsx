import React from "react";
import Home from "./Home";

const cardInfoList = [
  {
    title: "New York",
    img: "https://th.bing.com/th/id/R.334bbf857ddc3684d3ae1180f13da2e9?rik=kvH9Fujm9GMycQ&riu=http%3a%2f%2fwww.california-tour.com%2fblog%2fwp-content%2fuploads%2f2011%2f11%2fNew-york-night-shutterstock-reduced.jpg&ehk=RxNr%2fGIYa2GVrqKpqe%2bDUMtPQYAk3iwvA3DDbM6u9sg%3d&risl=1&pid=ImgRaw&r=0",
    cardDescription: "This is the beautiful city of New York, filled with lights and skyscrapers.",
  },
  {
    title: "Paris",
    img: "https://th.bing.com/th/id/OIP.D-PRrefMDMZR-mcatEGLMQAAAA?rs=1&pid=ImgDetMain",
    cardDescription: "The city of lights, art, and culture and home to the world famou eifel tower.",
  },
  {title: "Los Angeles",
    img: "https://www.cprcertificationlosangelesca.com/wp-content/uploads/2025/01/what-is-the-average-cost-of-a-cpr-certification-class-in-los-angeles-ca-1536x864.jpg",
    cardDescription: "The beautiful city of Los Agneles before the  devastating fire. ",
  },
  {title: "Las Vegas",
    img: "https://www.pixelstalk.net/wp-content/uploads/images1/Las-Vegas-Wallpapers-Download.jpg",
    cardDescription: "The desert-city of extreme rises and falls in tempature and late night gambling.",
  },
];

function Cards() {
  return (
    <div className="container ">
      <div className="row row-cols-1 row-cols-md-3 g-3">
       {cardInfoList.map((card, index) => (
        <div className="card border-secondary mb-3 mx-2" key={index}>
          <img src={card.img} className="card-img-top" alt={card.title} />
          <div className="card-body">
            <h5 className="card-title text-center">{card.title}</h5>
            <p className="card-text">{card.cardDescription}</p>
            <div className="footer text-bg-light text-center">
            <a href="#" className="btn btn-primary">
              Find out more
            </a>
            </div>
          </div>
        </div>
        
      ))}
      </div>
      </div>
    
  );
}

export default Cards;