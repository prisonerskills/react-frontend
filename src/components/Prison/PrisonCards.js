import React from 'react';
import PrisonList from './PrisonList';

import { Card, Button, Image, Icon } from 'semantic-ui-react'

export default function PrisonCard (props) {
  return <Card color='orange'>
  <Image size='medium'src={props.prison.image} wrapped ui={true} />
  <Card.Content>  
      <Card.Header centered>{props.prison.prisonName}</Card.Header>
    <Card.Meta>
      <span className='date' > Location: {props.prison.city}</span>
    </Card.Meta>
    <Card.Description>

<h4> Programs: <br></br></h4>
<p>{props.prison.programs[0]}</p>
<p>{props.prison.programs[1]}</p>
<p> {props.prison.programs[2]}</p>
<p> {props.prison.programs[3]}</p>

  <Button>Click Here</Button>

    </Card.Description>
  
  </Card.Content>
  
</Card>
 
}
