import React, { useState } from 'react'
import Navbar from '../../components/navbar/navbar'
import { Link } from 'react-router-dom';
import './countries.css'
import axios from 'axios';

export default function Countries(){
    const url = 'https://restcountries.com/v3.1/all';
    const [five, getFive] = useState([]);
    // console.log({url})

    // function getAllCountries (){
    //     fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log({data});
    //   })
    //   .catch((error) => console.log(error))
    // }

    // function displayFive(data){
    //   for(let i = 0; i<= 4; i++ ){
    //     console.log(data[i].name.common)
    //   }
    // }

    // async function getAllCountries(){
    //   const response = await fetch(url).then((res) => res.json());
    //   console.log({response});
    //   displayFive(response);
    // }

     /* a function to fetch 5 countries |-|---Reachel---|-| */
     let CountriesBox=[];

     async function displayAllCountries(){
      let countries = await axios.get(url)
      CountriesBox = countries.data;

      let fiveItems = CountriesBox.slice(0,5).map((item) => {
        console.log('tessss',item)
        return item;
      });

      getFive(fiveItems);
      console.log({five});
      return CountriesBox;
      // CountriesBox.push(countries.data);
      // console.log({CountriesBox});
      // return CountriesBox;
     };

     displayAllCountries()
    //  console.log(CountriesBox)



    //  function Display5Countries(){
    //   // something running down
    //   // let counrtiesBox = [];


    //  }


  return (
    <>
    <Navbar/>
        <div >
            <button className='button'><Link to='/country'>Click Me!</Link></button>

          <div >
            {five.map((value)=>{
              let val = value.name.common
              return <p className='names_div'>{val}</p>;
            })}
          </div>
        </div>
    </>
  )
}
