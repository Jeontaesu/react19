import "./app.css";
import Card from "./components/Card";

function App() {
  const students = [
    { id: 1, name: "David", age: 20 },
    { id: 2, name: "Emily", age: 30 },
    { id: 3, name: "Michael", age: 40 },
  ];
  return (
    <>
      <Card data={students[0]} />
    </>
  );
}
export default App;
