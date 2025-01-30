import { useEffect, useState } from "react";
import Suggestions from "./suggestion";





export default function(){
        const[loading,setLoading]=useState(false);
        const[users, setUsers]= useState([]);
        const [error,setError]=useState(null);
        const [searchParam,setSearchParam]=useState('');
        const [showDropDown ,setShowDropDown]=useState(false);
        const [filteredUsers ,setFilteredUsers]=useState([]);


        function handleChange(event){
            const query= event.target.value.toLowerCase();
            setSearchParam(query);

            if(query.length > 1){
                const filteredData= users && users.length
                ? users.filter(item => item.toLowerCase().indexOf(query) > -1)
                :[];
                setFilteredUsers(filteredData)
                setShowDropDown(true);

            }else {
                setShowDropDown(false);
            }

        }

        function handleClick(event){
            
            setShowDropDown(false);
            setSearchParam(event.target.innerText);
            setFilteredUsers([]);
        }
         
        async function fetchListOfUsers() {
            try{
                const response =await fetch(`https://dummyjson.com/users`);

                const data =await response.json();

                
                if(data&& data.users && data.users.length){
                    setUsers(data.users.map((userItem)=>userItem.firstName));
                    setLoading(false);
                    setError(null);
                }
            }catch(error){
                
                setLoading(false)
                console.log(error);
              setError(error)
            }
        }

        useEffect(()=>{
            fetchListOfUsers()
        },[])


        console.log(users,filteredUsers);
        
    return(
        <div className="search-autocomplete-container">
            {
                loading ? <h1>Loading data be patient</h1> :
                
                <input 
                value={searchParam}
                type="text" 
                name="search-user" 
                placeholder="search Users here" 
                onChange={handleChange}
                />

            }
                
                { 
                    showDropDown && <Suggestions handleClick={handleClick} data={filteredUsers}/>
                }
        </div>
    )
}