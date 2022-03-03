import React from "react";
import { Link } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imagePath = `/assets/${id}.jpg`;

  return (
    <Card
      style={{
        width: "18rem",
        marginTop: "2rem",
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      <Card.Body>
        <Card.Title>{superhero}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{alter_ego}</ListGroupItem>
        {alter_ego !== characters && <p className="text-muted">{characters}</p>}
      </ListGroup>
      <Card.Img src={imagePath} alt={superhero} variant="top" />
      <Link to={`/hero/${id}`} className="btn btn-primary mt-2">
        Mas Info
      </Link>
    </Card>
    // <div className="col">
    //   <div
    //     className="card animate__animated animate__fadeIn"
    //     style={{
    //       marginTop: "20px",
    //       marginLeft: "auto",
    //       marginRight: "auto",
    //     }}
    //   >
    //     <div className="row no-gutters">
    //       <div className="col-8">
    //         <div className="card-body">
    //           <h5 className="card-title">{superhero}</h5>
    //           <p className="card-text">{alter_ego}</p>
    //           {alter_ego !== characters && (
    //             <p className="text-muted">{characters}</p>
    //           )}

    //           <p className="card-text">
    //             <small className="text-muted"></small>
    //           </p>

    //           <Link to={`/hero/${id}`} className="btn btn-primary">
    //             Mas Info
    //           </Link>
    //           <img
    //             src={imagePath}
    //             className="card-img-top"
    //             style={{ marginTop: "20px", width: "100%", marginLeft: "35%" }}
    //             alt={superhero}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default HeroCard;
