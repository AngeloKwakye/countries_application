import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Country(){

  const [country, setCountry] = useState(null);

  const params = useParams();
  console.log('params', params);
  const url = `https://restcountries.com/v3.1/name/${params.countryName}`

  async function displayCountry() {
    try {
      let countries = await axios.get(url);
      const CountriesBox = countries.data;

      setCountry(CountriesBox[0]);
      // let fiveItems = CountriesBox;
      // console.log({CountriesBox})

    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    displayCountry();
  }, [params.countryName]);


  // console.log(country)

  if(!country){
    return <div>Loading...</div>
  }

  return (
    <>
      <div>
        Name: <strong> {country.name.common}</strong>
      </div>
      <div>
        <img src={country.flags.png} alt={country.flags.alt} />
      </div>
      <div>
        <img src={country.coatOfArms.svg}/>
      </div>
      <div>
        Ccapital :{country.capital}
      </div>
    </>
  )
}
