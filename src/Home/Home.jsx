import { useEffect, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TopBox from './TopBox/TopBox'; 
import WeatherWidget from './WeatherWidget';
export default function Home(){
    return(
       <>
         <div className="row">
            
        </div>
        <div className="row p-3">
            <div className="col-9 p-2 overflow-scroll">
                <TopBox/>
            </div>
            <div className="col-3 d-flex center">
            <WeatherWidget/>
            </div>
        </div>
       </>)

}