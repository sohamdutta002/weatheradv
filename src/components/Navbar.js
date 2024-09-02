export default function Navbar({search,setSearch}){
    return(
        <div className="nav">
            <div className="search">
                <input type="text" placeholder="Search here..." onChange={(event)=>setSearch(event.target.value)}></input>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="icons">
                {/* <li>{search}</li> */}
                <i className="fa-regular fa-user"></i>
                <i className="fa-regular fa-bell"></i>
                <i className="fa-solid fa-headphones"></i>
            </div>
        </div>
    );
}