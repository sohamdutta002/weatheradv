// import React from 'react'

// const LocationTracker = ({onLocationRetreived}) => {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);
//   useEffect(()=>{
//     if("geolocation" in navigator){
//         navigator.geolocation.getCurrentPosition((position)=>{
//             const {latitude,longitude}=position.coords;
//             setLocation({latitude,longitude});
//             onLocationRetreived({latitude,longitude});
//         },
//         (err)=>{
//             setErrorMsg("Location access denied");
//             console.log(err);
//         })
//     }else{
//         setErrorMsg("Geolocation is not supported by the browser.");
//     }
//   },[onLocationRetreived])
//     return (
//     <div>

//     </div>
//   )
// }

// export default LocationTracker