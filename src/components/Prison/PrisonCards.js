import React from 'react';
import PrisonList from './PrisonList';

import { Card, Button, Modal, Icon } from 'semantic-ui-react'

export default function PrisonCard (props) {
  return <Card>
  
  <Card.Content>
      
    <Card.Header>{props.prison.prisonName}</Card.Header>
    <Card.Meta>
      <span className='date' > Location: {props.prison.Location}</span>
    </Card.Meta>
    <Card.Description>
<p> Location: {props.prison.location}</p>

    </Card.Description>
  </Card.Content>
  
</Card>
 
}
