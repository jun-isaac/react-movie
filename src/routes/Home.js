import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
    // ! 2. async에 await fetch를 활용해 영화 api를 불러옴 참고링크 : https://ko.javascript.info/async-await#ref-899
  const getMovies = async() => {
    const json = await (await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)).json();
    
    // ! 3. setMovies 함수를 활용해 movies에 json > data > movies를 넣어줌
    setMovies(json.data.movies);
    // ! 4. setLoading 함수를 활용해 loading 값을 false로 바꿔서 화면에 값을 띄워줌
    setLoading(false);
    };
    // ! 5. useEffect를 활용해 getMovies 함수를 한번 실행 함
    useEffect(() => {
    getMovies()
    }, []);
  console.log(movies);
  // ! 1. 로딩중에는 Loading...을 띄움
  return (
    <div>
      {loading ? <h1>Loading...</h1> :
			movies.map(movie => (
			<Movie
      	key={movie.id}
				id={movie.id}
      	coverImg={movie.medium_cover_image}
      	title={movie.title}
      	summary={movie.summary}
      	genres={movie.genres}
      />
      ))}
    </div>
  );
}

export default Home;