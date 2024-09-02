export default function Body({city}){
    let timeDisplay="";
    let dateDisplay="";
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
                            <div className="card active">
                                <div className="leftcard">
                                    <img src={city.current.condition.icon}></img>
                                    {city.current.temp_c}&deg;C
                                </div>
                                <div className="rightcard">
                                    <div className="date">{dateDisplay}</div>
                                    <div className="time">{timeDisplay}</div>
                                    <div className="condition">{city.current.condition.text}</div>
                                </div>
                            </div>
                            <div className="card new">
                                <div className="head">Feels Like :</div>
                                <div className="val">{city.current.feelslike_c}&deg;C</div> 
                                <div className="head">UV :</div>
                                <div className="val">{city.current.uv}</div> 
                                <div className="head">Visiblity :</div>
                                <div className="val">{city.current.vis_km} km</div> 
                                <div className="head">PM2.5 :</div>
                                <div className="val">{city.current.air_quality.pm2_5}&deg;C</div> 
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
                                    <p className="value"><i class="fa-solid fa-arrow-up"></i>  {city.forecast.forecastday[0].astro.sunrise}     <i class="fa-solid fa-arrow-down"></i>  {city.forecast.forecastday[0].astro.sunset}</p>
                                </div>
                            </div>
                            <div className="graph">
                                    <p className="active">Today</p>
                                    <p>Week</p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="rain">
                            <p>Chance of Rain</p>
                        </div>
                        <div className="forecast">
                            <p>3 Days Forecast</p>
                        </div>
                    </div>
                </>
            )

            }
        </div>
    );
}