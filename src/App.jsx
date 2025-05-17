import { useEffect, useState } from "react";
import "./app.css";

function App() {
  const [MovieData, setMovideData] = useState([]);

  useEffect(() => {
    //가급적 fetching함수 정의도 useEffect안쪽에서 선언하는 것이 효율적
    //컴포넌트 재랜더링시 마다 함수가 불필요하게 재 정의되는 것 방지
    const fetchMovies = async () => {
      const BASE_URL = "https://api.themoviedb.org/3/movie/popular";
      const API_KEY = "4cf85a609f260b43cf0278ad12483b46";
      const REQ_URL = `${BASE_URL}?api_key=${API_KEY}&language=ko-KR`;

      const response = await fetch(REQ_URL);
      const data = await response.json();
      console.log(data.results);
      setMovideData(data.results);
    };

    fetchMovies();
  }, []);

  return (
    <>
      {MovieData.map((el) => {
        return (
          <article key={el.id}>
            <img src={`https://image.tmdb.org/t/p/w342/${el.poster_path}`} alt="" />
            <h2>{el.title}</h2>
            <ul>
              {el.genre_ids.map((el) => (
                //장르 번호를 반복돌며 li형태로 출력 (추후 장르명으로 변경)
                <li key={el}>{el}</li>
              ))}
            </ul>
          </article>
        );
      })}
    </>
  );
}
export default App;

/*
  서버 데이터를 컴포넌트 출력 흐름
  1. 서버 데이터가 담길 빈 배열 state생성
  2. useEffect를 활용해서 컴포넌트 처음 마운트시 한번만 서버 데이터 호출 뒤 빈 state에 담아줌 (async await)
  3. JSX를 통해 state에 담겨있는 배열값을 map으로 반복돌면서 렌더링
*/
