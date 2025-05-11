import "./app.css";
import Card from "./components/Card";
import ListComponent from "./components/ListComponent";

function App() {
  const students = [
    { id: 1, name: "David", age: 20 },
    { id: 2, name: "Emily", age: 30 },
    { id: 3, name: "Michael", age: 40 },
  ];
  return (
    <>
      {/* 배열데이터와 더불어 반복 호출될 Card 컴포넌트도 props로 전달 */}
      <ListComponent arrData={students} Component={Card} />
    </>
  );
}
export default App;
