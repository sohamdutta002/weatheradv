import './css/styles.css'
import Navbar from './Navbar';
import Body from './Body';
import Leftbar from './Leftbar';

function Weather(){
    return(
        <>
            <Leftbar />
            <div className='exceptleftbar'>
                <Navbar/>
                <Body />
            </div>
        </>
    );
}

export default Weather;