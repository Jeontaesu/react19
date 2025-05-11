import "./app.css";
import Btn from "./components/Btn";

function App() {
  const handleLogin = () => {
    alert("로그인 되었습니다.");
  };
  const handleLogout = () => {
    alert("로그아웃 되었습니다.");
  };

  return (
    <>
      <h1>컴포넌트 재사용 방법</h1>
      <Btn label={"로그인"} handleClick={handleLogin} />
      <Btn label={"로그아웃"} handleClick={handleLogout} />
      <Btn />
    </>
  );
}
export default App;

/*
  재사용 가능한 컴포넌트 생성시 유의점
  - 하나의 컴포넌트는 하나의 기능만 담당
  - 예를 들어 버튼 컴포넌트는 이벤트발생시에 대한 핸들러 처리
  - 리스트 컴포넌트 -> 데이터를 받아서 동적 리스트 생성
  - 이때 컴포넌트를 재활용하기 위해서는 함수에 인수전달하듯이 컴포넌트 호출시 props에 데이터를 전달하는 구조로 생성
*/
