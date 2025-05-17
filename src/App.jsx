import { useState } from "react";
import "./app.css";

function App() {
  console.log("re-render");
  // useState 사용법 숙지
  // [상태값, 상태변경함수] = useState(초기값);
  // 리액트안에서는 중요한 데이터는 무조건 상태에 담아둠
  // 상태에 담긴 값은 무조건 상태변경함수를 통해서만 수정
  // 상태변경함수에 의해서 상태변경이 일어나면 리액트는 컴포넌트를 다시 렌더링하면 변경된 상태값을 화면에 반영
  const [Num, setNum] = useState(0);

  return (
    <>
      <h1>React hook</h1>

      <p>{Num}</p>
      <button onClick={() => setNum(Num - 1)}>-</button>
      <button onClick={() => setNum(Num + 1)}>+</button>
    </>
  );
}
export default App;
