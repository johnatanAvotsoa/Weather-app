import Box from "./Box";
import { useEffect, useState } from 'react';
import sun from '../../assets/sun.svg'
import Box2 from "./Box2";
import axios from 'axios' ;

export default function TopBox(){
    const [data, setData] = useState({}) ;
    const [error , setError] = useState(null);
    const lon = 46.854328 ; 
    const lat = -18.777192 ;
    const key = "f5aa32542a6f65ae50b69b68e354a82b" ; 
    const [forecastData, setForecastData] = useState([]);
    const [loading, setLoading] = useState(true);

    const apiKey = '0f5c9de4e91047abbd795306240608';
    const city = 'Antananarivo'; 
  
    useEffect(() => {
      const fetchForecastData = async () => {
        try {
          const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json`, {
            params: {
              key: apiKey,
              q: city,
              days: 1,
              aqi: 'yes',
              alerts: 'no'
            }
          });
          setForecastData(response.data.forecast.forecastday[0].hour);
        } catch (error) {
          setError(error);
        } finally {
          console.log(forecastData)
          setLoading(false);
        }
      };
  
      fetchForecastData();
      
    }, [apiKey, city]);
          
    return (
        <div className=" row light-grey">
           <div className="d-flex box2">
            <Box2 content={"sun"} /> 
            <Box2 content={"1"} />
            <Box2 content={"2"} />
            <Box2 content={"3"} />
            <Box2 content={"4"} />                
           </div>
           <div className="row pt-3 d-flex ct"> 
                {forecastData.map((f)=>{
                    return (<Box data={f}/>)
                })}
           </div>
        </div>
    )
}