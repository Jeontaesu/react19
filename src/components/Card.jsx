export default function Card({ data }) {
  return (
    <article>
      <h1>name: {data.name}</h1>
      <p>age: {data.age}</p>
    </article>
  );
}
