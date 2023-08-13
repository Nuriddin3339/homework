import { useEffect, useState } from "react"
import BASE_URL from "./constants/BASE_URL"
import "./SearchCountry.css"


const SearchCountry = () => {
    const [searchName, setSearchName] = useState("")
    const [country,setCountry] = useState([])
    useEffect(()=> {
        fetch(`${BASE_URL}/name/${searchName}`)
        .then((res) => res.json())
        .then((data) =>{
            console.log(data);
            if(data.length > 0){
                setCountry(data)
            }
        })
    },[searchName])
  return (
    <>
    <input className="country" type="text"  placeholder="Search for a country"
    value={searchName} 
    onChange={(e)=> setSearchName(e.target.value)} /> 
  

    {
        country.map((item) =>(
            <div style={{marginLeft: 70}}>
                <img style={{marginTop: 20}} src={item.flags.png} alt="" />
                <h2>Name:</h2>
                <h1 style={{color: "gray"}}>{item.name.common}</h1>
                <h2>Capital:</h2>
                <h2 style={{color: "gray"}}>{item.capital}</h2>
                <h2>Region:</h2>
                <h1 style={{color: "gray"}}>{item.region}</h1>
                <h2>Population:</h2>
                <h1 style={{color: "gray"}}>{item.population}</h1>
            </div>
        ))
    }

</>
 )
}


export default SearchCountry