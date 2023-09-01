import { useEffect, useState } from 'react'
import './App.css'
import {fetchDataFromApi} from "./utils/api"



function App() {

  useEffect(()=>{
    apiTesting();
  }, []);

  const apiTesting = () =>{
    fetchDataFromApi("/movie/popular").then((res)=>{
      console.log("response", res);
    });
  };

  return (
    <>
      App
    </>
  )
}

export default App
