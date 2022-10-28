import "./ToggleSwitch.css";

interface ToggleSwitchProps {
  label: string;
}
const ToggleSwitch = ({ label }: ToggleSwitchProps) => {
  return (
    <div className="container">
      {label}{" "}
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" name={label} id={label} />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
