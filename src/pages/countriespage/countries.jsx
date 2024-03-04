import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/navbar'

export default function Countries(){
    const url = 'https://restcountries.com/v3.1/all';
    // console.log({url})

    // function getAllCountries (){
    //     fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log({data});
    //   })
    //   .catch((error) => console.log(error))
    // }

    async function getAllCountries(){
      const response = await fetch(url).then((res) => res.json());
      console.log({response});
    }
    

    useEffect(() =>{
        // console.log({url})
        // getAllCountries()
        getAllCountries();
    }, [])
  return (
    <>
    <Navbar/>
        <div>
            Countries Page
        </div>
    </>
  )
}
