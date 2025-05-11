import "./app.css";
import Card from "./components/Card";
import ListComponent from "./components/ListComponent";
import movieData from "./data";

function App() {
  return (
    <>
      {/* 배열데이터와 더불어 반복 호출될 Card 컴포넌트도 props로 전달 */}
      <ListComponent arrData={movieData} Component={Card} />
    </>
  );
}
export default App;
