import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Json from "../components/Json";

function Detail(){
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState({});
	const { id } = useParams()
	const getMovie = useCallback ( async () => {
		const json = await ( await fetch(
			`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
			setMovie(json.data.movie);
			setLoading((current) => !current);
			console.log(json);
	}, [id]);

	useEffect(() => {
		getMovie();
	}, []);
	
	return(
		<div>
			{loading ? (<h1>Loading...</h1>) : 
			<Json
      	key={movie.id}
				id={movie.id}
				year={movie.year}
				runtime={movie.runtime}
				rating={movie.rating}
				download={movie.download_count}
				like={movie.like_count}
				bgImg={movie.background_image_original}
				mcImg={movie.medium_cover_image}
      	coverImg={movie.medium_cover_image}
      	title={movie.title}
				description={movie.description_full}
      	genres={movie.genres}
      />
			}
		</div>
	) 
}

export default Detail;