import { useState } from "react";
import Highlights from "./Highlights";
import RainCaller from "./RainCaller";
import Home from "./Home";

export default function Body({city,image,weatherImg,hourlyData,tridayData}){
    
    const [activeTab, setActiveTab] = useState("Home");
    return(
        <div className="body">
            {!city ? (
                <>Data not present</>
            ) : (
                <div className="main">
                        <div className="">
                            <button onClick={()=>setActiveTab("Home")} className={activeTab==="Home"?"active":""}>Home</button>
                            <button onClick={()=>setActiveTab("Highlights")} className={activeTab==="Highlights"?"active":""}>Highlights</button>
                            <button onClick={()=>setActiveTab("Rain Data")} className={activeTab==="Rain"?"active":""}>Rain Data</button>
                        </div>
                        <div className="location">
                            <p>Current Location</p>
                            <h3>{city.location.name}, {city.location.region}, {city.location.country}</h3>
                        </div>
                        {activeTab==="Home"&&<Home city={city} tridayData={tridayData} image={image} />}
                        {activeTab==="Highlights"&&<Highlights city={city} hourlyData={hourlyData} />}
                        {activeTab==="Rain Data"&&<RainCaller hourlyData={hourlyData} />}
                </div>
            )

            }
        </div>
    );
}