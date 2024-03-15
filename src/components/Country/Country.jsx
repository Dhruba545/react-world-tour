import { useState } from 'react';
import './country.css';
const Country = ({country , btnProps}) =>{
    const {name ,flags , population , area ,cca3} = country;

    const [visited , setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited);
    }

    // const passWithParams =() =>  btnProps(country);
    

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name:{name?.common}</h3>
            <img src={flags.png}></img>
            <p>Population: {population}</p>
            <p>Area:{area}</p>
            <p><small>CCS3:{cca3}</small></p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited && 'I have visited this country'}<br></br>
            <button onClick={() =>  btnProps(country)}>Mark as visited</button>
        
        </div>
    );
};

export default Country;