import { useState } from "react";

export default function Count() {
  console.log("counter re-render");

  const [Num, setNum] = useState(0);
  return (
    <>
      <p>{Num}</p>
      <button onClick={() => setNum(Num - 1)}>-</button>
      <button onClick={() => setNum(Num + 1)}>+</button>
    </>
  );
}
/*
  리액트에서의 생명주기 (life cycle for component)
  - 컴포넌트 호출 (Mount)
  - 컴포넌트 변경 (Update)
  - 컴포넌트 제거 (Unmount)
*/
