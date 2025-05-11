export default function Btn(props) {
  console.log(props);
  return <button onClick={props.handleClick}>{props.label}</button>;
}
