import React, { useEffect, useState } from 'react';
import TalentCards from './TalentCards';
const axios = require('axios');

export default function TalentList() {
  const [talentList, setTalentList] = useState([]);
  useEffect(() => {
    

    axios.get(` https://sheltered-ravine-78333.herokuapp.com/api/users/`)
    .then(response =>{
      setTalentList(response.data)
  })
}, [])
console.log(talentList)
  return <section className='character-list grid-view'>

       {talentList.map(talent => <TalentCards talent={talent} key={talent.id}/>)}
     
 
     
    </section>

}

// Headline, Skills , Certifications, Experience, Professional Goals, Pay Rate, Available Start Date 