import { useEffect, useState } from "react";
import Loader from "./Loader/Loader";
import Home from "./Home/Home";

export default function App(){
  const [isLoading , setIsLoading] = useState(true) ;
  const [data , setData] = useState([]) ;
  const [error , setError] = useState(null) ;  
    return(
      <Home/>
    )
}

