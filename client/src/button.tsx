interface ButtonProps {
  onClick?: () => void;
  title: string;
}

export const Button = (props: ButtonProps) => {
  const { onClick, title } = props;

  return (
    <button
      style={{
        fontSize: "20px",
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
