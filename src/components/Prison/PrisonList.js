import React, { useEffect, useState } from 'react';
import PrisonCards from './PrisonCards';
import { Card } from 'semantic-ui-react';
const axios = require('axios');

export default function PrisonList() {
  const [prisonList, setPrisonList] = useState([]);
  useEffect(() => {
    

    axios.get(`https://sheltered-ravine-78333.herokuapp.com/api/users`)
    .then(response =>{
      setPrisonList(response.data)
      console.log('from prisonlist:', response.data)
  })
}, [])
console.log(prisonList)
  return <section className='character-list grid-view'>



<Card.Group centered itemsPerRow={2}>
       {prisonList.map(prison => <PrisonCards prison={prison} key={prison.id}/>)}

</Card.Group>
 
     
    </section>

}

