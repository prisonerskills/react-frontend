import React from 'react';
import PrisonList from './PrisonList';

import { Card, Button, Modal, Icon } from 'semantic-ui-react'

export default function PrisonCard (props) {
  return <Card centered color='orange'>
  
  <Card.Content>
      
    <Card.Header>{props.prison.prisonName}</Card.Header>
    <Card.Meta>
      <span className='date' > Location: {props.prison.city}</span>
    </Card.Meta>
    <Card.Description>
<h3> Programs: <br></br></h3>
<p>{props.prison.programs[0]}</p>
<p>{props.prison.programs[1]}</p>
<p> {props.prison.programs[2]}</p>
<p> {props.prison.programs[3]}</p>
    </Card.Description>
  
  </Card.Content>
  
</Card>
 
}
