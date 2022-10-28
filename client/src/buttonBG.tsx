import browser from "./assets/BROWSER.png";
interface ButtonProps {
  onClick?: () => void;
}

const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);

export const ButtonBG = (props: ButtonProps) => {
  const { onClick } = props;

  return (
    <div
      style={{
        height: `${vw * 0.044}px`,
        width: vw,
      }}
    >
      <div
        style={{
          backgroundImage: `url(${browser})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: `cover`,
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "end",
          alignItems:"end"
        }}
      >
        <button style={{
          width: "30px",
          height:"50px",
          backgroundColor: "transparent",
          borderWidth: "0px"
        }}
        onClick={onClick}></button>
      </div>
    </div>
  );
};
