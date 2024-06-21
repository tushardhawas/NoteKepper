import React from "react";
import {HiSearchCircle} from "react-icons/hi"
const Search = ({ handleSearchNote })=>{
return(
<div className="search">
    <HiSearchCircle className="search-icon" 
    size='1.3em'/>
    <input  
    onChange={(event) =>
        handleSearchNote(event.target.value)}
        type = 'text' placeholder="Search your Note"/>
</div>);
};

export default Search;