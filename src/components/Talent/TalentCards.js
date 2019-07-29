import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function TalentCard (props) {
  return   <Card>
  
  <Card.Content>
      <h2>Hola This works!</h2>
    <Card.Header>{props.name}</Card.Header>
    <Card.Meta>
      <span className='date'>{props.HEADLINE}</span>
    </Card.Meta>
    <Card.Description>
    {props.status}
    {props.CERTIFICATIONS}
    {props.EXPERIENCE}
    {props.PROFESSIONALGOALS}

    </Card.Description>
  </Card.Content>
</Card>
     
}



// Skills , Certifications, Experience, Professional Goals