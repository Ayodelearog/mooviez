import Movie from "./movie";
import Search from "./search";

// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const res = await data.json()
  

  // const data = await fetch('https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=bfced46711eb0f7ec2e061f43d53bb18');
  //   const res = await data.json()
  //   console.log(res)

  // Specify all properties: name, family, style
// icon({name: 'user', family: 'classic', style: 'solid'})
  
  console.log(res)

  // 'https://api.themoviedb.org/3/movie/popular'
  return (
    <main>
      <h1 className=" text-3xl text-green-500 mb-16 mt-0 ">Mooviez</h1>
      <Search />
      <h2>Popular movies</h2>
      <div className=" grid gap-16 grid-cols-fluid">
        {res.results.map((movie) => {
          return <Movie key={movie.id} data={movie} />
        })}
      </div>
    </main>
  )
}
