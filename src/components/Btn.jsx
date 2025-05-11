export default function Btn({ label, handleClick }) {
  const defaultOpt = { label: "button", handleClick: null };
  // if (!label) label = defaultOpt.label;
  // if (!handleClick) handleClick = defaultOpt.handleClick;

  //삼항 연산자 활용하는 게 더 좋다.
  return <button onClick={handleClick ? handleClick : defaultOpt.handleClick}>{label ? label : defaultOpt.label}</button>;
}
