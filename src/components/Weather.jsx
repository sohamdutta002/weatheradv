import { useEffect, useRef, useState } from "react";
import {createClient} from "pexels";
import './css/styles.css'
import Body from './Body';
import { use } from "react";

function Weather(){
    const[activeImg,setActiveimg]=useState(null);
    const[weatherImg,setWeatherimg]=useState('https://s7d2.scene7.com/is/image/TWCNews/clouds_from_above');
    const[city,setCity]=useState(null);
    const[search,setSearch]=useState('');
    const[location,setLocation]=useState(null);
    const[hourlyData,setHourlyData]=useState(null);
    const[tridayData,setTridayData]=useState(null);
    const inp=useRef(null);
    
    useEffect(() => {
      if("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(async(position)=>{
            const {latitude,longitude}=position.coords;
            setLocation({latitude,longitude});
            setSearch(location)
            // console.log(location)
            try{
                const urlCord=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=31aa276cc1764693451c7224ade1a3b0`;
                const response=await fetch(urlCord).then(res=>res.json());
                // console.log(response);
                setSearch(response.name);
            }catch(err){
                console.log("Failed to fetch weather data"+err);
            }
        },(err)=>{
            console.log("Error fetching location:"+err);
        })
      } else {
        console.log("Geolocation is not supported by the browser.");
      }
    }, [])
    
    
    
    useEffect(()=>{
        const fetchApi=async ()=>{
            const Api_keyW=process.env.REACT_APP_W;
            // console.log(Api_keyImg);
            const url=`https://api.weatherapi.com/v1/forecast.json?key=${Api_keyW}&q=${search}&days=3&aqi=yes&alerts=no`;
            const response=await(await fetch(url)).json();
            if(response.error){
                setCity(null);
                // console.log(response.length);
                return;
            }
            setCity(response);
            // console.log(search)
            
        };
        if(search)  fetchApi();
    },[search])

    useEffect(()=>{
        const fetchImg=async ()=>{
            const Api_keyImg=process.env.REACT_APP_IMG;
            const client=createClient(Api_keyImg);
            let query=city?.location.name;
            const orientation='landscape';
            client.photos.search({query,per_page:1,orientation}).then(photos=>{
                // console.log(photos.photos[0].src.large);
                if(photos&&photos.photos[0])
                    setActiveimg(photos.photos[0].src.large);
            });
            // console.log(weatherImg);
            let weatherQuery='';
            // console.log(city.current.is_day);
            if(city?.current.is_day!=null){
                if(city.current.is_day===0)
                    weatherQuery='midnight sky';
                else
                    weatherQuery='day';
                // console.log(weatherQuery);
                client.photos.search({query:weatherQuery,per_page:2,orientation}).then(photos=>{
                    // console.log(photos.photos[1].src.large);
                    setWeatherimg(photos.photos[1].src.large);
                });
            }
        }
        if(city) fetchImg();
    },[city])
    
    useEffect(()=>{
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
            
        }
    },[city])

    return(
        <div className="full" style={{background: `url(${weatherImg}) center/cover no-repeat`}}>
            <div className='weather'>
                <div className="searchcenter">
                    <div className="search">
                        <input type="text" id="inputext" ref={inp} onKeyDown={(e)=>{
                            if(e.key==='Enter'){
                                setSearch(inp.current.value);
                            }
                        }} placeholder="Search here..."></input>
                        <div onClick={()=>setSearch(inp.current.value)}><i className="fa-solid fa-magnifying-glass"></i></div>
                    </div>
                </div>
                <Body city={city} image={activeImg} weatherImg={weatherImg} hourlyData={hourlyData} tridayData={tridayData}/>
            </div>
        </div>
    );
}

export default Weather;