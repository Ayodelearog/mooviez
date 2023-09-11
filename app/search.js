'use client'
import { useState } from "react";


const Search = () => {
    //  'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=bfced46711eb0f7ec2e061f43d53bb18'

    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div>
        <form action="" method="post">
          <input 
          type="search" name="searchMovies" 
          value={searchQuery} id=""
          onChange={(e) => setSearchQuery(e.target.value)}
          className=" text-slate-950"
          />
          <input type="button" value="Find movie" />
        </form>
      </div>
    );
}
 
export default Search;