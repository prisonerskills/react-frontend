import React from "react";
import PrisonList from "./PrisonList";
import { Link } from "react-router-dom";

import { Card, Button, Image, Icon } from "semantic-ui-react";

export default function PrisonCard(props) {
  return (
    <Card color="orange">
      <Image size="medium" src={props.prison.image} wrapped ui={true} />

      <Card.Content>
        <Card.Header centered>{props.prison.prisonName}</Card.Header>
        <Card.Meta>
          <span className="date"> Location: {props.prison.city}</span>
        </Card.Meta>
        <Card.Description>
          <p>Talent Available: {props.prison.numAvail}</p>
          <h4> Programs: 
          </h4>
          <p>{props.prison.programs[0]}</p>
          <p>{props.prison.programs[1]}</p>
          <p> {props.prison.programs[2]}</p>
          <p> {props.prison.programs[3]}</p>
          
          <Link to={`/talent/${props.prison.id}`}>
            <Button>See Talent</Button>
          </Link>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
