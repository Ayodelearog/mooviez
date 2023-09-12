import Movie from "./movie";
import Search from "./search";

// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const res = await data.json()
  
  return (
    <main>
      <h1 className=" text-3xl text-green-500 mb-16 mt-0 ">Mooviez</h1>
      <Search />
      <h2 className=" my-2 mt-32 text-2xl text-green-500">Popular movies</h2>
      <div className=" grid gap-16 grid-cols-fluid">
        {res.results.map((movie) => {
          return <Movie key={movie.id} data={movie} />
        })}
      </div>
    </main>
  )
}
