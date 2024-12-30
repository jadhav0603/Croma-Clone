import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../css/searchBar.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchVal, setSearchVal] = useState("");
  const Navigate = useNavigate();

  const handleSearch = async()=>{
    if (!searchVal.trim()) {
      alert("Please enter a search term.");
      return;
    }

    console.log("run handle search", searchVal)
    const response = await axios.get(`croma-clone-backend-d0pfyh5zg-vijays-projects-f2f3793e.vercel.app/search/${searchVal}`)
    console.log("searched Data = ",response.data)
    const data = response.data
    Navigate('/seachedData', {state:{data}})
    
  }

  const handleKeyDown = (e)=>{
    if(e.key === "Enter"){
      handleSearch()
    }
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="searchInput"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <FontAwesomeIcon 
        icon={faMagnifyingGlass} 
        className="searchIcon" 
        onClick={()=>handleSearch()}
      />
    </div>
  );
}

export default SearchBar;
