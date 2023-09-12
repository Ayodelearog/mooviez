'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const imagePath = "https://image.tmdb.org/t/p/original/";

    const searchMovies = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=bfced46711eb0f7ec2e061f43d53bb18`);
        const data = await response.json();
        setMovies(data.results);
        // console.log(data.results)
      }

      
    return (
        <div className=" ">
            <form onSubmit={searchMovies} className="  sm:w-full md:w-2/5 my-4 mb-8 flex items-center h-8">
                <input 
                    type="search" 
                    name="searchMovies" 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className=" bg-transparent border-2
                     border-gray-700 mr-2 text-gray-300 outline-none px-1 h-full w-8/12 "
                />
                <input type="submit" value="Find movie" className=" bg-green-600 h-full border-2 border-green-600 px-2 py-1 
                 flex items-center justify-center hover:text-green-500 hover:bg-transparent hover:border-2
                  hover:border-green-500 transition duration-500 ease-in-out cursor-pointer w-4/12 " />
            </form>
            {/* Display the movies here */}
            <div className=" grid gap-16 grid-cols-fluid">

              {movies.map((movie) => (
                  <div className=" my-4 border-2 border-gray-700 py-8 px-4">
                  <h1 className=" text-green-400 text-2xl my-2">{movie.title}</h1>
                  <h2 className=" text-sm my-4">Release date: {movie.release_date}</h2>
                  <Link href={`/${movie.id}`}>
                      <Image 
                      src={imagePath + movie.poster_path} 
                      width={600} height={600} alt={movie.title} 
                      className=" transition duration-500 ease-in-out transform hover:scale-95"
                      />
                  </Link>
              </div>
              ))}
            </div>
        </div>
    );
}

export default Search;