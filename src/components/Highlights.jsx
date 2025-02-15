import React from 'react'
import TemperatureGraph from './TemperatureGraph'
import './css/styles.css'
const Highlights = ({city,hourlyData}) => {
  return (
    <div className="highlights">
        <h3>Today's Highlights</h3>
        <div className="cards">
            <div className="child">
                <p className="content">Feels Like :</p>
                <p className="value">{city.current.feelslike_c}&deg;C</p>
            </div>
            <div className="child">
                <p className="content">UV :</p>
                <p className="value">{city.current.uv}</p>
            </div>
            <div className="child">
                <p className="content">Visiblity :</p>
                <p className="value">{city.current.vis_km} km</p>
            </div>
            <div className="child">
                <p className="content">PM2.5 :</p>
                <p className="value">{city.current.air_quality.pm2_5}</p>
            </div>
            <div className="child">
                <p className="content">Precipitation</p>
                <p className="value">{city.current.precip_mm} mm</p>
            </div>
            <div className="child">
                <p className="content">Humidity</p>
                <p className="value">{city.current.humidity}%</p>
            </div>
            <div className="child">
                <p className="content">Wind</p>
                <p className="value">{city.current.wind_kph} km/h {city.current.wind_dir}</p>
            </div>
            <div className="child suntimings">
                <p className="content">Sunrise & Sunset</p>
                <p className="value"> <span className="arrow"><i className="fa-solid fa-arrow-up"></i></span>  {city.forecast.forecastday[0].astro.sunrise}  
                    <span className="arrow"><i className="fa-solid fa-arrow-down"></i></span> {city.forecast.forecastday[0].astro.sunset}</p>
            </div>
        </div>
        <div className="graph">
                <p className="active">Today</p>
                {!hourlyData ? <>Search a city to find graph</>
                    :   (
                        <TemperatureGraph hourlyData={hourlyData} />
                    )
                }
        </div>
    </div>
  )
}

export default Highlights