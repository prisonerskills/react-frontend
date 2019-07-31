import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TalentCards from '../Talent/TalentCards';

const PrisonById = props => {
    const [prisons, setPrisons] = useState([])
  useEffect(() => {
    const getPrison = () => {
      axios
        .get(`https://sheltered-ravine-78333.herokuapp.com/api/prisoners/prison/${props.match.params.id}`)
        .then(response => {
          setPrisons(response.data);
          console.log('from prisonbyid:', response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getPrison();
  }, [props.match.params.id]);

  return (
    <div className="prison-list">
      {prisons.map(prison => {
        return (<div>
      {<TalentCards key={prison.id} talent={prison} />}</div>
  )})}
    </div>
  );
  
}

export default PrisonById;
