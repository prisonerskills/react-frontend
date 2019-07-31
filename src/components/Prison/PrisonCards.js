import React from 'react';
import PrisonList from './PrisonList';
import { Link } from 'react-router-dom';

import { Card, Button, Modal, Icon } from 'semantic-ui-react'

export default function PrisonCard (props) {
  console.log('from prisoncards:', props.prison)
  return <Card>
  
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
<p> Location: {props.prison.programs}</p>
 <Link to={`/talent/${props.prison.id}`}><Button>Click Here</Button></Link> 
    </Card.Description>
  
  </Card.Content>
  
</Card>
 
}
