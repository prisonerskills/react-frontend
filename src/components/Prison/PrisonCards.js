import React from 'react';
import PrisonList from './PrisonList';
import { Link } from 'react-router-dom';

import { Card, Button, Image, Icon } from 'semantic-ui-react'

export default function PrisonCard (props) {
<<<<<<< HEAD
  return <Card color='orange'>
  <Image size='medium'src={props.prison.image} wrapped ui={true} />
=======
  console.log('from prisoncards:', props.prison)
  return <Card>
  
>>>>>>> dbb8e86724ef1bb183039e3c52f3cec3d4f2d1d4
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
<<<<<<< HEAD

  <Button>Click Here</Button>

=======
<p> Location: {props.prison.programs}</p>
 <Link to={`/talent/${props.prison.id}`}><Button>Click Here</Button></Link> 
>>>>>>> dbb8e86724ef1bb183039e3c52f3cec3d4f2d1d4
    </Card.Description>
  
  </Card.Content>
  
</Card>
 
}
