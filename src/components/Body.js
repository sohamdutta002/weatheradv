import RainGraph from "./RainGraph";
import TemperatureGraph from "./TemperatureGraph";
export default function Body({city,image,weatherImg,hourlyData,tridayData}){
    let timeDisplay="";
    let dateDisplay="";
    // console.log(tridayData);
    // console.log(image);
    // console.log(weatherImg);
    if(city&&city.location){
        const date=city.location.localtime.split(" ")[0];
        let [y,m,d]=date.split("-").map(String);
        dateDisplay=`${d}/${m}/${y.substring(2)}`;
        const time=city.location.localtime.split(" ")[1];
        let [hours,minutes]=time.split(":").map(Number);
        const period=hours>=12?"PM":"AM";
        hours=hours%12||12;
        timeDisplay=`${hours}:${minutes.toString().padStart(2,'0')} ${period}`;
    }
    return(
        <div className="body">
            {!city ? (
                <>Data not present</>
            ) : (
                <>
                    <div className="left">
                        <div className="location">
                            <p>Current Location</p>
                            <h3>{city.location.name}, {city.location.region}, {city.location.country}</h3>
                        </div>
                        <div className="locationCards">
                            <div className="card active"
                                style={{background: `url(${image}) center center / cover no-repeat`}}
                            >
                                <div className="leftcard">
                                    <img src={city.current.condition.icon} alt='Weather Condition'></img>
                                    {city.current.temp_c}&deg;C
                                </div>
                                <div className="rightcard">
                                    <div className="date">{dateDisplay}</div>
                                    <div className="time">{timeDisplay}</div>
                                    <div className="condition">{city.current.condition.text}</div>
                                </div>
                            </div>
                            <div className="card new"
                                style={{background: `url(${weatherImg}) center center / cover no-repeat`}}
                            >
                                <div className="head">Feels Like :</div>
                                <div className="val">{city.current.feelslike_c}&deg;C</div> 
                                <div className="head">UV :</div>
                                <div className="val">{city.current.uv}</div> 
                                <div className="head">Visiblity :</div>
                                <div className="val">{city.current.vis_km} km</div> 
                                <div className="head">PM2.5 :</div>
                                <div className="val">{city.current.air_quality.pm2_5}</div> 
                            </div>
                        </div>
                        <div className="highlights">
                            <h3>Today's Highlights</h3>
                            <div className="cards">
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
                    </div>
                    <div className="right">
                        <div className="rain">
                            <p>Chance of Rain</p>
                            {!hourlyData ? <p>Data not available</p> : (
                                <RainGraph hourlyData={hourlyData} />
                            )}
                        </div>
                        <div className="forecast">
                            <p>3 Days Forecast</p>
                            {!tridayData ? <>Enter location to find data</>
                                :   (
                                    <div className="days">
                                        <div className="day">
                                            <div className="temp"><i className="fa-solid fa-arrow-up"></i>{tridayData[0].day.maxtemp_c} <i className="fa-solid fa-arrow-down"></i>{tridayData[0].day.mintemp_c}</div>
                                            <div className="weatherimg">
                                                <img src={tridayData[0].day.condition.icon} alt="weatherpng"></img>
                                            </div>
                                            <div className="date">
                                                <div className="inner">
                                                    {tridayData[0].date}
                                                </div>
                                                {tridayData[0].day.condition.text}
                                            </div>
                                        </div>
                                        <div className="day">
                                            <div className="weatherimg">
                                                <img src={tridayData[1].day.condition.icon} alt="weatherpng"></img>
                                            </div>
                                            <div className="date">
                                                <div className="inner">
                                                    {tridayData[1].date}
                                                </div>
                                                {tridayData[1].day.condition.text}
                                            </div>
                                            <div className="temp"><i className="fa-solid fa-arrow-up"></i>{tridayData[1].day.maxtemp_c} <i className="fa-solid fa-arrow-down"></i>{tridayData[1].day.mintemp_c}</div>
                                        </div>
                                        <div className="day">
                                            <div className="temp"><i className="fa-solid fa-arrow-up"></i>{tridayData[2].day.maxtemp_c} <i className="fa-solid fa-arrow-down"></i>{tridayData[2].day.mintemp_c}</div>
                                            <div className="weatherimg">
                                                <img src={tridayData[2].day.condition.icon} alt="weatherpng"></img>
                                            </div>
                                            <div className="date">
                                                <div className="inner">
                                                    {tridayData[2].date}
                                                </div>
                                                {tridayData[2].day.condition.text}
                                            </div>
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>
                </>
            )

            }
        </div>
    );
}