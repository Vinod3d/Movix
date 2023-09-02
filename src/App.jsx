import { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import {fetchDataFromApi} from "./utils/api"
import { getApiConfiguration } from './store/homeSlice';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/pageNotFound';



function App() {
  const dispatch = useDispatch();
  const {url} = useSelector((state)=> {
    return state.home;
  });

  console.log( "url", url)

  useEffect(()=>{
    apiTesting();
  }, []);

  const apiTesting = () =>{
    fetchDataFromApi("/movie/popular").then((res)=>{
      console.log("response", res);
      dispatch(getApiConfiguration(res))
    });
  };

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:mediaType/:id" element={<Details/>} />
        <Route path="/search/:query" element={<SearchResult/>} />
        <Route path="/explore/:mediaType" element={<Explore/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
