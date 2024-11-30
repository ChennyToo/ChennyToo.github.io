import HomeButton from "./HeaderComponents/HomeButton";
import LoginButton from "./HeaderComponents/LoginButton";

const Header = () => {
  const headerStyle = {
    backgroundColor: "orange",
    paddingLeft: "16px",
    paddingRight: "16px",
    height: "70px",
    position: "relative",
    overflow: "hidden",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  };

  const nameStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "white",
    alignItems: "center",
  };

  const buttonContainerStyle = {
    display: "flex",
    gap: "30px",
    alignItems: "center",
    width: "20%",
    height: "100%",
    // backgroundColor: 'green',
  };

  const stripStyle = {
    position: "absolute",
    top: "-100%",
    width: "50px",
    height: "300%",
    backgroundColor: "#f5c453",
    transform: "rotate(45deg)",
  };

  const stripSeries = [
    { marginLeft: "40%" },
    { marginLeft: "50%" },
    { marginLeft: "60%" },
  ];

  return (
    <header style={headerStyle}>
      {stripSeries.map((strip, index) => (
        <div
          key={index}
          style={{ ...stripStyle, marginLeft: strip.marginLeft }}
        ></div>
      ))}{" "}
      <div style={containerStyle}>
        <div style={nameStyle}>Tiger Portion</div>

        <div style={buttonContainerStyle}>
          <HomeButton />
          <LoginButton></LoginButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
