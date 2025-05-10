import "./app.css";

function App() {
  const isLoggedIn = true;

  return (
    <>
      <h1>React19</h1>
      <p>{isLoggedIn ? "로그인되었습니다" : "로그인해주세요"}</p>

      <nav>{isLoggedIn ? <a href="#">logout</a> : <a href="#">login</a>}</nav>

      {/* 삼항 연산자로 복잡한 구조의 분기 렌더링 해야될 때 */}
      {/* 복잡한 구문일때는 괄호로 그룹핑한 이후에 복수개 요소를 반환하기 위해 <></>필요 */}
      <section>
        {isLoggedIn ? (
          <>
            <a href="#">logout</a>
            <a href="#">my diary</a>
          </>
        ) : (
          <>
            <a href="#">login</a>
            <a href="#">join</a>
          </>
        )}

        {/* 분기처리가 아닌 특정한 조건일때만 JSX를 출력하고 싶을때 */}
        {isLoggedIn && <p>홍길동님 반갑습니다.</p>}
      </section>
    </>
  );
}
export default App;
