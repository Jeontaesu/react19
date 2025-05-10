import "./app.css";

function App() {
  const categories = [
    { name: "Fruites", items: ["Apple", "Cherry", "Watermelon"] },
    { name: "Vegitable", items: ["Carrot", "Cuccumber", "Lettuce"] },
  ];
  return (
    <>
      {categories.map((el, idx) => (
        <div key={idx}>
          <h1>{el.name}</h1>
          <ul>
            {el.items.map((el, idx) => (
              <li key={idx}>{el}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
export default App;

/*
  JSX안쪽에서 중첩 반복문 생성 방법
  - 반복문 안쪽에 또 다른 반복문으로 JSX를 중첩해서 생성하는 방법
*/
