import "./app.css";

function App() {
  const fruits = ["Apple", "Banana", "Cherry"];

  return (
    <>
      <h1>배열을 통한 JSX요소 반복 출력</h1>

      <ul>
        {fruits.map((el, idx) => {
          return <li key={idx}>{el}</li>;
        })}
      </ul>

      {/* 위의 코드에서 중괄호 return문이 생략된 버전 (실무에서는 이 버전을 더 많이 활용) */}
      <ul>
        {fruits.map((el, idx) => (
          <li key={idx}>{el}</li>
        ))}
      </ul>
    </>
  );
}
export default App;

/*
  리액트에서 반복요소 생성법
  - {배열.map(JSX를 반환하는 콜백함수)} 형태로 작성
  - 이때 각각의 반복도는 JSX구문엔 무조건 고유의 key값 설정
*/
