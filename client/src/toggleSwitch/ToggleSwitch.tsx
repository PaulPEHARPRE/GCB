import "./ToggleSwitch.css";

interface ToggleSwitchProps {
  label: string;
  toggleBlackAndWhite: () => void;
  isGrey: boolean;
}
const ToggleSwitch = ({
  label,
  toggleBlackAndWhite,
  isGrey,
}: ToggleSwitchProps) => {
  return (
    <div className="container">
      {label}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          name={label}
          id={label}
          onChange={toggleBlackAndWhite}
        />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
