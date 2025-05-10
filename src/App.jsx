function App() {
  return (
    <>
      <h1>React19</h1>
      <h2>Basic Class</h2>
    </>
  );
}

export default App;

/*
  JSX
  - HTML과 비슷하게 보이지만 javascript코드로 변환되어 브라우저에 실행되는 리액트 전용 문법
  - React.createElement('h1', null, 'React19');

  Fragment <></>
  - 리액트도 결국은 자바스크립트 라이브러리이기 때문에 하나의 컴포넌트 함수는 단일 JSX만 리턴 가능
  - 복수개의 JSX를 리턴할때 그룹핑하기 위한 상위 요소가 필요없을때 사용하는 JSX문법
  - 그룹핑 기능만 있고 실제 화면에 출력되진 않음
*/
