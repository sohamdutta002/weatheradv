import { useEffect, useState } from "react";
import {createClient} from "pexels";
import './css/styles.css'
import Navbar from './Navbar';
import Body from './Body';
import Leftbar from './Leftbar';

function Weather(){
    const[activeImg,setActiveimg]=useState(null);
    const[weatherImg,setWeatherimg]=useState('https://s7d2.scene7.com/is/image/TWCNews/clouds_from_above');
    const[city,setCity]=useState(null);
    const[search,setSearch]=useState('Kolkata');
    const[hourlyData,setHourlyData]=useState(null);
    const[tridayData,setTridayData]=useState(null);
    useEffect(()=>{
        const fetchApi=async ()=>{
            const Api_keyW='77dcdd1ce333466487d140819231809';
            const Api_keyImg='4qPlxbEd2pSbR7nWwBnhcCLyCS9i8qJ8S72q9YfYFxPJ6tjmyh8KgSja';
            const url=`https://api.weatherapi.com/v1/forecast.json?key=${Api_keyW}&q=${search}&days=3&aqi=yes&alerts=no`;
            const response=await(await fetch(url)).json();
            if(response.error){
                setCity(null);
                console.log(response.length);
                return;
            }
            setCity(response);
            const client=createClient(Api_keyImg);
            let query=search;
            const orientation='landscape';
            client.photos.search({query,per_page:1,orientation}).then(photos=>{
                // console.log(photos.photos[0].src.large);
                if(photos&&photos.photos[0])
                    setActiveimg(photos.photos[0].src.large);
            });
            // console.log(weatherImg);
            let triday='';
            if(city&&city.current){
                if(city&&city.forecast){
                    setHourlyData(city.forecast.forecastday[0].hour);
                    // console.log(hourlyData);
                    triday=city.forecast.forecastday.map(forecast=>({
                        date:forecast.date,
                        day:forecast.day
                    }));
                    setTridayData(triday);
                    // console.log(triday);
                }
                let weatherQuery='';
                // console.log(weatherQuery);
                if(city.current.is_day){
                    if(city.current.is_day===0)
                        weatherQuery='night-sky';
                    else
                        weatherQuery='day';
                    // console.log(weatherQuery);
                    client.photos.search({query:weatherQuery,per_page:1,orientation}).then(photos=>{
                        // console.log(photos.photos[0].src.large);
                        setWeatherimg(photos.photos[0].src.large);
                    });
                }
            }
        };
        fetchApi();
    },[search])


    return(
        <>
            <Leftbar />
            <div className='exceptleftbar'>
                <Navbar search={search} setSearch={setSearch}/>
                <Body city={city} image={activeImg} weatherImg={weatherImg} hourlyData={hourlyData} tridayData={tridayData}/>
            </div>
        </>
    );
}

export default Weather;