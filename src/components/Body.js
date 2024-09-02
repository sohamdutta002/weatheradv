export default function Body(){
    return(
        <div className="body">
            <div className="left">
                <div className="location">
                    <p>Current Location</p>
                    <h3>Kolkata, India</h3>
                </div>
                <div className="locationCards">
                    <div className="card active"></div>
                    <div className="card new"></div>
                </div>
                <div className="highlights">
                    <h3>Today's Highlights</h3>
                    <div className="cards">
                        <div className="child">
                            <p className="content">Precipitation</p>
                            <p className="value">2%</p>
                        </div>
                        <div className="child">
                            <p className="content">Humidity</p>
                            <p className="value">87%</p>
                        </div>
                        <div className="child">
                            <p className="content">Wind</p>
                            <p className="value">0 km/h</p>
                        </div>
                        <div className="child suntimings">
                            <p className="content">Sunrise & Sunset</p>
                            <p className="value">6:18 am    7:27 pm</p>
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
        </div>
    );
}