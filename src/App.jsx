import { useState } from "react";
import "./app.css";

function App() {
  console.log("app re-rerender");
  const [Val, setVal] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    //아래와 같이 실제 input요소에 변경점이 생길때마다 해당 변경사항을 state에 담아두고
    //해당 state값을 다시 화면에 재랜더링하며 출력 하는 방식
    //리액트가 실시간으로 사용자가 입력하는 값을 상태로 담아서 관리하기 때문에 데이터 추적이 쉬움
    //이런 방식의 컴포넌트를 제어컴포넌트라고 함
    setVal(e.target.value);
  };

  return (
    <>
      <h1>React hook</h1>
      {/* State값을 input요소의 value값으로 등록 */}
      <input type="text" value={Val} onChange={handleChange} />
      <button>인풋 값 확인</button>
    </>
  );
}
export default App;
