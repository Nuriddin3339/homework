import { useEffect, useState } from "react"
import "./CountryList.css"

const CountryList = () => {
    const [country,setCountry] = useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => setCountry(data))
    },[])
    return (
        <div className="flag"> 
            {
             country.map((country) => (
                <div>
                    <div className="border">
                    <img className="imgg" src={country.flags.png} alt="" />
                    <div className="bgc">
                     <h1 className="name">{country.name.common}</h1>
                     <h1 className="population">Population: {country.population}</h1>
                     <h1 className="region">Region: {country.region}</h1>
                     <h1 className="capital">Capital: {country.capital}</h1>
                    </div>
                    </div>
                </div>


             ))   
            }
        </div>
       
    )
  }
  
  export default CountryList