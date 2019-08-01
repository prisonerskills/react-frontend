import React from "react";
import talentList from "./TalentList";

import { Card, Button, Modal, Icon } from "semantic-ui-react";

export default function TalentCard(props) {
  return (
    <Card color="orange">
      <Card.Content>
        <Card.Header>{props.talent.name}</Card.Header>
        <Card.Meta>
          <span className="date">{props.talent.headline}</span>
        </Card.Meta>
        <Card.Description>
          <p>
            {" "}
            Certifications: {props.talent.certifications[0]},{" "}
            {props.talent.certifications[1]}, {props.talent.certifications[2]}{" "}
          </p>

          <p>
            Goals: {props.talent.goals[0]},{props.talent.goals[1]}{" "}
          </p>

          <p>Available Start Date:{props.talent.availStart}</p>

          <Modal trigger={<Button inverted color='orange'>Learn More</Button>} closeIcon>
        <Modal.Content>
          <h2>{props.talent.name}</h2>

          <p>Pay Rate: {props.talent.payRate}</p>

          <Button color='orange'animated>
            <Button.Content visible>Offer Interview</Button.Content>
            <Button.Content hidden>Next Step</Button.Content>
          </Button>
        </Modal.Content>
      </Modal>
        </Card.Description>
      </Card.Content>
     
    </Card>
  );
}
