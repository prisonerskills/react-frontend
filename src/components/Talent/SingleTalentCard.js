import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function TalentCard (props) {
  return   <Card>
  
  <Card.Content>
    <Card.Header>{props.NAME}</Card.Header>
    <Card.Meta>
      <span className='date'>{props.HEADLINE}</span>
    </Card.Meta>
    <Card.Description>
    {props.SKILLS}
    {props.CERTIFICATIONS}
    {props.EXPERIENCE}
    {props.PROFESSIONALGOALS}
    {props.PAYRATE}
    {props.AVAILABLESTARTDATE}
    
    </Card.Description>
  </Card.Content>
</Card>
    
}

