import { useEffect, useState } from "react";
import './css/styles.css'
import Navbar from './Navbar';
import Body from './Body';
import Leftbar from './Leftbar';

function Weather(){
    const[city,setCity]=useState(null);
    const[search,setSearch]=useState('Kolkata');
    useEffect(()=>{
        const fetchApi=async ()=>{
            const Api_key='77dcdd1ce333466487d140819231809';
            const url=`https://api.weatherapi.com/v1/forecast.json?key=${Api_key}&q=${search}&days=3&aqi=yes&alerts=no`;
            const response=await(await fetch(url)).json();
            console.log(response);
            if(response.error){
                setCity(null);
                console.log(response.length);
                return;
            }
            setCity(response);
        };
        fetchApi();
    },[search])


    return(
        <>
            <Leftbar />
            <div className='exceptleftbar'>
                <Navbar search={search} setSearch={setSearch}/>
                <Body city={city}/>
            </div>
        </>
    );
}

export default Weather;