import Link from "next/link";
import Image from "next/image";

const Movie = ({data}) => {
    const imagePath = "https://image.tmdb.org/t/p/original/";

    


    return (
        <div className=" my-4 border-2 border-gray-700 py-8 px-4" key={data.id}>
            <h1 className=" text-green-400 text-2xl my-2">{data.title}</h1>
            <h2 className=" text-sm my-4">Release date: {data.release_date}</h2>
            <Link href={`/${data.id}`}>
                <Image 
                src={imagePath + data.poster_path} 
                width={600} height={600} alt={data.title} 
                className=" transition duration-500 ease-in-out transform hover:scale-95"
                />
            </Link>
        </div>
    );
}
 
export default Movie;