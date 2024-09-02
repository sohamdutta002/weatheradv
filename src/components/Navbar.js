export default function Navbar(){
    return(
        <div className="nav">
            <div className="search">
                <input type="text" placeholder="Search here..."></input>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="icons">
                <i class="fa-regular fa-bell"></i>
                <i class="fa-regular fa-user"></i>
                <i class="fa-solid fa-headphones"></i>
            </div>
        </div>
    );
}