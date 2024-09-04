export default function Leftbar(){
    return(
        <div className="leftbar">
            <ul>
                <li><a href="#"><span className="blank"></span><i className="fa-solid fa-house"></i>Home</a></li>
                <li><a href="#"><span className="blank"></span><i class="fa-regular fa-calendar"></i>Calendar</a></li>
                <li><a href="#" className="active"><span className="blank"></span><i className="fa-solid fa-chart-pie"></i>Analytics</a></li>
                <li><a href="#"><span className="blank"></span><i className="fa-solid fa-gear"></i>Settings</a></li>
            </ul>
        </div>
    );
}