import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import { Link } from "react-router-dom";
import "./countries.css";
import axios from "axios";

export default function Countries() {
  const url = "https://restcountries.com/v3.1/all";
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

  async function displayAllCountries() {
    try {
      let countries = await axios.get(url);
      const CountriesBox = countries.data;

      let fiveItems = CountriesBox;
      console.log({fiveItems})

      getFive(fiveItems);
      // console.log({ five });
      return fiveItems;
    } catch (error) {
      console.log(error);
    }
    // CountriesBox.push(countries.data);
    // console.log({CountriesBox});
    // return CountriesBox;
  }

  useEffect(() => {
    displayAllCountries();
  }, []);

  //  console.log(CountriesBox)

  //  function Display5Countries(){
  //   // something running down
  //   // let counrtiesBox = [];

  //  }

  return (
    <>
      <Navbar />
      <div>
        <div className="country_div">
          {five.map((value) => {
            // let val = value.name.common
            return (
              <div key={value.name.common} className="country_container">
                <div>
                  <img src={value.flags.png} alt={value.flags.alt} />
                </div>
                <div className="country_txt">
                  <h4>{value.name.common}</h4>
                  <p><strong>Capital:</strong> {value.capital}</p>
                  <button  className="button"><Link to={`/country/${value.name.common}`} >learn more</Link></button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
