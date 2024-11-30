const LoginPage = () => {
  const stripStyle = {
    position: "absolute",
    top: "-100%",
    width: "30px",
    height: "300%",
    backgroundColor: "#f5c453",
    transform: "rotate(45deg)",
  };

  const stripSeries = [
    { marginLeft: "30%" },
    { marginLeft: "50%" },
    { marginLeft: "70%" },
  ];

  const textFeildStyle = {
    color: "white",

  }

  const buttonStyle = {
    backgroundColor: "#FFA500",
    color: "white",
    fontSize: "16px",
    height: "40px",
    width: "70%",
    outline: "1px solid black",
    borderRadius: "12px",
    marginTop: "10%",
  };

  return (
    <div
      style={{
        backgroundColor: "#292322",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "orange",
          width: "40%",
          height: "50%",
          marginBottom: "10%",
          borderRadius: "12px",
          overflow: "hidden",
          position: "relative",
          zIndex: 1,
        }}
      >
        {stripSeries.map((strip, index) => (
          <div
            key={index}
            style={{ ...stripStyle, marginLeft: strip.marginLeft }}
          ></div>
        ))}
        <form style={{display:'flex', flexDirection: 'column', width:'50%',marginLeft:"25%", alignItems:'center',justifyContent:'center', zIndex:2, position:"relative"}}>
  <label htmlFor="username" style={{...textFeildStyle, paddingTop:'20%'}}>Username:</label>
  <input type="text" id="username" name="username" style={{width:'100%'}} />
  <label htmlFor="pwd" style={{...textFeildStyle, paddingTop:'10%'}}>Password:</label>
  <input type="password" id="pwd" name="pwd" style={{width:'100%'}} />
  <button style={buttonStyle}>
      Log In
    </button>
</form>


      </div>
    </div>
  );
};

export default LoginPage;
