import React from 'react'

const Triday = ({tridayData}) => {
  return (
    <div className="forecast">
        <p>3 Days Forecast</p>
        {!tridayData ? <>Enter location to find data</>
            :   (
                <div className="days">
                    <div className="day">
                        <div className="temp"><span className="arrw"><i className="fa-solid fa-arrow-up"></i>{tridayData[0].day.maxtemp_c}&deg;C</span><span className="arrw"><i className="fa-solid fa-arrow-down"></i>{tridayData[0].day.mintemp_c}&deg;C</span> </div>
                        <div className="weatherimg">
                            <img src={tridayData[0].day.condition.icon} alt="weatherpng"></img>
                            <div className="date">
                                <div className="inner">
                                    {tridayData[0].date}
                                </div>
                                {tridayData[0].day.condition.text}
                            </div>
                        </div>
                    </div>
                    <div className="day">
                        <div className="weatherimg">
                            <img src={tridayData[1].day.condition.icon} alt="weatherpng"></img>
                            <div className="date">
                                <div className="inner">
                                    {tridayData[1].date}
                                </div>
                                {tridayData[1].day.condition.text}
                            </div>
                        </div>
                        <div className="temp"><span className="arrw"><i className="fa-solid fa-arrow-up"></i>{tridayData[1].day.maxtemp_c}&deg;C</span><span className="arrw"><i className="fa-solid fa-arrow-down"></i>{tridayData[1].day.mintemp_c}&deg;C</span> </div>
                    </div>
                    <div className="day">
                        <div className="temp"><span className="arrw"><i className="fa-solid fa-arrow-up"></i>{tridayData[2].day.maxtemp_c}&deg;C</span><span className="arrw"><i className="fa-solid fa-arrow-down"></i>{tridayData[2].day.mintemp_c}&deg;C</span> </div>
                        <div className="weatherimg">
                            <img src={tridayData[2].day.condition.icon} alt="weatherpng"></img>
                            <div className="date">
                                <div className="inner">
                                    {tridayData[2].date}
                                </div>
                                {tridayData[2].day.condition.text}
                            </div>
                        </div>
                    </div>
                </div>
            )}
    </div>
  )
}

export default Triday