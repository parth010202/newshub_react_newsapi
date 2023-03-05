import React from 'react'
import axios from "axios"
import { useEffect } from 'react';
import { useState } from 'react';
import NewsItem from '../NewsItem';
const FetchData = ({cat}) => {
    const [Data,setData]=useState("");
    const fetchData =async()=>
    {
        await axios.get(cat?`https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=d493be58614040a0bf2ce1aa6f883002`:"https://newsapi.org/v2/top-headlines?country=us&apiKey=fefcba94b42647ba8f8ed4e8d92643b3")
    .then((res)=>setData(res.data.articles)&&console.log(res.data.articles));
    };
    useEffect(()=>{
        fetchData();
    },[]);

    return (
    <div className='container my-4'><h3><u>Top Headlines</u></h3>
    <div className='container d-flex justify-content-center align-items-center flex-column my-3' style={{minHeight:"100vh",}}>
    {Data ? Data.map((items,index)=><><NewsItem urlToImage={items.urlToImage} title={items.title} description={items.description}
    content={items.content} url={items.url}/>
    </>):"LOADING"}
    
    </div>
    </div>
)
}

export default FetchData