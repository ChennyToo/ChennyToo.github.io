import homeIcon from "../../assets/homebutton.png";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const nav = useNavigate();

  const homeButtonClicked = () => {
    nav("");
  };
  const buttonStyle = {
    height: "80%",
    aspectRatio: "1",
    borderRadius: "50%",
    outline: "1px solid black",
    backgroundColor: "orange",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <button style={buttonStyle} onClick={homeButtonClicked}>
      <img
        style={{
          objectFit: "scale-down",
          width: "60%",
          height: "60%",
          filter: "invert(1)",
        }}
        src={homeIcon}
      />
    </button>
  );
};

export default HomeButton;
