import "./app.css";
//아래와 같은 방법으로는 App컴포넌트 함수가 재호출될때마다 num값을 기억하지 못하기 때문에 컴포넌트 내부에서 활요이 불가능
//자바스크립트에서 함수가 호출되더라도 그 함수 내부에 선언된 지역변수를 계속 기억하면서 활용하고 싶을때 쓰는 것이 -> 클로저
//클로저 : 함수호출시 지역변수를 품고 있는 또 다른 함수를 반환하는 형태
//리액트의 훅은 고차함수 (클로저) 형태로 구성되어 있음
let num = 0;

function App() {
  console.log("re-render");

  const minus = () => {
    num - 1;
    console.log(num);
    return num;
  };
  const plus = () => {
    num + 1;
    console.log(num);
    return num;
  };
  return (
    <>
      <h1>React hook</h1>

      <p>{num}</p>
      <button onClick={minus}>-</button>
      <button onClick={plus}>+</button>
    </>
  );
}
export default App;
