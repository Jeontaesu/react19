export default function Btn({ label, handleClick }) {
  const defaultOpt = { label: "button", handleClick: null };
  // if (!label) label = defaultOpt.label;
  // if (!handleClick) handleClick = defaultOpt.handleClick;

  return <button onClick={handleClick ? handleClick : defaultOpt.handleClick}>{label ? label : defaultOpt.label}</button>;
}
