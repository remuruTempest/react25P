



export default function Search({search, setSearch}) {


    function handleSearch() {
        console.log("Search for city: ", search);
    }

    return(
        <div className="search-engine">
            <input type="text" 
            placeholder="Enter city name"
            name="search"
            value={search}
            onChange={(event)=>setSearch(event.target.value)}
            />
            <button  onClick={handleSearch}>Search Weather</button>
        </div>
    );
}