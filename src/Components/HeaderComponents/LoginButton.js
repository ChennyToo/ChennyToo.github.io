import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const nav = useNavigate();

  const loginButtonClicked = () => {
    nav("/login");
  };
  const buttonStyle = {
    backgroundColor: "#FFA500",
    color: "white",
    fontSize: "16px",
    height: "60px",
    width: "50%",
    outline: "1px solid black",
    borderRadius: "12px",
  };
  return (
    <button style={buttonStyle} onClick={loginButtonClicked}>
      Log In
    </button>
  );
};

export default LoginButton;
