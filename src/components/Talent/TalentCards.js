import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function TalentCard (props) {
  return <Card>
  
  <Card.Content>
      
    <Card.Header>{props.talent.name}</Card.Header>
    <Card.Meta>
      <span className='date'>{props.talent.name}</span>
    </Card.Meta>
    <Card.Description>
<p> Certifications: {props.talent.certifications[0]}, {props.talent.certifications[1]}, {props.talent.certifications[2]} </p>
   
   
    <p>Goals: {props.talent.goals[0]},{props.talent.goals[1]} </p>
   
    <p>Pay Rate: {props.talent.payRate}</p>
    <p>Available Start Date:{props.talent.availStart}</p>

    </Card.Description>
  </Card.Content>
</Card>
 
}



// Skills , Certifications, Experience, Professional Goals