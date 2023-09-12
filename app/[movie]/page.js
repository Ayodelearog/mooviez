import Image from "next/image";

const MovieDetails = async ({params}) => {
    const {movie} = params;
    const imagePath = `https://image.tmdb.org/t/p/original/`;
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}&append_to_response=images`, {next: {revalidate: 240}});
    const res = await data.json()
    // console.log(res)
    // console.log(res.images.backdrops[0].file_path)
    


    return (
        <div>
            <div className=" max-w-lg">
                <h2 className=" text-2xl my-2">{res.title}</h2>
                <h2 className=" text-sm my-2"> Release date: {res.release_date}</h2>
                <h2>Runtime: {res.runtime} minutes</h2>
                <h2 className=" bg-green-600 inline-block text-sm my-2 py-1 px-2 rounded-md">{res.status}</h2>
                <Image 
                className=" my-12 w-full" 
                src={imagePath + res.backdrop_path} 
                width={1000} height={1000} alt={res.title} 
                priority />
                <p>{res.overview}</p>
                <div>
                    <Image src={imagePath + res.images.backdrops[0].file_path} width={1000} height={1000} alt={res.title}/>
                </div>
            </div>
        </div>
    );
}
 
export default MovieDetails;